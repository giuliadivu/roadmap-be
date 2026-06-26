import { Link, useLocation } from 'react-router'
import { getNextTopic, sectionPath } from '../data/roadmap'

/**
 * CTA verso il sotto-argomento successivo, in basso a destra.
 * Si basa sull'URL: appare solo nelle pagine micro (`/sezione/argomento`)
 * quando esiste un argomento successivo nella stessa sezione.
 */
export function NextTopicCta() {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length !== 2) return null

  const [sectionSlug, topicSlug] = parts
  const next = getNextTopic(sectionSlug, topicSlug)
  if (!next) return null

  return (
    <div className="mt-12 flex justify-end">
      <Link
        to={sectionPath(sectionSlug, next.slug)}
        className="group inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-right transition-colors hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500"
      >
        <span>
          <span className="block text-xs text-slate-500 dark:text-slate-400">
            Prossimo
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            {next.title}
          </span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  )
}
