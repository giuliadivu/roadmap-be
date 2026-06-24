import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

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
      <TopicCardList section={section} />
    </ContentPage>
  )
}
