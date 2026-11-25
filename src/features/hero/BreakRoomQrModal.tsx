import { useEffect } from 'react';
import { MapPin, X } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { FactItem } from '../../types/hub';

interface BreakRoomQrModalProps {
  open: boolean;
  onClose: () => void;
  fact: FactItem;
}

const QR_MATRIX: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
];

export function BreakRoomQrModal({ open, onClose, fact }: BreakRoomQrModalProps) {
  const { lang, t } = useHub();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ikea-navy/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-poster-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-ikea-navy/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-ikea-navy/10 bg-ikea-navy text-white rounded-t-2xl">
          <div>
            <h2 id="qr-poster-modal-title" className="text-base sm:text-lg font-bold">
              {t.qrModalTitle}
            </h2>
            <p className="text-xs sm:text-sm text-white/80">{t.qrModalSubtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.qrModalClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Printable Slide 7 Poster Mockup */}
          <div className="md:col-span-7 bg-ikea-cream border-2 border-ikea-navy/15 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center justify-center bg-[#0051BA] px-2 py-0.5 rounded-xs">
                <span className="bg-ikea-yellow text-[#0051BA] font-black text-xs px-1.5 py-0.5 rounded-full">
                  IKEA
                </span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-ikea-muted">
                {fact.weekLabel} · FI / EN / SV
              </span>
            </div>

            {/* Navy Speech Bubble */}
            <div className="relative bg-ikea-navy text-white rounded-2xl p-4 mb-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-2xl sm:text-3xl font-black leading-[0.98] tracking-tight max-w-[65%]">
                  {t.heroDidYouKnow}
                </p>
                <span
                  aria-hidden="true"
                  className="text-6xl sm:text-7xl font-black text-ikea-yellow leading-none select-none"
                >
                  ?
                </span>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-3 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-ikea-navy"
              />
            </div>

            {/* Avatar + Fact + QR Matrix */}
            <div className="grid grid-cols-12 gap-3 items-end">
              <div className="col-span-5 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#E8E2D0] flex items-center justify-center p-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                    <circle cx="50" cy="36" r="16" fill="#0B2545" />
                    <path d="M20 88c2-18 14-28 30-28s28 10 30 28z" fill="#0B2545" />
                  </svg>
                </div>
                <span className="mt-1.5 text-[11px] font-semibold text-ikea-navy text-center">
                  {fact.coworkerRole[lang]}
                </span>
              </div>

              <div className="col-span-7 space-y-2.5">
                <p className="text-sm font-extrabold text-ikea-ink leading-snug">
                  {fact.headline[lang]}
                </p>
                <p className="text-xs text-ikea-muted leading-relaxed">
                  {fact.body[lang]}
                </p>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="bg-white p-1.5 rounded-lg border border-ikea-navy/15 shrink-0">
                    <svg
                      viewBox="0 0 21 21"
                      className="w-16 h-16"
                      role="img"
                      aria-label={t.qrModalCodeAriaLabel}
                    >
                      <rect width="21" height="21" fill="#FFFFFF" />
                      {QR_MATRIX.map((row, y) =>
                        row.map((cell, x) =>
                          cell === 1 ? (
                            <rect
                              key={`${x}-${y}`}
                              x={x}
                              y={y}
                              width={1}
                              height={1}
                              fill="#0B2545"
                            />
                          ) : null,
                        ),
                      )}
                    </svg>
                  </div>
                  <p className="text-[11px] font-semibold text-ikea-navy leading-snug">
                    {t.qrModalScanPrompt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placement Explanation */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#E3EAF3] rounded-xl p-4 border border-ikea-navy/10">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-ikea-navy shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm font-semibold text-ikea-navy leading-snug">
                  {t.qrModalWhereLabel}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-ikea-navy">{t.qrModalExplainHeading}</h3>
              <p className="text-sm text-ikea-ink/85 leading-relaxed">{t.qrModalExplainBody}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-ikea-navy text-white text-sm font-bold hover:bg-ikea-navy/90 transition-colors cursor-pointer"
            >
              {t.qrModalClose}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
