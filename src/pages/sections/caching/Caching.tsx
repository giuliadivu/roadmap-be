import { ContentPage } from '../../../components/ContentPage'
import { TopicCardList } from '../../../components/TopicCardList'
import { getSection } from '../../../data/roadmap'

const section = getSection('caching')!

export default function Caching() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        Il <strong>caching</strong> consiste nel conservare copie dei dati in
        uno storage temporaneo e veloce (la <em>cache</em>), più vicino a chi li
        richiede rispetto alla fonte originale. Servire un dato dalla cache
        invece di ricalcolarlo o rileggerlo dal database{' '}
        <strong>riduce la latenza</strong> e{' '}
        <strong>alleggerisce il carico</strong> sui sistemi a valle.
      </p>

      <h2>Dove può vivere una cache</h2>
      <p>
        Il caching avviene a più livelli: nel <strong>browser</strong> (HTTP
        caching), in una <strong>CDN</strong>, in una cache{' '}
        <strong>in-memory</strong> dell’applicazione (Redis, Memcached) e
        perfino dentro il database. Più la cache è vicina al client, più è
        veloce.
      </p>

      <h2>Strategie di caching</h2>
      <ul>
        <li>
          <strong>Cache-aside</strong> (lazy loading) — l’app cerca prima in
          cache; se manca (<em>cache miss</em>), legge dal DB e popola la cache.
          La più comune.
        </li>
        <li>
          <strong>Read-through</strong> — è la cache stessa a caricare il dato
          mancante dal DB, in modo trasparente per l’app.
        </li>
        <li>
          <strong>Write-through</strong> — si scrive su cache e DB insieme: dati
          sempre coerenti, scritture un po’ più lente.
        </li>
        <li>
          <strong>Write-back</strong> (write-behind) — si scrive prima in cache
          e il DB viene aggiornato in modo asincrono: veloce, ma rischio di
          perdita dati se la cache cade.
        </li>
        <li>
          <strong>Write-around</strong> — si scrive direttamente sul DB,
          evitando di “sporcare” la cache con dati usati di rado.
        </li>
      </ul>

      <h2>TTL, eviction e invalidazione</h2>
      <p>
        Una cache ha spazio limitato: con un <strong>TTL</strong> (time to live)
        i dati scadono dopo un certo tempo, e con politiche di{' '}
        <strong>eviction</strong> come <strong>LRU</strong> (Least Recently
        Used) si liberano gli elementi meno usati. La parte davvero difficile è
        l’
        <strong>invalidazione</strong>: assicurarsi che la cache non serva dati
        ormai vecchi.
      </p>

      <h2>Approfondimenti</h2>
      <p>Gli strumenti e i meccanismi di caching più comuni nel backend:</p>
      <TopicCardList section={section} />
    </ContentPage>
  )
}
