import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Maximize2,
  Minimize2,
  Search,
  Sparkles,
  ThumbsUp,
} from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { FactCategory } from '../../types/hub';

const CATEGORY_OPTIONS: ('all' | FactCategory)[] = [
  'all',
  'accessibility',
  'language',
  'shift-life',
  'culture',
];

export function FactLibrarySection() {
  const { lang, t, facts, reactions, userReactions, toggleReaction } = useHub();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | FactCategory>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredFacts = facts.filter((fact) => {
    const matchesCategory = selectedCategory === 'all' || fact.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const haystack = [
      fact.weekLabel,
      fact.headline[lang],
      fact.body[lang],
      fact.coworkerQuote[lang],
      fact.coworkerRole[lang],
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="facts"
      aria-labelledby="facts-heading"
      className={`bg-white rounded-2xl border border-ikea-navy/10 shadow-sm p-4 sm:p-6 flex flex-col gap-4 min-w-0 ${
        isCardExpanded ? '' : 'h-[520px] lg:h-[540px]'
      }`}
    >
      {/* Section Header */}
      <div className="flex items-start justify-between gap-3 shrink-0">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-ikea-navy text-white flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-ikea-yellow" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h2 id="facts-heading" className="text-lg sm:text-xl font-extrabold text-ikea-navy">
              {t.factsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ikea-muted leading-snug">{t.factsSubtitle}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCardExpanded((prev) => !prev)}
          aria-expanded={isCardExpanded}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#E3EAF3] text-ikea-navy text-xs font-bold hover:bg-ikea-navy/15 transition-colors shrink-0 cursor-pointer"
        >
          {isCardExpanded ? (
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

      {/* Search + Category Filters */}
      <div className="space-y-3 shrink-0">
        <div className="relative">
          <Search
            className="w-4 h-4 text-ikea-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.factsSearchPlaceholder}
            aria-label={t.factsSearchPlaceholder}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-ikea-navy/20 bg-ikea-cream/50 text-ikea-ink placeholder:text-ikea-muted focus:outline-none focus:ring-2 focus:ring-ikea-navy"
          />
        </div>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label={t.factsTitle}>
          {CATEGORY_OPTIONS.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={active}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  active
                    ? 'bg-ikea-navy text-white'
                    : 'bg-[#E3EAF3] text-ikea-navy hover:bg-ikea-navy/15'
                }`}
              >
                {t.categories[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fact Cards */}
      <div className={`space-y-3 ${isCardExpanded ? '' : 'flex-1 min-h-0 overflow-y-auto pr-1'}`}>
        {filteredFacts.length === 0 ? (
          <p className="text-sm text-ikea-muted bg-ikea-cream rounded-xl p-4 text-center">
            {t.factsEmpty}
          </p>
        ) : (
          filteredFacts.map((fact) => {
            const expanded = Boolean(expandedIds[fact.id]);
            const helpfulCount = reactions[fact.id]?.helpful ?? 0;
            const helpfulActive = (userReactions[fact.id] ?? []).includes('helpful');

            return (
              <article
                key={fact.id}
                className="rounded-xl border border-ikea-navy/10 bg-[#F7F9FC] p-4 space-y-2.5 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-extrabold text-ikea-navy bg-white border border-ikea-navy/15 px-2 py-0.5 rounded-md">
                      {fact.weekLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-ikea-muted bg-white/80 px-2 py-0.5 rounded-md">
                      {t.categories[fact.category]}
                    </span>
                  </div>

                  {fact.suggestedByCoworker && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-ikea-yellow text-ikea-navy px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      {t.factsSuggestedBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-ikea-navy leading-snug break-words">
                  {fact.headline[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-ikea-ink/85 leading-relaxed">
                  {fact.body[lang]}
                </p>

                {expanded && (
                  <blockquote className="bg-white rounded-lg p-3 border-l-4 border-ikea-yellow text-xs sm:text-sm text-ikea-ink/90 space-y-1">
                    <p className="italic">“{fact.coworkerQuote[lang]}”</p>
                    <footer className="text-[11px] font-bold text-ikea-navy not-italic">
                      — {fact.coworkerRole[lang]}
                    </footer>
                  </blockquote>
                )}

                <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(fact.id)}
                    aria-expanded={expanded}
                    className="inline-flex items-center gap-1 text-xs font-bold text-ikea-navy hover:underline cursor-pointer"
                  >
                    {expanded ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{t.factsShowLess}</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{t.factsReadMore}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleReaction(fact.id, 'helpful')}
                    aria-pressed={helpfulActive}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                      helpfulActive
                        ? 'bg-ikea-yellow text-ikea-navy border-ikea-navy'
                        : 'bg-white text-ikea-navy border-ikea-navy/15 hover:border-ikea-navy/40'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.reactions.helpful}</span>
                    <span className="font-extrabold">{helpfulCount}</span>
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
