import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-the-basics', 'ai-vs-traditional-coding')!

export default function AiVsTraditionalCoding() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Nello <strong>sviluppo tradizionale</strong> è il programmatore a
        scrivere esplicitamente il codice, definendo a mano ogni passo e ogni
        regola: il computer fa esattamente ciò che gli è stato detto.
      </p>

      <h2>Lo sviluppo assistito dall’AI</h2>
      <p>
        Lo sviluppo <strong>AI-assisted</strong> sfrutta invece modelli
        addestrati su enormi quantità di codice per{' '}
        <strong>generare snippet</strong>,{' '}
        <strong>suggerire miglioramenti</strong> e aiutare nel{' '}
        <strong>debug</strong>. Invece di scrivere tutto da zero, lo
        sviluppatore guida il modello: cicli più rapidi e meno errori meccanici.
      </p>

      <h2>Cosa non cambia</h2>
      <p>
        L’AI <strong>propone</strong>, ma non solleva dal{' '}
        <strong>capire</strong>: il codice generato va letto, verificato e
        testato. La comprensione del problema, l’architettura e la
        responsabilità sulle scelte restano dello sviluppatore — l’AI è un
        acceleratore, non un sostituto del giudizio.
      </p>
    </ContentPage>
  )
}
