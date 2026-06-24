import { Link } from 'react-router'
import type { Section } from '../data/roadmap'
import { sectionPath } from '../data/roadmap'

/**
 * Griglia di card verso i sotto-argomenti di una sezione.
 * Condivisa dalle pagine "overview" (Frontend Basics, Relational Databases, …).
 */
export function TopicCardList({ section }: { section: Section }) {
  return (
    <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
      {section.topics?.map((topic) => (
        <li key={topic.slug}>
          <Link
            to={sectionPath(section.slug, topic.slug)}
            className="block h-full rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500"
          >
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {topic.title}
            </span>
            <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
              {topic.summary}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
