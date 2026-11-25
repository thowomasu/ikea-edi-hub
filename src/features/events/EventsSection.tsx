import { useState } from 'react';
import { Calendar, CalendarCheck, Check, Clock, MapPin, Maximize2, Minimize2 } from 'lucide-react';
import { useHub } from '../../context/HubContext';

export function EventsSection() {
  const { lang, t, events, rsvpedEventIds, toggleRsvp } = useHub();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className={`bg-white rounded-2xl border border-ikea-navy/10 shadow-sm p-4 sm:p-6 flex flex-col gap-4 min-w-0 ${
        isExpanded ? '' : 'h-[520px] lg:h-[540px]'
      }`}
    >
      {/* Section Header */}
      <div className="flex items-start justify-between gap-3 shrink-0">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-ikea-navy text-white flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5 text-ikea-yellow" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h2 id="events-heading" className="text-lg sm:text-xl font-extrabold text-ikea-navy">
              {t.eventsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ikea-muted leading-snug">{t.eventsSubtitle}</p>
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

      {/* Event List */}
      <div className={`space-y-3 ${isExpanded ? '' : 'flex-1 min-h-0 overflow-y-auto pr-1'}`}>
        {events.map((event) => {
          const isRegistered = rsvpedEventIds.includes(event.id);
          return (
            <article
              key={event.id}
              className="rounded-xl border border-ikea-navy/10 bg-[#F7F9FC] p-4 flex flex-col gap-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-ikea-navy text-white px-2.5 py-0.5 rounded-md">
                  {event.phaseLabel}
                </span>
                {event.paidHours && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#E3EAF3] text-ikea-navy px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {t.eventsPaidHoursBadge}
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-ikea-navy leading-snug break-words">
                {event.title[lang]}
              </h3>

              <div className="space-y-1 text-xs text-ikea-muted">
                <p className="inline-flex items-center gap-1.5 mr-4">
                  <Calendar className="w-3.5 h-3.5 text-ikea-navy shrink-0" aria-hidden="true" />
                  <span>{event.dateLabel}</span>
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-ikea-navy shrink-0" aria-hidden="true" />
                  <span>{event.location[lang]}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {event.targetGroups.map((group) => (
                    <span
                      key={group}
                      className="text-[11px] font-semibold bg-white border border-ikea-navy/15 text-ikea-navy px-2 py-0.5 rounded-full"
                    >
                      {t.targetGroups[group]}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => toggleRsvp(event.id)}
                  aria-pressed={isRegistered}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    isRegistered
                      ? 'bg-ikea-yellow text-ikea-navy border border-ikea-navy shadow-xs'
                      : 'bg-ikea-navy text-white hover:bg-ikea-navy/90'
                  }`}
                >
                  {isRegistered && <Check className="w-4 h-4 shrink-0" aria-hidden="true" />}
                  <span>{isRegistered ? t.eventsRegistered : t.eventsSignUp}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
