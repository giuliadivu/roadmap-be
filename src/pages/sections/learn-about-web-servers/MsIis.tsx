import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-web-servers', 'ms-iis')!

export default function MsIis() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>IIS</strong> (Internet Information Services) è il web server di{' '}
        <strong>Microsoft</strong>, incluso in Windows Server. È profondamente
        integrato con l’ecosistema Windows e <strong>.NET</strong> (
        <code>ASP.NET</code>), ma serve anche PHP e contenuti statici.
      </p>

      <h2>Caratteristiche</h2>
      <ul>
        <li>
          <strong>Autenticazione integrata con Windows</strong> e SSL/TLS.
        </li>
        <li>
          <strong>URL rewriting</strong>, hosting di più siti e application pool
          isolati.
        </li>
        <li>
          Gestione sia tramite <strong>GUI</strong> (IIS Manager) sia da{' '}
          <strong>riga di comando</strong>/PowerShell.
        </li>
      </ul>

      <p>
        È la scelta tipica in <strong>ambienti enterprise Windows</strong>, dove
        l’integrazione con Active Directory e .NET è un vantaggio concreto.
      </p>
    </ContentPage>
  )
}
