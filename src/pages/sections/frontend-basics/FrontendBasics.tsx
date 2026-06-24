import { Link } from 'react-router'
import { ContentPage } from '../../../components/ContentPage'
import { getSection, sectionPath } from '../../../data/roadmap'

const section = getSection('frontend-basics')!

export default function FrontendBasics() {
  return (
    <ContentPage title={section.title} summary={section.summary}>
      <h2>Sotto-argomenti</h2>
      <p>Approfondisci ciascun argomento di questa sezione:</p>
      <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
        {section.topics?.map((topic) => (
          <li key={topic.slug}>
            <Link
              to={sectionPath(section.slug, topic.slug)}
              className="block rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-300 hover:shadow-sm"
            >
              <span className="font-medium text-slate-900">{topic.title}</span>
              <span className="mt-1 block text-sm text-slate-600">
                {topic.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </ContentPage>
  )
}
