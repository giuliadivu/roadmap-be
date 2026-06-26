import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('caching', 'redis')!

export default function Redis() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>Redis</strong> è un data store <strong>in-memory</strong> open
        source: tiene i dati in RAM, da cui la sua bassissima latenza e
        l’altissimo throughput. La sua caratteristica distintiva sono le{' '}
        <strong>strutture dati</strong> native — stringhe, liste, set, hash,{' '}
        <em>sorted set</em> — che lo rendono molto più di un semplice key-value.
      </p>

      <h2>A cosa serve</h2>
      <ul>
        <li>
          <strong>Caching</strong> — l’uso più tipico: alleggerire il database.
        </li>
        <li>
          <strong>Sessioni</strong> — store veloce e condiviso tra più istanze.
        </li>
        <li>
          <strong>Analytics real-time</strong> e <strong>leaderboard</strong> —
          grazie ai sorted set.
        </li>
        <li>
          <strong>Message broker</strong> / code — con pub/sub e gli stream.
        </li>
      </ul>

      <h2>Oltre la cache</h2>
      <p>
        A differenza di una cache puramente volatile, Redis offre{' '}
        <strong>persistenza</strong> (snapshot RDB e log AOF),{' '}
        <strong>replication</strong> e <strong>clustering</strong>: può quindi
        sopravvivere a un riavvio e scalare orizzontalmente. Resta comunque
        pensato per dati che stanno in memoria.
      </p>
    </ContentPage>
  )
}
