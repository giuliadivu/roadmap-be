import { Link } from 'react-router'
import { roadmap, sectionPath } from '../data/roadmap'

export default function Home() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Backend Roadmap — Approfondimenti
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Un approfondimento sezione per sezione della{' '}
          <a
            href="https://roadmap.sh/backend"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            roadmap backend di roadmap.sh
          </a>
          : per ogni risorsa gratuita i concetti vengono spiegati
          esplicitamente.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {roadmap.map((section) => {
          const isAvailable = section.status === 'available'
          const card = (
            <div
              className={`h-full rounded-xl border p-5 transition-colors ${
                isAvailable
                  ? 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500'
                  : 'border-dashed border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`font-semibold ${
                    isAvailable
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-400 dark:text-slate-600'
                  }`}
                >
                  {section.title}
                </h2>
                {!isAvailable && (
                  <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-medium tracking-wide text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                    presto
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  isAvailable
                    ? 'text-slate-600 dark:text-slate-400'
                    : 'text-slate-400 dark:text-slate-600'
                }`}
              >
                {section.summary}
              </p>
            </div>
          )

          return (
            <li key={section.slug}>
              {isAvailable ? (
                <Link to={sectionPath(section.slug)} className="block h-full">
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
