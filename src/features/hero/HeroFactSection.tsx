import { useState } from 'react';
import { Eye, MessageCircle, QrCode, ThumbsUp } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { ReactionKey } from '../../types/hub';
import { BreakRoomQrModal } from './BreakRoomQrModal';

const REACTION_META: { key: ReactionKey; icon: typeof ThumbsUp }[] = [
  { key: 'helpful', icon: ThumbsUp },
  { key: 'eyeOpening', icon: Eye },
  { key: 'discuss', icon: MessageCircle },
];

export function HeroFactSection() {
  const { lang, t, facts, reactions, userReactions, toggleReaction } = useHub();
  const [qrOpen, setQrOpen] = useState(false);

  const heroFact = facts.find((f) => f.isCurrentHero) ?? facts[0];
  if (!heroFact) return null;

  const counts = reactions[heroFact.id] ?? { helpful: 0, eyeOpening: 0, discuss: 0 };
  const activeKeys = userReactions[heroFact.id] ?? [];

  return (
    <section
      id="hero"
      aria-labelledby="hero-fact-heading"
      className="bg-white rounded-2xl border border-ikea-navy/10 shadow-sm overflow-hidden"
    >
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ikea-yellow text-ikea-navy text-xs font-extrabold uppercase tracking-wide">
              {t.heroFactOfWeekBadge} · {heroFact.weekLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setQrOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-ikea-navy text-white text-xs sm:text-sm font-bold hover:bg-ikea-navy/90 transition-colors cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-ikea-yellow shrink-0" aria-hidden="true" />
            <span>{t.heroPreviewPosterBtn}</span>
          </button>
        </div>

        {/* Slide 7 Speech Bubble + Fact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Navy Speech Bubble + Co-worker Avatar */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="relative w-full bg-ikea-navy text-white rounded-2xl px-6 py-5 shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight leading-none">
                    {t.heroDidYouKnow}
                  </span>
                </div>
                <svg
                  viewBox="0 0 64 80"
                  className="w-16 h-20 sm:w-20 sm:h-24 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M14 25c0-10.5 8-17 19-17 11.2 0 18.6 6.5 18.6 15.8 0 7.9-4.1 12.2-10.5 16-4.7 2.8-6.2 5.1-6.2 9.8v2.9H23.1v-3.7c0-7.7 3.1-12.3 9.5-16.2 4.6-2.8 6.5-4.7 6.5-8.2 0-3.8-2.9-6.2-6.8-6.2-4.3 0-7.2 2.7-7.6 7.5H14zm8.6 35.2h12.8V73H22.6V60.2z"
                    fill="#FBD914"
                  />
                </svg>
              </div>

              {/* Downward speech pointer */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3.5 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-ikea-navy"
              />
            </div>

            {/* Co-worker Avatar + Quote Card */}
            <div className="mt-6 w-full bg-ikea-cream rounded-2xl p-4 border border-ikea-navy/10 flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E5DEC9] flex items-center justify-center p-1.5 shrink-0 border border-ikea-navy/10">
                <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                  <circle cx="50" cy="36" r="16" fill="#0B2545" />
                  <path d="M20 88c2-18 14-28 30-28s28 10 30 28z" fill="#0B2545" />
                </svg>
              </div>
              <div className="min-w-0">
                <blockquote className="text-sm font-medium text-ikea-ink leading-snug italic">
                  “{heroFact.coworkerQuote[lang]}”
                </blockquote>
                <p className="mt-1.5 text-xs font-bold text-ikea-navy uppercase tracking-wide">
                  — {heroFact.coworkerRole[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Large-type Fact Copy + Interactive Reactions */}
          <div className="lg:col-span-7 space-y-5 min-w-0">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-ikea-navy bg-[#E3EAF3] px-2.5 py-1 rounded-md">
                {t.categories[heroFact.category]}
              </span>
              <h2
                id="hero-fact-heading"
                className="text-2xl sm:text-3xl font-black text-ikea-navy leading-tight break-words"
              >
                {heroFact.headline[lang]}
              </h2>
              <p className="text-base text-ikea-ink/90 leading-relaxed">
                {heroFact.body[lang]}
              </p>
            </div>

            {/* Live Reaction Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {REACTION_META.map(({ key, icon: Icon }) => {
                const isActive = activeKeys.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleReaction(heroFact.id, key)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-ikea-yellow text-ikea-navy border-ikea-navy shadow-xs'
                        : 'bg-ikea-cream text-ikea-navy border-ikea-navy/15 hover:border-ikea-navy/40'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.reactions[key]}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-xs font-extrabold ${
                        isActive ? 'bg-ikea-navy text-white' : 'bg-white text-ikea-navy'
                      }`}
                    >
                      {counts[key]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <BreakRoomQrModal open={qrOpen} onClose={() => setQrOpen(false)} fact={heroFact} />
    </section>
  );
}
