import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  briefings,
  events,
  facts,
  initialFeedbackEntries,
  initialReactions,
  stories,
  translations,
} from '../data';
import type {
  FactItem,
  FeedbackEntry,
  FeedbackStatus,
  Lang,
  ReactionKey,
  StoryItem,
  TargetGroup,
  ToolkitBriefing,
  UiTranslations,
  WorkshopEvent,
} from '../types/hub';

const STORAGE_KEYS = {
  lang: 'ikea_edi_hub_lang',
  reactions: 'ikea_edi_hub_reactions',
  userReactions: 'ikea_edi_hub_user_reactions',
  rsvps: 'ikea_edi_hub_rsvps',
  feedback: 'ikea_edi_hub_feedback',
} as const;

export type NewFeedbackInput = {
  topic: string;
  department: TargetGroup | 'all';
  anonymous: boolean;
  authorName?: string;
};

export interface HubContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: UiTranslations;
  facts: FactItem[];
  stories: StoryItem[];
  events: WorkshopEvent[];
  briefings: ToolkitBriefing[];
  reactions: Record<string, Record<ReactionKey, number>>;
  userReactions: Record<string, ReactionKey[]>;
  toggleReaction: (factId: string, key: ReactionKey) => void;
  rsvpedEventIds: string[];
  toggleRsvp: (eventId: string) => void;
  feedbackEntries: FeedbackEntry[];
  addFeedback: (entry: NewFeedbackInput) => void;
  cycleFeedbackStatus: (id: string) => void;
}

const HubContext = createContext<HubContextValue | null>(null);

function safeReadStorage<T>(key: string, fallback: T, validate?: (val: unknown) => val is T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (validate && !validate(parsed)) return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}

function safeWriteStorage(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota or private-mode write errors cleanly
  }
}

function isLang(val: unknown): val is Lang {
  return val === 'en' || val === 'fi' || val === 'sv';
}

function isPlainObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}

function isReactionKey(val: unknown): val is ReactionKey {
  return val === 'helpful' || val === 'eyeOpening' || val === 'discuss';
}

function isValidCount(val: unknown): val is number {
  return typeof val === 'number' && Number.isFinite(val) && val >= 0;
}

function isFeedbackStatus(val: unknown): val is FeedbackStatus {
  return val === 'new' || val === 'reviewed' || val === 'turned-into-fact';
}

function isFeedbackDepartment(val: unknown): val is TargetGroup | 'all' {
  return (
    val === 'all' ||
    val === 'management' ||
    val === 'sales-cr' ||
    val === 'food-logistics'
  );
}

function sanitizeFeedbackEntry(item: unknown): FeedbackEntry | null {
  if (!isPlainObject(item)) return null;
  const { id, topic, department, anonymous, authorName, status, createdAt } = item;
  if (typeof id !== 'string' || !id.trim()) return null;
  if (typeof topic !== 'string' || !topic.trim()) return null;
  if (typeof createdAt !== 'string' || !createdAt.trim()) return null;
  if (!isFeedbackDepartment(department)) return null;
  if (typeof anonymous !== 'boolean') return null;
  if (!isFeedbackStatus(status)) return null;

  const cleanAuthor =
    !anonymous && typeof authorName === 'string' && authorName.trim().length > 0
      ? authorName.trim()
      : undefined;

  return {
    id: id.trim(),
    topic: topic.trim(),
    department,
    anonymous,
    ...(cleanAuthor ? { authorName: cleanAuthor } : {}),
    status,
    createdAt: createdAt.trim(),
  };
}

function loadInitialRsvps(): string[] {
  const saved = safeReadStorage<unknown[] | null>(
    STORAGE_KEYS.rsvps,
    null,
    (v): v is unknown[] => Array.isArray(v),
  );
  if (!saved) return [];
  return Array.from(
    new Set(
      saved.filter((item): item is string => typeof item === 'string' && item.trim().length > 0),
    ),
  );
}

function loadInitialFeedbackEntries(): FeedbackEntry[] {
  const saved = safeReadStorage<unknown[] | null>(
    STORAGE_KEYS.feedback,
    null,
    (v): v is unknown[] => Array.isArray(v),
  );
  if (!saved) {
    safeWriteStorage(STORAGE_KEYS.feedback, initialFeedbackEntries);
    return initialFeedbackEntries;
  }

  const valid = saved
    .map((item) => sanitizeFeedbackEntry(item))
    .filter((entry): entry is FeedbackEntry => entry !== null);

  if (valid.length === 0) {
    safeWriteStorage(STORAGE_KEYS.feedback, initialFeedbackEntries);
    return initialFeedbackEntries;
  }

  return valid;
}

