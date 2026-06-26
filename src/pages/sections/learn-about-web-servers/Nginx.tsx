import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-web-servers', 'nginx')!

export default function Nginx() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>Nginx</strong> (si legge “engine-x”) è un web server e{' '}
        <strong>reverse proxy</strong> ad alte prestazioni, noto per il basso
        consumo di risorse. La sua forza è l’architettura{' '}
        <strong>event-driven asincrona</strong>: invece di un processo o thread
        per ogni connessione, un numero ridotto di worker gestisce{' '}
        <strong>migliaia di connessioni concorrenti</strong>.
      </p>

      <h2>A cosa si usa</h2>
      <ul>
        <li>
          <strong>Reverse proxy</strong> davanti a un’app (Node, Python, ecc.).
        </li>
        <li>
          <strong>Load balancer</strong> per distribuire il traffico su più
          istanze.
        </li>
        <li>
          <strong>Terminazione TLS</strong> e <strong>cache HTTP</strong>.
        </li>
        <li>
          Servire <strong>contenuti statici</strong> in modo molto efficiente.
        </li>
      </ul>

      <p>
        È una scelta quasi standard nelle infrastrutture moderne, spesso messo{' '}
        <em>davanti</em> all’applicazione come punto d’ingresso.
      </p>
    </ContentPage>
  )
}
