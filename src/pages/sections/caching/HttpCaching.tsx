import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('caching', 'http-caching')!

export default function HttpCaching() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        L’<strong>HTTP caching</strong> permette a browser, proxy e CDN di
        conservare le risposte e riutilizzarle senza richiederle di nuovo al
        server. È governato dagli <strong>header HTTP</strong>: è il server a
        dire, risposta per risposta, se e per quanto può essere messa in cache.
      </p>

      <h2>Controllare la freschezza</h2>
      <p>
        L’header chiave è <code>Cache-Control</code>: <code>max-age</code>{' '}
        definisce per quanti secondi la risposta è considerata “fresca”;{' '}
        <code>no-cache</code> impone di rivalidare prima di riusarla;{' '}
        <code>no-store</code> vieta del tutto la memorizzazione;{' '}
        <code>private</code>/<code>public</code> indicano se può essere
        conservata solo dal browser o anche dalle cache condivise (CDN/proxy).
      </p>

      <h2>Validazione (revalidation)</h2>
      <p>
        Quando una risposta diventa <em>stale</em>, il client non riscarica
        tutto:
        <strong> rivalida</strong>. Con un <code>ETag</code> (impronta della
        risorsa) invia <code>If-None-Match</code>; con{' '}
        <code>Last-Modified</code> invia <code>If-Modified-Since</code>. Se
        nulla è cambiato, il server risponde <code>304 Not Modified</code> senza
        corpo: si risparmia banda e tempo.
      </p>

      <h2>Il nodo dell’invalidazione</h2>
      <p>
        Il compromesso è sempre lo stesso: TTL lunghi danno più velocità ma
        rischiano di servire contenuti vecchi. Una tecnica diffusa è il{' '}
        <strong>cache busting</strong> — inserire un hash nel nome dei file (es.{' '}
        <code>app.3f9a.js</code>) — così un contenuto aggiornato ha un URL nuovo
        e la cache vecchia non viene mai riusata per errore.
      </p>
    </ContentPage>
  )
}
