import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

const section = getSection('learn-the-basics')!

export default function LearnTheBasics() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        L’<strong>AI generativa</strong> è ormai parte del lavoro di un backend
        developer: aiuta ad <strong>automatizzare attività</strong> e a scrivere
        codice più in fretta — snippet, documentazione, persino test — usando
        modelli di machine learning.
      </p>
      <p>
        Per usarla con criterio (e per costruire funzionalità “AI-powered”)
        serve però conoscerne le basi: come funzionano gli <strong>LLM</strong>,
        in cosa l’AI differisce dalla programmazione tradizionale e i mattoni
        dietro le applicazioni intelligenti — <strong>embeddings</strong>,{' '}
        <strong>vettori</strong> e <strong>RAG</strong>.
      </p>

      <h2>Gli argomenti</h2>
      <TopicCardList section={section} />
    </ContentPage>
  )
}
