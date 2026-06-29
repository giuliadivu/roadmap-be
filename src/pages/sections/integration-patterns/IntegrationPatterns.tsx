import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

const section = getSection('integration-patterns')!

export default function IntegrationPatterns() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        Gli <strong>integration pattern</strong> sono soluzioni riutilizzabili a
        problemi ricorrenti nel <strong>collegare sistemi software</strong> —
        qui in particolare nell’integrare funzionalità basate su{' '}
        <strong>AI/LLM</strong> dentro un’applicazione.
      </p>
      <p>
        Affrontano in modo <strong>standardizzato</strong> aspetti come la
        trasformazione dei dati, la gestione degli errori, la sicurezza e
        l’instradamento dei messaggi, così che il comportamento del sistema
        resti prevedibile e affidabile.
      </p>

      <h2>I pattern per integrare un LLM</h2>
      <p>
        Tre meccanismi ricorrono quando si “parla” con un modello da codice:
        come <strong>consegnare</strong> la risposta (streaming), in che{' '}
        <strong>formato</strong> riceverla (structured outputs) e come lasciare
        che il modello <strong>agisca</strong> (function calling).
      </p>
      <TopicCardList section={section} />
    </ContentPage>
  )
}
