import type { Resource } from '../data/roadmap'

const typeLabels: Record<Resource['type'], string> = {
  official: 'Ufficiale',
  article: 'Articolo',
  video: 'Video',
  course: 'Corso',
  roadmap: 'Roadmap',
  opensource: 'Open source',
}

interface ResourceListProps {
  resources: Resource[]
}

/**
 * Elenco delle risorse gratuite con la spiegazione esplicita di ciascuna.
 * Reso fuori dal contenitore `.prose` per avere uno stile a "card" indipendente.
 */
export function ResourceList({ resources }: ResourceListProps) {
  if (resources.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        Risorse (spiegate)
      </h2>
      <ul className="mt-4 space-y-3">
        {resources.map((resource) => (
          <li
            key={resource.url}
            className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                {resource.label}
              </a>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {typeLabels[resource.type]}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {resource.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
