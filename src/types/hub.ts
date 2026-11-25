export type Lang = 'en' | 'fi' | 'sv';

export type LocalizedText = Record<Lang, string>;

export type TargetGroup = 'management' | 'sales-cr' | 'food-logistics';

export type FactCategory = 'accessibility' | 'language' | 'shift-life' | 'culture';

export type ReactionKey = 'helpful' | 'eyeOpening' | 'discuss';

export interface FactItem {
  id: string;
  weekLabel: string;
  isCurrentHero: boolean;
  category: FactCategory;
  headline: LocalizedText;
  body: LocalizedText;
  coworkerQuote: LocalizedText;
  coworkerRole: LocalizedText;
  suggestedByCoworker: boolean;
}

export interface StoryItem {
  id: string;
  title: LocalizedText;
  locationLabel: LocalizedText;
  quote: LocalizedText;
  subtitleLines: Record<Lang, string[]>;
  durationLabel: string;
  department: TargetGroup;
}

export interface WorkshopEvent {
  id: string;
  title: LocalizedText;
  phaseLabel: string;
  dateLabel: string;
  location: LocalizedText;
  paidHours: boolean;
  targetGroups: TargetGroup[];
}

export interface ToolkitBriefing {
  id: string;
  weekLabel: string;
  targetGroup: TargetGroup;
  openerPrompt: LocalizedText;
  talkingPoints: Record<Lang, string[]>;
  monthlyChallenge: LocalizedText;
}

export type FeedbackStatus = 'new' | 'reviewed' | 'turned-into-fact';

export interface FeedbackEntry {
  id: string;
  topic: string;
  department: TargetGroup | 'all';
  anonymous: boolean;
  authorName?: string;
  status: FeedbackStatus;
  createdAt: string;
}

export interface UiTranslations {
  headerBreadcrumb: string;
  hubTitle: string;
  hubSubtitle: string;
  navHero: string;
  navFacts: string;
  navStories: string;
  navEvents: string;
  navToolkit: string;
  navMedia: string;
  navFeedback: string;
  navSectionLabel: string;
  navMobileLabel: string;
  langSelectorLabel: string;

  cardExpand: string;
  cardCollapse: string;

  targetGroups: Record<TargetGroup, string>;
  departmentAll: string;
  categories: Record<'all' | FactCategory, string>;

  heroDidYouKnow: string;
  heroFactOfWeekBadge: string;
  heroPreviewPosterBtn: string;
  reactions: Record<ReactionKey, string>;
  qrModalTitle: string;
  qrModalSubtitle: string;
  qrModalWhereLabel: string;
  qrModalScanPrompt: string;
  qrModalExplainHeading: string;
  qrModalExplainBody: string;
  qrModalCodeAriaLabel: string;
  qrModalClose: string;

  factsTitle: string;
  factsSubtitle: string;
  factsSearchPlaceholder: string;
  factsSuggestedBadge: string;
  factsReadMore: string;
  factsShowLess: string;
  factsEmpty: string;

  storiesTitle: string;
  storiesSubtitle: string;
  storiesFilmedPrefix: string;
  storiesSubtitlesLabel: string;
  storiesWatchBtn: string;
  playerPlay: string;
  playerPause: string;
  playerRestart: string;
  playerNextLine: string;
  playerSubtitleLang: string;
  playerCaptionCounter: string;
  playerNoAudioNote: string;
  playerClose: string;

  eventsTitle: string;
  eventsSubtitle: string;
  eventsPaidHoursBadge: string;
  eventsSignUp: string;
  eventsRegistered: string;

  toolkitTitle: string;
  toolkitSubtitle: string;
  toolkitAllTab: string;
  toolkitOpenerLabel: string;
  toolkitPointsLabel: string;
  toolkitChallengeLabel: string;
  toolkitCopyBtn: string;
  toolkitCopiedBtn: string;

  mediaTitle: string;
  mediaSubtitle: string;
  mediaTabAll: string;
  mediaTabPosters: string;
  mediaTabVideos: string;
  mediaPosterTag: string;
  mediaVideoTag: string;
  mediaPosterOpenBtn: string;

  feedbackTitle: string;
  feedbackSubtitle: string;
  feedbackHelperText: string;
  feedbackTabForm: string;
  feedbackTabManager: string;
  feedbackTopicLabel: string;
  feedbackTopicPlaceholder: string;
  feedbackDeptLabel: string;
  feedbackAnonToggle: string;
  feedbackNameLabel: string;
  feedbackNamePlaceholder: string;
  feedbackSubmitBtn: string;
  feedbackSubmittedToast: string;
  feedbackTopicRequired: string;
  feedbackManagerHint: string;
  feedbackAnonAuthor: string;
  feedbackCycleAction: string;
  feedbackStatuses: Record<FeedbackStatus, string>;
}
