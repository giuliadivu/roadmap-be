import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('integration-patterns', 'streaming')!

export default function Streaming() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Lo <strong>streaming</strong> riguarda <em>come</em> un LLM consegna la
        sua risposta. In una risposta <strong>streamed</strong> il modello invia
        le parole <strong>man mano che le genera</strong>: l’utente vede il
        testo crescere sullo schermo in tempo reale.
      </p>

      <h2>Streamed vs unstreamed</h2>
      <p>
        Una risposta <strong>unstreamed</strong>, invece, aspetta che l’intera
        risposta sia pronta e la invia tutta insieme. È più semplice da gestire
        lato client e più facile da <strong>cachare</strong> o{' '}
        <strong>loggare</strong>, ma l’utente attende di più — soprattutto con
        output lunghi.
      </p>
      <p>
        Lo streaming migliora la <strong>percezione di velocità</strong> e
        l’esperienza nelle chat; l’unstreamed va bene quando serve la risposta
        completa prima di elaborarla.
      </p>

      <h2>Come avviene</h2>
      <p>
        Tecnicamente si appoggia a meccanismi come i{' '}
        <strong>Server-Sent Events</strong> o il <em>chunked transfer</em>{' '}
        dell’HTTP: la connessione resta aperta e i token arrivano in{' '}
        <strong>chunk</strong> successivi.
      </p>
    </ContentPage>
  )
}
