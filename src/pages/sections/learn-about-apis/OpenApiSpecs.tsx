import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-apis', 'open-api-specs')!

export default function OpenApiSpecs() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        L’<strong>OpenAPI Specification</strong> (OAS, ex <em>Swagger</em>) è
        uno standard per <strong>descrivere</strong> un’API REST in un file{' '}
        <code>YAML</code> o <code>JSON</code>: endpoint, parametri, schemi di
        richiesta/risposta, codici di stato e metodi di autenticazione.
      </p>

      <h2>Perché serve</h2>
      <p>
        Diventa l’<strong>unica fonte di verità</strong> dell’API, leggibile sia
        da persone sia da macchine. Da un solo documento puoi:
      </p>
      <ul>
        <li>generare automaticamente la documentazione interattiva;</li>
        <li>
          generare <strong>client SDK</strong> e stub server in vari linguaggi;
        </li>
        <li>creare mock e test automatici;</li>
        <li>mantenere coerenza di stile tra endpoint diversi.</li>
      </ul>

      <h2>Design-first vs code-first</h2>
      <p>
        Puoi scrivere prima la spec e poi il codice (
        <strong>design-first</strong>, utile per concordare il contratto col
        team/consumatori) oppure generare la spec dal codice annotato (
        <strong>code-first</strong>). Strumenti come <strong>Swagger UI</strong>{' '}
        ed <strong>Editor</strong> aiutano a scrivere, validare e visualizzare
        la specifica.
      </p>
    </ContentPage>
  )
}
