import { Link } from 'react-router'
import { ContentPage } from '../../../components/ContentPage'
import { getSection, sectionPath } from '../../../data/roadmap'

const section = getSection('learn-about-apis')!

export default function LearnAboutApis() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        Un’<strong>API</strong> (Application Programming Interface) è l’insieme
        di regole e protocolli con cui due software comunicano. Espone delle{' '}
        <strong>funzionalità</strong> senza rivelare come sono implementate
        internamente, tramite <em>endpoint</em>, metodi di richiesta (
        <code>GET</code>, <code>POST</code>, <code>PUT</code>,{' '}
        <code>DELETE</code>) e formati dati (di solito <strong>JSON</strong>).
      </p>
      <p>
        Per un backend developer l’API è il <strong>confine pubblico</strong>{' '}
        del sistema: è ciò che gli altri (un frontend, un’app mobile, un altro
        servizio) vedono e usano. Per questo va non solo costruita, ma anche{' '}
        <strong>progettata bene, documentata e protetta</strong>.
      </p>

      <h2>Cosa copre questa sezione</h2>
      <p>I sei aspetti chiave nel lavorare con le API:</p>
      <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
        {section.topics?.map((topic) => (
          <li key={topic.slug}>
            <Link
              to={sectionPath(section.slug, topic.slug)}
              className="block h-full rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-300 hover:shadow-sm"
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