function loadInitialReactions(): Record<string, Record<ReactionKey, number>> {
  const saved = safeReadStorage<Record<string, unknown> | null>(
    STORAGE_KEYS.reactions,
    null,
    isPlainObject,
  );
  if (!saved) return initialReactions;

  const merged: Record<string, Record<ReactionKey, number>> = { ...initialReactions };
  for (const fact of facts) {
    const base = initialReactions[fact.id] ?? { helpful: 0, eyeOpening: 0, discuss: 0 };
    const rawFactCounts = Object.hasOwn(saved, fact.id) ? saved[fact.id] : undefined;
    if (isPlainObject(rawFactCounts)) {
      merged[fact.id] = {
        helpful: isValidCount(rawFactCounts.helpful) ? rawFactCounts.helpful : base.helpful,
        eyeOpening: isValidCount(rawFactCounts.eyeOpening)
          ? rawFactCounts.eyeOpening
          : base.eyeOpening,
        discuss: isValidCount(rawFactCounts.discuss) ? rawFactCounts.discuss : base.discuss,
      };
    }
  }
  return merged;
}

function loadInitialUserReactions(): Record<string, ReactionKey[]> {
  const saved = safeReadStorage<Record<string, unknown> | null>(
    STORAGE_KEYS.userReactions,
    null,
    isPlainObject,
  );
  if (!saved) return {};

  const sanitized: Record<string, ReactionKey[]> = {};
  for (const [factId, value] of Object.entries(saved)) {
    if (
      !factId ||
      factId === '__proto__' ||
      factId === 'constructor' ||
      factId === 'prototype'
    ) {
      continue;
    }
    if (!Array.isArray(value)) continue;
    const validKeys = Array.from(new Set(value.filter(isReactionKey)));
    if (validKeys.length > 0) {
      sanitized[factId] = validKeys;
    }
  }
  return sanitized;
}

const STATUS_CYCLE: Record<FeedbackStatus, FeedbackStatus> = {
  new: 'reviewed',
  reviewed: 'turned-into-fact',
  'turned-into-fact': 'new',
};

export function HubProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    safeReadStorage<Lang>(STORAGE_KEYS.lang, 'en', isLang),
  );
  const [reactions, setReactions] = useState<Record<string, Record<ReactionKey, number>>>(
    loadInitialReactions,
  );
  const [userReactions, setUserReactions] = useState<Record<string, ReactionKey[]>>(
    loadInitialUserReactions,
  );
  const [rsvpedEventIds, setRsvpedEventIds] = useState<string[]>(loadInitialRsvps);
  const [feedbackEntries, setFeedbackEntries] = useState<FeedbackEntry[]>(
    loadInitialFeedbackEntries,
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    safeWriteStorage(STORAGE_KEYS.lang, nextLang);
  };

  const toggleReaction = (factId: string, key: ReactionKey) => {
    const currentUserKeys = userReactions[factId] ?? [];
    const alreadyActive = currentUserKeys.includes(key);

    const nextUserKeys = alreadyActive
      ? currentUserKeys.filter((k) => k !== key)
      : [...currentUserKeys, key];

    const nextUserReactions = {
      ...userReactions,
      [factId]: nextUserKeys,
    };

    const currentFactCounts = reactions[factId] ?? { helpful: 0, eyeOpening: 0, discuss: 0 };
    const nextCount = Math.max(0, currentFactCounts[key] + (alreadyActive ? -1 : 1));
    const nextReactions = {
      ...reactions,
      [factId]: {
        ...currentFactCounts,
        [key]: nextCount,
      },
    };

    setUserReactions(nextUserReactions);
    setReactions(nextReactions);
    safeWriteStorage(STORAGE_KEYS.userReactions, nextUserReactions);
    safeWriteStorage(STORAGE_KEYS.reactions, nextReactions);
  };

  const toggleRsvp = (eventId: string) => {
    setRsvpedEventIds((prev) => {
      const next = prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId];
      safeWriteStorage(STORAGE_KEYS.rsvps, next);
      return next;
    });
  };

  const addFeedback = (input: NewFeedbackInput) => {
    const trimmedTopic = input.topic.trim();
    if (!trimmedTopic) return;

    const trimmedAuthor = input.authorName?.trim();
    const newEntry: FeedbackEntry = {
      id: `fb-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      topic: trimmedTopic,
      department: input.department,
      anonymous: input.anonymous,
      ...(input.anonymous || !trimmedAuthor ? {} : { authorName: trimmedAuthor }),
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    setFeedbackEntries((prev) => {
      const next = [newEntry, ...prev];
      safeWriteStorage(STORAGE_KEYS.feedback, next);
      return next;
    });
  };

  const cycleFeedbackStatus = (id: string) => {
    setFeedbackEntries((prev) => {
      const next = prev.map((entry) =>
        entry.id === id
          ? { ...entry, status: STATUS_CYCLE[entry.status] ?? 'new' }
          : entry,
      );
      safeWriteStorage(STORAGE_KEYS.feedback, next);
      return next;
    });
  };

  const value: HubContextValue = {
    lang,
    setLang,
    t: translations[lang],
    facts,
    stories,
    events,
    briefings,
    reactions,
    userReactions,
    toggleReaction,
    rsvpedEventIds,
    toggleRsvp,
    feedbackEntries,
    addFeedback,
    cycleFeedbackStatus,
  };

  return <HubContext.Provider value={value}>{children}</HubContext.Provider>;
}

export function useHub(): HubContextValue {
  const ctx = useContext(HubContext);
  if (!ctx) {
    throw new Error('useHub must be used within a HubProvider');
  }
  return ctx;
}
