import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('integration-patterns', 'structured-outputs')!

export default function StructuredOutputs() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Gli <strong>structured outputs</strong> consistono nel chiedere all’LLM
        di rispondere in un <strong>formato preciso</strong> — tipicamente{' '}
        <code>JSON</code> conforme a uno <strong>schema</strong> — invece che
        con testo libero.
      </p>

      <h2>Perché sono utili</h2>
      <ul>
        <li>
          Output <strong>parsabile</strong> in modo programmatico, facile da
          integrare con il resto dell’applicazione o con un’API.
        </li>
        <li>
          Vincolare il formato <strong>riduce le allucinazioni</strong> e rende
          le risposte <strong>consistenti</strong>.
        </li>
        <li>
          Ideale per <strong>data extraction</strong>, classificazione e tutti i
          casi in cui serve un risultato affidabile e tipizzato.
        </li>
      </ul>

      <p>
        Modelli come quelli di OpenAI e Claude supportano nativamente la
        conformità a uno <strong>JSON Schema</strong>. È anche il fondamento del{' '}
        <strong>function calling</strong>, dove l’output deve rispettare lo
        schema degli argomenti di una funzione.
      </p>
    </ContentPage>
  )
}
