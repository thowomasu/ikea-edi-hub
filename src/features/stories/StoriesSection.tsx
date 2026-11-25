import { useState } from 'react';
import { Clock, MapPin, Maximize2, Minimize2, Play, PlaySquare, Subtitles } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { StoryItem } from '../../types/hub';
import { StoryPlayerModal } from './StoryPlayerModal';

export function StoriesSection() {
  const { lang, t, stories } = useHub();
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className={`bg-white rounded-2xl border border-ikea-navy/10 shadow-sm p-4 sm:p-6 flex flex-col gap-4 min-w-0 ${
        isExpanded ? '' : 'h-[520px] lg:h-[540px]'
      }`}
    >
      {/* Section Header */}
      <div className="flex items-start justify-between gap-3 shrink-0">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-ikea-navy text-white flex items-center justify-center shrink-0">
            <PlaySquare className="w-5 h-5 text-ikea-yellow" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h2 id="stories-heading" className="text-lg sm:text-xl font-extrabold text-ikea-navy">
              {t.storiesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ikea-muted leading-snug">{t.storiesSubtitle}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#E3EAF3] text-ikea-navy text-xs font-bold hover:bg-ikea-navy/15 transition-colors shrink-0 cursor-pointer"
        >
          {isExpanded ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.cardCollapse}</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.cardExpand}</span>
            </>
          )}
        </button>
      </div>

      {/* Story Cards */}
      <div className={`space-y-3 ${isExpanded ? '' : 'flex-1 min-h-0 overflow-y-auto pr-1'}`}>
        {stories.map((story) => (
          <article
            key={story.id}
            className="rounded-xl border border-ikea-navy/10 bg-[#F7F9FC] p-4 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-ikea-navy bg-[#E3EAF3] px-2.5 py-0.5 rounded-full">
                {t.targetGroups[story.department]}
              </span>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-ikea-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {story.durationLabel}
                </span>
                <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-ikea-navy/10 text-ikea-navy font-bold">
                  <Subtitles className="w-3 h-3" aria-hidden="true" />
                  FI / EN / SV
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-ikea-navy leading-snug break-words">
                {story.title[lang]}
              </h3>
              <p className="inline-flex items-center gap-1.5 text-xs text-ikea-muted">
                <MapPin className="w-3.5 h-3.5 text-ikea-navy shrink-0" aria-hidden="true" />
                <span>
                  {t.storiesFilmedPrefix}: {story.locationLabel[lang]}
                </span>
              </p>
            </div>

            {/* 1-sentence silent-viewing quote */}
            <blockquote className="bg-white rounded-lg p-3 border-l-4 border-ikea-navy text-xs sm:text-sm text-ikea-ink italic">
              “{story.quote[lang]}”
            </blockquote>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveStory(story)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ikea-navy text-white text-xs sm:text-sm font-bold hover:bg-ikea-navy/90 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-ikea-yellow fill-ikea-yellow" aria-hidden="true" />
                <span>{t.storiesWatchBtn}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeStory && (
        <StoryPlayerModal
          key={activeStory.id}
          story={activeStory}
          onClose={() => setActiveStory(null)}
        />
      )}
    </section>
  );
}
