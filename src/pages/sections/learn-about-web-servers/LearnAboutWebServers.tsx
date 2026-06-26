import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

const section = getSection('learn-about-web-servers')!

export default function LearnAboutWebServers() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        Un <strong>web server</strong> è il software che ascolta le richieste{' '}
        <strong>HTTP/HTTPS</strong> dei client e risponde servendo contenuti
        (pagine HTML, immagini, file) oppure inoltrando la richiesta
        all’applicazione. Il termine indica sia la <em>macchina</em> sia il{' '}
        <em>programma</em>: qui parliamo del programma.
      </p>

      <h2>Cosa fa un web server</h2>
      <ul>
        <li>
          Accetta e gestisce le <strong>connessioni</strong> in arrivo dalla
          rete.
        </li>
        <li>
          Serve <strong>contenuti statici</strong> (file) direttamente, in modo
          molto efficiente.
        </li>
        <li>
          Fa da <strong>reverse proxy</strong> verso l’application server per i
          contenuti dinamici.
        </li>
        <li>
          Gestisce <strong>TLS/HTTPS</strong>, <strong>virtual hosting</strong>{' '}
          (più siti sulla stessa macchina), compressione, caching e logging.
        </li>
      </ul>

      <h2>Statico vs dinamico</h2>
      <p>
        Per un file che esiste già (un’immagine, un CSS) il web server lo
        restituisce così com’è. Per un contenuto <strong>dinamico</strong> (una
        pagina costruita al volo) inoltra invece la richiesta all’applicazione e
        ne rimanda la risposta al client.
      </p>

      <h2>I principali</h2>
      <p>I web server più diffusi, ciascuno con i suoi punti di forza:</p>
      <TopicCardList section={section} />
    </ContentPage>
  )
}
