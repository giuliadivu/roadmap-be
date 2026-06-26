import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-the-basics', 'rags')!

export default function Rags() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>RAG</strong> (Retrieval-Augmented Generation) è un approccio che
        combina il <strong>recupero di informazioni</strong> con la{' '}
        <strong>generazione</strong> di linguaggio, per produrre risposte più
        accurate e pertinenti.
      </p>

      <h2>Come funziona</h2>
      <ol>
        <li>
          <strong>Retrieval</strong> — si recuperano i dati rilevanti da una{' '}
          <em>knowledge base</em> o da una fonte esterna, tipicamente con una{' '}
          <strong>ricerca vettoriale</strong> sugli embeddings.
        </li>
        <li>
          <strong>Generation</strong> — quei dati vengono passati all’LLM come{' '}
          <strong>contesto</strong>, che genera la risposta basandosi su di
          essi.
        </li>
      </ol>

      <h2>Perché è utile</h2>
      <p>
        Ancorare (<em>grounding</em>) la risposta a dati reali rende l’output
        più <strong>affidabile</strong> e <strong>aggiornato</strong>, riduce le{' '}
        <strong>allucinazioni</strong> e permette di usare dati{' '}
        <strong>privati o freschi</strong> senza ri-addestrare il modello. È
        ideale per Q&amp;A, chatbot e summarization su basi di conoscenza
        specifiche.
      </p>
    </ContentPage>
  )
}
