import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

const section = getSection('introduction')!

export default function Introduction() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        Il <strong>backend</strong> (o <em>server-side</em>) è la spina dorsale
        di un’applicazione web: tutto ciò che gira sul server e che l’utente non
        vede. Mentre il frontend è l’interfaccia con cui si interagisce nel
        browser, il backend si occupa di <strong>dati</strong>,{' '}
        <strong>logica di business</strong> e <strong>sicurezza</strong>,
        garantendo che il frontend abbia qualcosa da mostrare e con cui operare.
      </p>

      <h2>Il modello client-server</h2>
      <p>
        Il backend vive dentro il <strong>modello client-server</strong>. Un{' '}
        <em>client</em> (un browser, un’app mobile, un altro servizio) invia una{' '}
        <strong>richiesta</strong>; il <em>server</em> è un computer in ascolto
        che la riceve, la elabora e restituisce una <strong>risposta</strong>.
        Il punto chiave: il server non parla mai per primo — risponde solo a
        fronte di una richiesta.
      </p>

      <h2>I tre componenti del backend</h2>
      <p>L’architettura backend si regge su tre pezzi che lavorano insieme:</p>
      <ul>
        <li>
          <strong>Server</strong> — il computer (o il processo) che ascolta le
          richieste in arrivo dalla rete.
        </li>
        <li>
          <strong>Applicazione</strong> — il software con la logica di business:
          fa <em>routing</em> (associa un verbo HTTP + un URL al codice giusto),
          esegue middleware e decide cosa rispondere.
        </li>
        <li>
          <strong>Database</strong> — l’archivio <em>persistente</em> dei dati:
          sopravvive a riavvii e crash del server e tiene i dati fuori dalla
          memoria volatile dell’applicazione.
        </li>
      </ul>

      <h2>Il ciclo richiesta-risposta</h2>
      <p>
        Ogni interazione segue lo stesso schema: <strong>una richiesta</strong>{' '}
        HTTP genera <strong>una sola risposta</strong>, di norma accompagnata da
        uno <em>status code</em> (<code>200</code> OK, <code>404</code> Not
        Found, <code>500</code> errore del server). Nel mezzo, l’applicazione
        può leggere o scrivere sul database prima di formulare la risposta.
      </p>

      <h2>Le API: l’interfaccia del backend</h2>
      <p>
        Il backend non espone il database direttamente: espone una{' '}
        <strong>API</strong>, cioè un insieme di <em>endpoint</em> che
        rappresentano risorse. Più frontend diversi — sito web, app iOS, Android
        — possono usare la <strong>stessa</strong> API per accedere agli stessi
        dati. È, di fatto, il “contratto” tra client e server.
      </p>

      <h2>Cosa fa un backend developer</h2>
      <p>
        Un backend developer costruisce e mantiene server, applicazione e
        database, occupandosi di{' '}
        <strong>autenticazione e autorizzazione</strong> (chi sei / cosa puoi
        fare), <strong>sicurezza</strong> dei dati, <strong>performance</strong>{' '}
        e <strong>scalabilità</strong> (reggere più utenti e più traffico). Gli
        strumenti tipici includono linguaggi come JavaScript/Node.js, Python,
        Java, Go, C#, Ruby o PHP; framework come Express, Django, Spring o
        Rails; e servizi cloud (AWS, Azure, GCP) per il deploy.
      </p>

      <h2>Frontend vs Backend</h2>
      <p>
        In sintesi: il <strong>frontend</strong> è l’interfaccia, gira nel
        browser (HTML, CSS, JavaScript) ed è in contatto diretto con l’utente;
        il <strong>backend</strong> è logica e dati, gira sul server con
        linguaggi server-side e lavora in modo indiretto, elaborando le
        richieste. I due dialogano tramite <strong>API</strong> sopra il
        protocollo HTTP.
      </p>

      <h2>Le basi di Internet</h2>
      <p>
        Prima di addentrarsi nel backend, conviene avere chiari i fondamentali
        su cui poggia tutto il web:
      </p>
      <TopicCardList section={section} />
    </ContentPage>
  )
}
