import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-web-servers', 'apache')!

export default function Apache() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        L’<strong>Apache HTTP Server</strong> è uno dei web server open source
        più longevi e diffusi. La sua caratteristica distintiva è l’architettura{' '}
        <strong>modulare</strong>: funzionalità come riscrittura URL,
        autenticazione o SSL si aggiungono caricando moduli (<code>mod_*</code>
        ).
      </p>

      <h2>Punti di forza</h2>
      <ul>
        <li>
          Configurazione anche <strong>per-directory</strong> tramite file{' '}
          <code>.htaccess</code>, comoda sugli hosting condivisi.
        </li>
        <li>
          <strong>Virtual hosting</strong>, SSL/TLS e supporto a molte
          piattaforme.
        </li>
        <li>
          È la “A” dello stack <strong>LAMP</strong> (Linux, Apache, MySQL,
          PHP).
        </li>
      </ul>

      <h2>Apache vs Nginx</h2>
      <p>
        Storicamente Apache usa un modello{' '}
        <strong>a processo/thread per richiesta</strong> (semplice e
        flessibile), mentre Nginx è <strong>event-driven</strong> e regge meglio
        molte connessioni simultanee con meno risorse. Spesso convivono: Nginx
        davanti come reverse proxy, Apache dietro a servire l’applicazione.
      </p>
    </ContentPage>
  )
}
