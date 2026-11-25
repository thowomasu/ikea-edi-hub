import { useEffect, useRef, useState } from 'react';
import { Check, ClipboardList, Copy, Maximize2, Minimize2, Target } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { TargetGroup, ToolkitBriefing } from '../../types/hub';

const GROUP_TABS: ('all' | TargetGroup)[] = ['all', 'management', 'sales-cr', 'food-logistics'];

async function copyTextSafe(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below if clipboard permission is blocked in non-HTTPS context
    }
  }
  if (typeof document !== 'undefined') {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return ok;
    } catch {
      document.body.removeChild(textarea);
      return false;
    }
  }
  return false;
}

export function LeaderToolkitSection() {
  const { lang, t, briefings } = useHub();
  const [selectedGroup, setSelectedGroup] = useState<'all' | TargetGroup>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const filteredBriefings =
    selectedGroup === 'all'
      ? briefings
      : briefings.filter((b) => b.targetGroup === selectedGroup);

  const handleCopy = async (briefing: ToolkitBriefing) => {
    const scriptText = [
      `[${briefing.weekLabel} · ${t.targetGroups[briefing.targetGroup]}]`,
      `${t.toolkitOpenerLabel}: ${briefing.openerPrompt[lang]}`,
      '',
      `${t.toolkitPointsLabel}:`,
      ...briefing.talkingPoints[lang].map((pt, idx) => `${idx + 1}. ${pt}`),
      '',
      `${t.toolkitChallengeLabel}: ${briefing.monthlyChallenge[lang]}`,
    ].join('\n');

    await copyTextSafe(scriptText);
    setCopiedId(briefing.id);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className={`bg-white rounded-2xl border border-ikea-navy/10 shadow-sm p-4 sm:p-6 flex flex-col gap-4 min-w-0 ${
        isExpanded ? '' : 'h-[520px] lg:h-[540px]'
      }`}
    >
      {/* Section Header */}
      <div className="flex items-start justify-between gap-3 shrink-0">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-ikea-navy text-white flex items-center justify-center shrink-0">
            <ClipboardList className="w-5 h-5 text-ikea-yellow" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h2 id="toolkit-heading" className="text-lg sm:text-xl font-extrabold text-ikea-navy">
              {t.toolkitTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ikea-muted leading-snug">{t.toolkitSubtitle}</p>
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

      {/* Department Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 shrink-0" role="group" aria-label={t.toolkitTitle}>
        {GROUP_TABS.map((group) => {
          const active = selectedGroup === group;
          const label = group === 'all' ? t.toolkitAllTab : t.targetGroups[group];
          return (
            <button
              key={group}
              type="button"
              onClick={() => setSelectedGroup(group)}
              aria-pressed={active}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                active
                  ? 'bg-ikea-navy text-white'
                  : 'bg-[#E3EAF3] text-ikea-navy hover:bg-ikea-navy/15'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* 2-Minute Briefing Cards */}
      <div className={`space-y-3 ${isExpanded ? '' : 'flex-1 min-h-0 overflow-y-auto pr-1'}`}>
        {filteredBriefings.map((briefing) => {
          const isCopied = copiedId === briefing.id;
          return (
            <article
              key={briefing.id}
              className="rounded-xl border border-ikea-navy/10 bg-[#F7F9FC] p-4 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold bg-white border border-ikea-navy/15 text-ikea-navy px-2 py-0.5 rounded-md">
                    {briefing.weekLabel}
                  </span>
                  <span className="text-[11px] font-bold bg-[#E3EAF3] text-ikea-navy px-2.5 py-0.5 rounded-full">
                    {t.targetGroups[briefing.targetGroup]}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(briefing)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    isCopied
                      ? 'bg-ikea-yellow text-ikea-navy border border-ikea-navy'
                      : 'bg-ikea-navy text-white hover:bg-ikea-navy/90'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.toolkitCopiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-ikea-yellow" aria-hidden="true" />
                      <span>{t.toolkitCopyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Opener Prompt */}
              <div className="bg-white rounded-lg p-3 border-l-4 border-ikea-navy">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-ikea-muted mb-0.5">
                  {t.toolkitOpenerLabel}
                </p>
                <p className="text-xs sm:text-sm font-bold text-ikea-navy leading-snug">
                  {briefing.openerPrompt[lang]}
                </p>
              </div>

              {/* 3 Bulleted Talking Points */}
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-ikea-muted mb-1">
                  {t.toolkitPointsLabel}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-ikea-ink/90">
                  {briefing.talkingPoints[lang].map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Monthly Challenge */}
              <div className="flex items-start gap-2 bg-ikea-cream rounded-lg p-2.5 border border-ikea-navy/10 text-xs">
                <Target className="w-4 h-4 text-ikea-navy shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-bold text-ikea-navy">{t.toolkitChallengeLabel}: </span>
                  <span className="text-ikea-ink/90">{briefing.monthlyChallenge[lang]}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
