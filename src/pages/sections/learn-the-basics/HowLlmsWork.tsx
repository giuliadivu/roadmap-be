import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-the-basics', 'how-llms-work')!

export default function HowLlmsWork() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Un <strong>LLM</strong> (Large Language Model) è un modello di AI
        addestrato su enormi quantità di testo per{' '}
        <strong>capire e generare</strong> linguaggio naturale: generazione di
        testo, traduzione, summarization, risposta a domande.
      </p>

      <h2>Un motore di predizione</h2>
      <p>
        Nella sostanza, un LLM è un sofisticato{' '}
        <strong>predittore del prossimo token</strong>. Elabora il testo in modo
        sequenziale e, ad ogni passo, non sceglie un token unico ma produce una{' '}
        <strong>distribuzione di probabilità</strong> sui possibili token
        successivi.
      </p>

      <h2>Sampling e iterazione</h2>
      <p>
        Da quella distribuzione si <em>campiona</em> il token da emettere, con
        parametri come la <strong>temperature</strong> e il{' '}
        <strong>top-K</strong> che regolano quanto la scelta è creativa o
        conservativa. Il token scelto viene aggiunto alla sequenza e il processo
        si ripete, costruendo la risposta <strong>un token alla volta</strong>.
      </p>
      <p>
        È questa predizione iterativa, unita ai dataset enormi
        dell’addestramento, a produrre testo coerente e pertinente — pur
        restando, sotto il cofano, pura statistica sulle sequenze.
      </p>
    </ContentPage>
  )
}
