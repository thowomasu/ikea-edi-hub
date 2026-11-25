import type { FeedbackEntry } from '../types/hub';

export const initialFeedbackEntries: FeedbackEntry[] = [
  {
    id: 'fb-seed-1',
    topic: 'Keep break-room story TVs muted with FI/EN/SV subtitles and add a quiet corner sign.',
    department: 'sales-cr',
    anonymous: false,
    authorName: 'Customer Relations Co-worker',
    status: 'turned-into-fact',
    createdAt: '2026-04-02T08:30:00Z',
  },
  {
    id: 'fb-seed-2',
    topic: 'Remove internal 3-letter acronyms from Loading Bay B whiteboard checklists.',
    department: 'food-logistics',
    anonymous: true,
    status: 'turned-into-fact',
    createdAt: '2026-04-08T14:15:00Z',
  },
  {
    id: 'fb-seed-3',
    topic: 'Add trilingual (FI/SV/EN) allergen icon magnets above the bistro prep counter.',
    department: 'food-logistics',
    anonymous: false,
    authorName: 'Food & Beverage Co-worker',
    status: 'reviewed',
    createdAt: '2026-04-12T10:45:00Z',
  },
  {
    id: 'fb-seed-4',
    topic: 'Schedule a 15-minute wheelchair & mobility-aid route check during evening shift.',
    department: 'all',
    anonymous: true,
    status: 'new',
    createdAt: '2026-04-14T16:20:00Z',
  },
];
