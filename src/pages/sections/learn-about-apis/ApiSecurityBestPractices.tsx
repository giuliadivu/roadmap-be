import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-apis', 'api-security-best-practices')!

export default function ApiSecurityBestPractices() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Le <strong>best practice di sicurezza</strong> mettono insieme i temi
        precedenti (autenticazione, web security, hashing) in una checklist
        trasversale da applicare a ogni API. Su roadmap.sh esiste un percorso
        interamente dedicato a questo argomento.
      </p>

      <h2>La checklist essenziale</h2>
      <ul>
        <li>
          <strong>Sempre HTTPS/TLS</strong>: nessun dato sensibile in chiaro.
        </li>
        <li>
          <strong>Autenticazione e autorizzazione</strong> solide, con il
          principio del <strong>minimo privilegio</strong>; verifica e scadenza
          dei token.
        </li>
        <li>
          <strong>Valida e sanifica</strong> ogni input: non fidarti mai del
          client.
        </li>
        <li>
          <strong>Rate limiting</strong> e throttling contro abusi, brute force
          e DoS.
        </li>
        <li>
          <strong>Minimizza le risposte</strong>: esponi solo i dati necessari e
          gestisci gli errori senza rivelare dettagli interni.
        </li>
        <li>
          <strong>CORS restrittivo</strong> e <strong>security header</strong>{' '}
          appropriati.
        </li>
        <li>
          <strong>Logging e monitoraggio</strong>, dipendenze aggiornate e audit
          periodici.
        </li>
      </ul>

      <p>
        Il riferimento di settore è l’<strong>OWASP API Security Top 10</strong>
        , che elenca i rischi più critici delle API e come mitigarli.
      </p>
    </ContentPage>
  )
}
