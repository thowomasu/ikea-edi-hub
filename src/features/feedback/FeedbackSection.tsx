import { useState, type FormEvent } from 'react';
import { CheckCircle2, ClipboardCheck, MessageSquarePlus, RefreshCw } from 'lucide-react';
import { useHub } from '../../context/HubContext';
import type { FeedbackStatus, TargetGroup } from '../../types/hub';

type ViewMode = 'form' | 'manager';

const STATUS_BADGE_CLASSES: Record<FeedbackStatus, string> = {
  new: 'bg-white text-ikea-navy border-ikea-navy/30 hover:border-ikea-navy',
  reviewed: 'bg-[#E3EAF3] text-ikea-navy border-ikea-navy/40 hover:bg-[#D5E1F0]',
  'turned-into-fact': 'bg-ikea-yellow text-ikea-navy border-ikea-navy font-extrabold',
};

export function FeedbackSection() {
  const { lang, t, feedbackEntries, addFeedback, cycleFeedbackStatus } = useHub();
  const [view, setView] = useState<ViewMode>('form');
  const [topic, setTopic] = useState('');
  const [department, setDepartment] = useState<TargetGroup | 'all'>('all');
  const [anonymous, setAnonymous] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setErrorMsg(t.feedbackTopicRequired);
      setSubmittedNotice(false);
      return;
    }

    addFeedback({
      topic,
      department,
      anonymous,
      authorName: anonymous ? undefined : authorName,
    });

    setTopic('');
    setAuthorName('');
    setErrorMsg('');
    setSubmittedNotice(true);
  };

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(lang, {
        month: 'short',
        day: 'numeric',
      }).format(new Date(iso));
    } catch {
      return iso.slice(0, 10);
    }
  };

  return (
    <section
      id="feedback"
      aria-labelledby="feedback-heading"
      className="bg-white rounded-2xl border border-ikea-navy/10 shadow-sm p-4 sm:p-6 lg:p-8 space-y-5"
    >
      {/* Header + Form/Manager Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-ikea-navy text-white flex items-center justify-center shrink-0">
            <MessageSquarePlus className="w-5 h-5 text-ikea-yellow" aria-hidden="true" />
          </div>
          <div>
            <h2 id="feedback-heading" className="text-lg sm:text-xl font-extrabold text-ikea-navy">
              {t.feedbackTitle}
            </h2>
            <p className="text-sm font-bold text-ikea-ink">{t.feedbackSubtitle}</p>
            <p className="text-xs sm:text-sm text-ikea-muted mt-0.5">{t.feedbackHelperText}</p>
          </div>
        </div>

        <div
          role="tablist"
          aria-label={t.feedbackTitle}
          className="inline-flex self-start sm:self-auto bg-ikea-cream p-1 rounded-xl border border-ikea-navy/15 shrink-0"
        >
          <button
            type="button"
            role="tab"
            aria-selected={view === 'form'}
            onClick={() => setView('form')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              view === 'form'
                ? 'bg-ikea-navy text-white shadow-xs'
                : 'text-ikea-navy hover:bg-white/70'
            }`}
          >
            {t.feedbackTabForm}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'manager'}
            onClick={() => setView('manager')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              view === 'manager'
                ? 'bg-ikea-navy text-white shadow-xs'
                : 'text-ikea-navy hover:bg-white/70'
            }`}
          >
            <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
            <span>{t.feedbackTabManager}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                view === 'manager' ? 'bg-ikea-yellow text-ikea-navy' : 'bg-white text-ikea-navy'
              }`}
            >
              {feedbackEntries.length}
            </span>
          </button>
        </div>
      </div>

      {view === 'form' ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl" noValidate>
          <div className="space-y-1.5">
            <label htmlFor="feedback-topic" className="block text-sm font-bold text-ikea-navy">
              {t.feedbackTopicLabel}
            </label>
            <input
              id="feedback-topic"
              type="text"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                if (errorMsg) setErrorMsg('');
                if (submittedNotice) setSubmittedNotice(false);
              }}
              placeholder={t.feedbackTopicPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-ikea-navy/20 bg-ikea-cream/50 text-sm text-ikea-ink placeholder:text-ikea-muted focus:outline-none focus:ring-2 focus:ring-ikea-navy"
            />
            {errorMsg && (
              <p role="alert" className="text-xs font-semibold text-red-700">
                {errorMsg}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div className="space-y-1.5">
              <label htmlFor="feedback-dept" className="block text-sm font-bold text-ikea-navy">
                {t.feedbackDeptLabel}
              </label>
              <select
                id="feedback-dept"
                value={department}
                onChange={(e) => setDepartment(e.target.value as TargetGroup | 'all')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-ikea-navy/20 bg-ikea-cream/50 text-sm text-ikea-ink focus:outline-none focus:ring-2 focus:ring-ikea-navy"
              >
                <option value="all">{t.departmentAll}</option>
                <option value="management">{t.targetGroups.management}</option>
                <option value="sales-cr">{t.targetGroups['sales-cr']}</option>
                <option value="food-logistics">{t.targetGroups['food-logistics']}</option>
              </select>
            </div>

            <div className="flex items-center justify-between bg-ikea-cream rounded-xl px-3.5 py-2.5 border border-ikea-navy/10">
              <label
                htmlFor="feedback-anonymous"
                className="text-sm font-bold text-ikea-navy cursor-pointer select-none"
              >
                {t.feedbackAnonToggle}
              </label>
              <input
                id="feedback-anonymous"
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="w-5 h-5 accent-ikea-navy cursor-pointer"
              />
            </div>
          </div>

          {!anonymous && (
            <div className="space-y-1.5">
              <label htmlFor="feedback-author" className="block text-sm font-bold text-ikea-navy">
                {t.feedbackNameLabel}
              </label>
              <input
                id="feedback-author"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder={t.feedbackNamePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-ikea-navy/20 bg-ikea-cream/50 text-sm text-ikea-ink placeholder:text-ikea-muted focus:outline-none focus:ring-2 focus:ring-ikea-navy"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-ikea-yellow text-ikea-navy text-sm font-extrabold border border-ikea-navy/20 hover:bg-ikea-yellow/90 transition-colors cursor-pointer"
            >
              {t.feedbackSubmitBtn}
            </button>

            {submittedNotice && (
              <p
                role="status"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-ikea-navy bg-[#E3EAF3] px-3 py-1.5 rounded-lg"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.feedbackSubmittedToast}</span>
              </p>
            )}
          </div>
        </form>
      ) : (
        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-medium text-ikea-muted bg-ikea-cream rounded-xl px-3.5 py-2.5">
            {t.feedbackManagerHint}
          </p>

          <div className="space-y-2.5">
            {feedbackEntries.map((entry) => {
              const deptLabel =
                entry.department === 'all' ? t.departmentAll : t.targetGroups[entry.department];
              const authorLabel =
                entry.anonymous || !entry.authorName ? t.feedbackAnonAuthor : entry.authorName;

              return (
                <article
                  key={entry.id}
                  className="rounded-xl border border-ikea-navy/10 bg-[#F7F9FC] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <p className="text-sm font-bold text-ikea-navy leading-snug break-words">
                      {entry.topic}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-ikea-muted">
                      <span className="font-semibold text-ikea-ink bg-white px-2 py-0.5 rounded border border-ikea-navy/10">
                        {deptLabel}
                      </span>
                      <span>· {authorLabel}</span>
                      <span>· {formatDate(entry.createdAt)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => cycleFeedbackStatus(entry.id)}
                    title={t.feedbackCycleAction}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer shrink-0 self-start sm:self-center ${STATUS_BADGE_CLASSES[entry.status]}`}
                  >
                    <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.feedbackStatuses[entry.status]}</span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
