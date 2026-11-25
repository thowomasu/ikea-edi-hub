import { useState } from 'react';
import { Clock, FolderOpen, MapPin, Play, QrCode, Subtitles } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { FactItem, StoryItem } from '../../types/hub';
import { BreakRoomQrModal } from '../hero/BreakRoomQrModal';
import { StoryPlayerModal } from '../stories/StoryPlayerModal';

type MediaFilter = 'all' | 'posters' | 'videos';

export function MediaLibrarySection() {
  const { lang, t, facts, stories } = useHub();
  const [filter, setFilter] = useState<MediaFilter>('all');
  const [selectedPoster, setSelectedPoster] = useState<FactItem | null>(null);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const posterFacts = facts.slice(0, 4);

  const showPosters = filter === 'all' || filter === 'posters';
  const showVideos = filter === 'all' || filter === 'videos';

  return (
    <section
      id="media"
      aria-labelledby="media-heading"
      className="bg-white rounded-2xl border border-ikea-navy/10 shadow-sm p-4 sm:p-6 lg:p-8 space-y-5"
    >
      {/* Header + Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-ikea-navy text-white flex items-center justify-center shrink-0">
            <FolderOpen className="w-5 h-5 text-ikea-yellow" aria-hidden="true" />
          </div>
          <div>
            <h2 id="media-heading" className="text-lg sm:text-xl font-extrabold text-ikea-navy">
              {t.mediaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ikea-muted mt-0.5">{t.mediaSubtitle}</p>
          </div>
        </div>

        <div
          role="group"
          aria-label={t.mediaTitle}
          className="inline-flex self-start sm:self-auto bg-ikea-cream p-1 rounded-xl border border-ikea-navy/15 shrink-0"
        >
          {(
            [
              { id: 'all', label: t.mediaTabAll },
              { id: 'posters', label: t.mediaTabPosters },
              { id: 'videos', label: t.mediaTabVideos },
            ] as const
          ).map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                aria-pressed={active}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  active ? 'bg-ikea-navy text-white shadow-xs' : 'text-ikea-navy hover:bg-white/70'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showPosters &&
          posterFacts.map((fact) => (
            <article
              key={`poster-${fact.id}`}
              className="rounded-xl border border-ikea-navy/15 bg-ikea-cream/55 p-4 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-ikea-yellow text-ikea-navy px-2.5 py-0.5 rounded-full">
                    <QrCode className="w-3 h-3" aria-hidden="true" />
                    {t.mediaPosterTag}
                  </span>
                  <span className="text-[11px] font-bold text-ikea-muted">{fact.weekLabel}</span>
                </div>
                <h3 className="text-sm font-bold text-ikea-navy leading-snug">
                  {fact.headline[lang]}
                </h3>
                <p className="text-xs text-ikea-ink/80 line-clamp-2">{fact.body[lang]}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPoster(fact)}
                className="inline-flex items-center justify-center gap-1.5 w-full px-3.5 py-2 rounded-xl bg-ikea-navy text-white text-xs font-bold hover:bg-ikea-navy/90 transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5 text-ikea-yellow" aria-hidden="true" />
                <span>{t.mediaPosterOpenBtn}</span>
              </button>
            </article>
          ))}

        {showVideos &&
          stories.map((story) => (
            <article
              key={`video-${story.id}`}
              className="rounded-xl border border-ikea-navy/15 bg-[#F7F9FC] p-4 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-[#E3EAF3] text-ikea-navy px-2.5 py-0.5 rounded-full">
                    <Subtitles className="w-3 h-3" aria-hidden="true" />
                    {t.mediaVideoTag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-ikea-muted">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {story.durationLabel}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-ikea-navy leading-snug">
                  {story.title[lang]}
                </h3>
                <p className="inline-flex items-center gap-1 text-xs text-ikea-muted">
                  <MapPin className="w-3 h-3 text-ikea-navy shrink-0" aria-hidden="true" />
                  <span>{story.locationLabel[lang]}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStory(story)}
                className="inline-flex items-center justify-center gap-1.5 w-full px-3.5 py-2 rounded-xl bg-ikea-navy text-white text-xs font-bold hover:bg-ikea-navy/90 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-ikea-yellow fill-ikea-yellow" aria-hidden="true" />
                <span>{t.storiesWatchBtn}</span>
              </button>
            </article>
          ))}
      </div>

      {selectedPoster && (
        <BreakRoomQrModal
          open={Boolean(selectedPoster)}
          onClose={() => setSelectedPoster(null)}
          fact={selectedPoster}
        />
      )}

      {selectedStory && (
        <StoryPlayerModal
          key={selectedStory.id}
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </section>
  );
}
