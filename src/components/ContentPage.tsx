import type { ReactNode } from 'react'
import type { Resource } from '../data/roadmap'
import { ResourceList } from './ResourceList'

interface ContentPageProps {
  title: string
  summary: string
  resources?: Resource[]
  children?: ReactNode
}

/**
 * Template comune di ogni pagina di approfondimento:
 * intestazione (titolo + sommario) · prosa esplicativa (`children`) · risorse.
 */
export function ContentPage({
  title,
  summary,
  resources = [],
  children,
}: ContentPageProps) {
  return (
    <article>
      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
          {summary}
        </p>
      </header>

      {children && (
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      )}

      <ResourceList resources={resources} />
    </article>
  )
}
