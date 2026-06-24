import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('relational-databases', 'n-plus-one')!

export default function NPlusOne() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Il <strong>problema N+1</strong> si verifica quando recuperi una lista
        con <strong>una query</strong> e poi, per <em>ogni</em> elemento, esegui{' '}
        <strong>una query aggiuntiva</strong> per i suoi dati correlati. Il
        risultato sono <code>1 + N</code> query al posto di un’unica query
        ottimizzata.
      </p>

      <h2>Un esempio concreto</h2>
      <p>
        Carichi tutte le <em>categorie</em> (1 query); poi cicli sulle N
        categorie e, per ognuna, fai una query per recuperarne i prodotti (N
        query). Con 100 categorie sono 101 query dove ne basterebbe una.
      </p>

      <h2>Perché fa male</h2>
      <p>
        Ogni query è un <strong>round-trip</strong> verso il database: la
        latenza si somma e con dataset grandi le performance crollano. Un
        esempio di PlanetScale mostra ~18 query in oltre 1&nbsp;secondo contro{' '}
        <strong>0,16&nbsp;s</strong> per la singola query ottimizzata — circa{' '}
        <strong>10× più veloce</strong>. Il problema è insidioso perché spesso
        nasce “di nascosto” con gli <strong>ORM</strong> e il loro{' '}
        <em>lazy loading</em>.
      </p>

      <h2>Come risolverlo</h2>
      <ul>
        <li>
          <strong>Eager loading / JOIN</strong>: una sola query che porta già i
          dati correlati.
        </li>
        <li>
          <strong>Batching</strong>: invece di N query, una sola{' '}
          <code>WHERE id IN (...)</code> per tutti gli elementi.
        </li>
        <li>
          <strong>DataLoader</strong>: raggruppa e mette in cache le richieste
          (pattern molto usato con GraphQL).
        </li>
        <li>
          <strong>Monitorare</strong> le query (log/profiler) per accorgersi
          della moltiplicazione.
        </li>
      </ul>
    </ContentPage>
  )
}
