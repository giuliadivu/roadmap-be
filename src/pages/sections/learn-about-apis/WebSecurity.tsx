import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-apis', 'web-security')!

export default function WebSecurity() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        La <strong>web security</strong> è l’insieme di pratiche che proteggono
        un’applicazione dalle minacce: chi espone un backend deve assumere che
        ogni input sia potenzialmente ostile.
      </p>

      <h2>Minacce comuni</h2>
      <ul>
        <li>
          <strong>SQL injection</strong> — input malevolo che altera una query;
          si previene con query parametrizzate.
        </li>
        <li>
          <strong>XSS</strong> (cross-site scripting) — script iniettato nelle
          pagine; si previene con l’<em>escaping</em>/encoding dell’output.
        </li>
        <li>
          <strong>CSRF</strong> — richieste forgiate a nome dell’utente; si
          mitiga con token anti-CSRF e cookie <code>SameSite</code>.
        </li>
      </ul>

      <h2>Difese di base</h2>
      <ul>
        <li>
          <strong>HTTPS/TLS</strong> ovunque: cifra il traffico in transito.
        </li>
        <li>
          <strong>Validare e sanificare</strong> ogni input lato server.
        </li>
        <li>
          <strong>Security header</strong> (CSP, HSTS) e <strong>CORS</strong>{' '}
          configurato in modo restrittivo.
        </li>
        <li>
          Gestione sicura di <strong>sessioni</strong> e segreti, dipendenze
          aggiornate, e <strong>testing</strong> regolare (incluso il pentest).
        </li>
      </ul>

      <p>
        Un riferimento di settore è <strong>OWASP</strong>, che raccoglie i
        rischi più comuni e le relative contromisure.
      </p>
    </ContentPage>
  )
}
