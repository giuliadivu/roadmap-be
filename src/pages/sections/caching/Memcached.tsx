import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('caching', 'memcached')!

export default function Memcached() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>Memcached</strong> è un sistema di caching{' '}
        <strong>in-memory</strong> distribuito e volutamente{' '}
        <strong>minimale</strong>: si comporta come una grande{' '}
        <em>hash table</em> key-value spalmata su più macchine. Le applicazioni
        lo interrogano prima di ricadere su uno store più lento (il database).
      </p>

      <h2>Caratteristiche</h2>
      <ul>
        <li>
          Solo <strong>key-value</strong> (stringhe / oggetti serializzati):
          niente strutture dati ricche.
        </li>
        <li>
          <strong>Nessuna persistenza</strong>: se si riavvia, la cache è vuota.
        </li>
        <li>
          Eviction <strong>LRU</strong> quando la memoria si riempie.
        </li>
        <li>
          <strong>Multi-thread</strong>: sfrutta bene le CPU con molti core.
        </li>
      </ul>

      <h2>Redis o Memcached?</h2>
      <p>
        <strong>Memcached</strong> brilla quando serve una cache semplice,
        leggera e velocissima. <strong>Redis</strong> è preferibile quando
        servono <strong>strutture dati</strong>, <strong>persistenza</strong> o
        funzioni avanzate (pub/sub, stream). In molti progetti la scelta cade su
        Redis proprio per questa maggiore versatilità.
      </p>
    </ContentPage>
  )
}
