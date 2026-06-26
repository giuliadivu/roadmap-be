import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-web-servers', 'caddy')!

export default function Caddy() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>Caddy</strong> è un web server moderno scritto in{' '}
        <strong>Go</strong>, pensato per la <strong>semplicità</strong>. La sua
        funzione più celebre è l’<strong>HTTPS automatico</strong>: ottiene e
        rinnova da solo i certificati <em>Let’s Encrypt</em>, senza
        configurazione manuale di TLS.
      </p>

      <h2>Caratteristiche</h2>
      <ul>
        <li>
          Configurazione minimale tramite <strong>Caddyfile</strong>.
        </li>
        <li>
          Servizio di <strong>file statici</strong> a zero-config.
        </li>
        <li>
          Supporto a <strong>HTTP/2</strong> (e HTTP/3), reverse proxy e load
          balancing tramite plugin.
        </li>
      </ul>

      <p>
        È una scelta ideale per progetti <strong>piccoli e medi</strong> in cui
        si vuole un setup rapido e sicuro per default.
      </p>
    </ContentPage>
  )
}
