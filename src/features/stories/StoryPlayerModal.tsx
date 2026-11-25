import { useEffect, useState } from 'react';
import { MapPin, Pause, Play, RotateCcw, SkipForward, Subtitles, X } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { Lang, StoryItem } from '../../types/hub';

interface StoryPlayerModalProps {
  story: StoryItem;
  onClose: () => void;
}

const SUB_LANGS: { code: Lang; label: string }[] = [
  { code: 'fi', label: 'FI' },
  { code: 'en', label: 'EN' },
  { code: 'sv', label: 'SV' },
];

export function StoryPlayerModal({ story, onClose }: StoryPlayerModalProps) {
  const { lang, t } = useHub();
  const [subLang, setSubLang] = useState<Lang>(lang);
  const [playing, setPlaying] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  // Escape key closes modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const lines = story.subtitleLines[subLang];
  const totalLines = lines.length;
  const safeIndex = totalLines > 0 ? Math.min(lineIndex, totalLines - 1) : 0;

  // Simulated timed playback cycling through subtitle lines
  useEffect(() => {
    if (!playing || totalLines <= 1) return;
    const timer = window.setInterval(() => {
      setLineIndex((prev) => (prev + 1) % totalLines);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [playing, totalLines]);

  const currentCaption = lines[safeIndex] ?? '';
  const progressPct = totalLines > 0 ? ((safeIndex + 1) / totalLines) * 100 : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ikea-navy/75 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-player-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-ikea-navy/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-5 py-4 bg-ikea-navy text-white rounded-t-2xl">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ikea-yellow">
              {t.targetGroups[story.department]} · {story.durationLabel}
            </p>
            <h2 id="story-player-title" className="text-base sm:text-lg font-bold leading-snug">
              {story.title[lang]}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.playerClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {/* Simulated Break-Room TV Stage (Slide 8 styling) */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0B2545] via-[#133866] to-[#081A33] aspect-video flex flex-col justify-between p-4 text-white border border-ikea-navy/20">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-black/35 px-2.5 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-ikea-yellow" aria-hidden="true" />
                {story.locationLabel[lang]}
              </span>
              <span className="text-[11px] font-bold bg-ikea-yellow text-ikea-navy px-2.5 py-0.5 rounded-full">
                {t.playerCaptionCounter} {safeIndex + 1}/{totalLines}
              </span>
            </div>

            {/* Center visual placeholder */}
            <div className="my-auto flex flex-col items-center text-center py-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-2">
                <svg viewBox="0 0 100 100" className="w-11 h-11" aria-hidden="true">
                  <circle cx="50" cy="36" r="16" fill="#FBD914" />
                  <path d="M22 86c2-17 13-26 28-26s26 9 28 26z" fill="#F5F3EC" />
                </svg>
              </div>
              {/* Slide 8 Lower Third */}
              <div className="inline-flex items-center bg-ikea-yellow text-ikea-navy text-[11px] font-black px-2.5 py-0.5 rounded-xs tracking-wide uppercase">
                {t.heroDidYouKnow}?
              </div>
            </div>

            {/* Live Timed Subtitle Bar */}
            <div
              aria-live="polite"
              className="bg-black/75 border border-white/15 rounded-lg px-3.5 py-2.5 text-center"
            >
              <p className="text-sm sm:text-base font-semibold leading-snug text-white">
                {currentCaption}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-ikea-cream rounded-full overflow-hidden">
            <div
              className="h-full bg-ikea-yellow transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Playback Controls + Independent Subtitle Language Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-ikea-navy text-white text-xs sm:text-sm font-bold hover:bg-ikea-navy/90 transition-colors cursor-pointer"
              >
                {playing ? (
                  <>
                    <Pause className="w-4 h-4" aria-hidden="true" />
                    <span>{t.playerPause}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" aria-hidden="true" />
                    <span>{t.playerPlay}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() =>
                  setLineIndex((prev) => (totalLines > 0 ? (prev + 1) % totalLines : 0))
                }
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#E3EAF3] text-ikea-navy text-xs sm:text-sm font-bold hover:bg-ikea-navy/15 transition-colors cursor-pointer"
              >
                <SkipForward className="w-4 h-4" aria-hidden="true" />
                <span>{t.playerNextLine}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLineIndex(0);
                  setPlaying(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-ikea-cream text-ikea-navy text-xs sm:text-sm font-bold hover:bg-ikea-navy/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>{t.playerRestart}</span>
              </button>
            </div>

            {/* Independent Subtitle Language Switcher */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-ikea-muted">
                <Subtitles className="w-4 h-4" aria-hidden="true" />
                {t.playerSubtitleLang}:
              </span>
              <div
                role="group"
                aria-label={t.playerSubtitleLang}
                className="inline-flex items-center bg-ikea-cream p-0.5 rounded-full border border-ikea-navy/15"
              >
                {SUB_LANGS.map((opt) => {
                  const active = subLang === opt.code;
                  return (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => setSubLang(opt.code)}
                      aria-pressed={active}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                        active
                          ? 'bg-ikea-yellow text-ikea-navy shadow-xs'
                          : 'text-ikea-navy/80 hover:bg-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-xs text-ikea-muted bg-ikea-cream rounded-lg px-3 py-2">
            {t.playerNoAudioNote}
          </p>
        </div>
      </div>
    </div>
  );
}
