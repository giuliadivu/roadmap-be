import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-apis', 'authentication')!

export default function Authentication() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        L’<strong>autenticazione</strong> risponde alla domanda “
        <em>chi sei?</em>
        ”: verifica l’identità del client prima di dargli accesso alle risorse.
        Va tenuta distinta dall’<strong>autorizzazione</strong> (“
        <em>cosa puoi fare?</em>”), che decide i permessi una volta nota
        l’identità.
      </p>

      <h2>Stateful vs stateless</h2>
      <p>
        Nelle sessioni <strong>stateful</strong> il server ricorda chi sei (un{' '}
        <em>session id</em> in un cookie punta a uno stato lato server). Nei{' '}
        <strong>token</strong> stateless, invece, è il client a portare ad ogni
        richiesta una prova di identità che il server verifica senza memoria
        condivisa — più semplice da scalare orizzontalmente.
      </p>

      <h2>Metodi comuni</h2>
      <ul>
        <li>
          <strong>API key</strong> / <strong>Basic auth</strong> — semplici,
          solo su HTTPS.
        </li>
        <li>
          <strong>Session-based</strong> — id di sessione in un cookie.
        </li>
        <li>
          <strong>Token / JWT</strong> — token firmato e <em>self-contained</em>
          : il server ne verifica la firma senza interrogare un database.
        </li>
        <li>
          <strong>OAuth 2.0</strong> — delega l’accesso a terze parti (il
          classico “login con Google”).
        </li>
        <li>
          <strong>SSO</strong> — un’unica autenticazione per più applicazioni.
        </li>
      </ul>

      <p>
        Regola d’oro: trasmetti le credenziali e i token{' '}
        <strong>solo su HTTPS</strong> e non confondere mai autenticazione e
        autorizzazione.
      </p>
    </ContentPage>
  )
}
