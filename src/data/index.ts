import type { ReactionKey } from '../types/hub';

export { translations } from './translations';
export { facts } from './facts';
export { stories } from './stories';
export { events } from './events';
export { briefings } from './toolkit';
export { initialFeedbackEntries } from './feedback';

export const initialReactions: Record<string, Record<ReactionKey, number>> = {
  'fact-wheelchair-door': { helpful: 18, eyeOpening: 14, discuss: 7 },
  'fact-multilingual-signage': { helpful: 12, eyeOpening: 6, discuss: 4 },
  'fact-paid-hours-shifts': { helpful: 15, eyeOpening: 9, discuss: 8 },
  'fact-cultural-awareness-days': { helpful: 10, eyeOpening: 7, discuss: 5 },
  'fact-silent-break-room': { helpful: 16, eyeOpening: 11, discuss: 6 },
  'fact-plain-language-handover': { helpful: 13, eyeOpening: 8, discuss: 4 },
  'fact-visual-allergen-cards': { helpful: 14, eyeOpening: 10, discuss: 5 },
  'fact-ergonomic-checkout-rotation': { helpful: 11, eyeOpening: 7, discuss: 3 },
  'fact-pronunciation-respect': { helpful: 19, eyeOpening: 12, discuss: 6 },
  'fact-predictable-evening-breaks': { helpful: 17, eyeOpening: 9, discuss: 7 },
};
