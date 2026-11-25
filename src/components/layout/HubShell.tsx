import type { ReactNode } from 'react';
import {
  CalendarCheck,
  ClipboardList,
  FolderOpen,
  Lightbulb,
  MessageSquarePlus,
  PlaySquare,
  Sparkles,
} from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { Lang } from '../../types/hub';

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: 'fi', label: 'FI' },
  { code: 'en', label: 'EN' },
  { code: 'sv', label: 'SV' },
];

export function HubShell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useHub();

  const navItems = [
    { href: '#hero', label: t.navHero, icon: Sparkles },
    { href: '#facts', label: t.navFacts, icon: Lightbulb },
    { href: '#stories', label: t.navStories, icon: PlaySquare },
    { href: '#events', label: t.navEvents, icon: CalendarCheck },
    { href: '#toolkit', label: t.navToolkit, icon: ClipboardList },
    { href: '#media', label: t.navMedia, icon: FolderOpen },
    { href: '#feedback', label: t.navFeedback, icon: MessageSquarePlus },
  ];

  return (
    <div className="min-h-screen bg-ikea-cream text-ikea-ink overflow-x-hidden">
      {/* Sticky Top Intranet Header */}
      <header className="sticky top-0 z-40 bg-ikea-navy text-white border-b border-white/15 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between gap-2">
          {/* Left: IKEA Brand Mark + Intranet Breadcrumb */}
          <a
            href="#hero"
            className="flex items-center gap-2 min-w-0 shrink focus:outline-none focus-visible:ring-2 focus-visible:ring-ikea-yellow rounded"
          >
            <span className="inline-flex items-center justify-center bg-[#0051BA] px-2 py-0.5 rounded-sm shrink-0 border border-white/15">
              <span className="inline-block bg-ikea-yellow text-[#0051BA] font-black text-xs tracking-wider px-1.5 py-0.5 rounded-full leading-none">
                IKEA
              </span>
            </span>
            <span className="text-white/50 text-sm hidden xs:inline" aria-hidden="true">
              |
            </span>
            <span className="bg-white/10 text-white text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full truncate">
              {t.headerBreadcrumb}
            </span>
          </a>

          {/* Center: Desktop Anchor Jump Links */}
          <nav aria-label={t.navSectionLabel} className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 rounded-md text-xs lg:text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: FI | EN | SV Segmented Pill Toggle */}
          <div
            role="group"
            aria-label={t.langSelectorLabel}
            className="inline-flex items-center bg-white/10 p-0.5 rounded-full border border-white/15 shrink-0"
          >
            {LANG_OPTIONS.map((opt) => {
              const active = lang === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLang(opt.code)}
                  aria-pressed={active}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    active
                      ? 'bg-ikea-yellow text-ikea-navy shadow-xs'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-3 sm:px-4 pt-5 pb-24 md:pb-12 space-y-6">
        {/* Slide 9-Inspired Hub Banner */}
        <div className="bg-ikea-yellow text-ikea-navy rounded-2xl px-4 sm:px-6 py-3.5 shadow-xs border border-ikea-navy/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ikea-navy text-ikea-yellow font-black text-sm shrink-0">
              ?
            </span>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight truncate">
              {t.hubTitle}
            </h1>
          </div>
          <p className="text-xs sm:text-sm font-medium text-ikea-navy/85 leading-snug">
            {t.hubSubtitle}
          </p>
        </div>

        {children}
      </main>

      {/* Mobile Sticky Bottom Quick-Jump Bar (<768px) */}
      <nav
        aria-label={t.navMobileLabel}
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ikea-navy text-white border-t border-white/15 shadow-lg"
      >
        <div className="grid grid-cols-7 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center py-2 px-1 gap-0.5 text-[10px] font-medium text-white/85 hover:text-ikea-yellow active:text-ikea-yellow transition-colors min-w-0"
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="truncate max-w-full leading-tight">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
