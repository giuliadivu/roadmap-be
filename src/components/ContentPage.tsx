import type { ReactNode } from 'react'
import type { Resource } from '../data/roadmap'
import { ResourceList } from './ResourceList'

interface ContentPageProps {
  title: string
  summary: string
  resources?: Resource[]
  children: ReactNode
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
      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-2 text-lg text-slate-600">{summary}</p>
      </header>

      <div className="prose prose-slate max-w-none">{children}</div>

      <ResourceList resources={resources} />
    </article>
  )
}
