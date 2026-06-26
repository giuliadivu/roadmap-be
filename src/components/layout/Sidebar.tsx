import { NavLink } from 'react-router'
import { roadmap, sectionPath } from '../../data/roadmap'

const linkBase = 'block rounded-md px-3 py-1.5 text-sm transition-colors'
const linkInactive =
  'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
const linkActive =
  'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'

function navClass({ isActive }: { isActive: boolean }) {
  return `${linkBase} ${isActive ? linkActive : linkInactive}`
}

/**
 * Sidebar generata interamente dalla config in `data/roadmap.ts`.
 * Le sezioni `available` sono navigabili; le `planned` sono placeholder.
 */
export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 overflow-y-auto py-8">
      <nav className="space-y-6">
        {roadmap.map((section) => (
          <div key={section.slug}>
            {section.status === 'available' ? (
              <NavLink to={sectionPath(section.slug)} end className={navClass}>
                {section.title}
              </NavLink>
            ) : (
              <span
                className={`${linkBase} cursor-default text-slate-400 dark:text-slate-600`}
                title="In arrivo"
              >
                {section.title}
                <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] tracking-wide uppercase dark:bg-slate-800">
                  presto
                </span>
              </span>
            )}

            {section.status === 'available' && section.topics && (
              <ul className="mt-1 ml-3 space-y-0.5 border-l border-slate-200 pl-2 dark:border-slate-800">
                {section.topics.map((topic) => (
                  <li key={topic.slug}>
                    <NavLink
                      to={sectionPath(section.slug, topic.slug)}
                      className={navClass}
                    >
                      {topic.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
