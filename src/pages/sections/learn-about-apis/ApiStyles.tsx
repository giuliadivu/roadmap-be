import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-apis', 'api-styles')!

export default function ApiStyles() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Lo <strong>stile</strong> di un’API definisce <em>come</em> client e
        server strutturano la comunicazione: il formato dei messaggi, il
        trasporto e il modello mentale. Non esiste lo stile “migliore” in
        assoluto, ma quello più adatto al caso d’uso.
      </p>

      <h2>REST</h2>
      <p>
        Lo stile più diffuso. Modella tutto come <strong>risorse</strong> (es.{' '}
        <code>/users/42</code>) manipolate con i verbi HTTP, è{' '}
        <strong>stateless</strong> e di norma scambia JSON. Semplice, cacheabile
        e universale: la scelta di default per le API pubbliche.
      </p>

      <h2>GraphQL</h2>
      <p>
        Un <strong>unico endpoint</strong> a cui il client invia una query
        chiedendo <strong>esattamente i campi</strong> che gli servono. Risolve
        l’<em>over-fetching</em> e l’<em>under-fetching</em> tipici di REST, al
        prezzo di maggiore complessità lato server.
      </p>

      <h2>gRPC</h2>
      <p>
        Stile <strong>RPC</strong> ad alte prestazioni su HTTP/2, con messaggi{' '}
        <strong>binari</strong> (Protocol Buffers) e contratto fortemente
        tipizzato. Ideale per la comunicazione <strong>interna</strong> tra
        microservizi; meno comodo da consumare direttamente da un browser.
      </p>

      <h2>SOAP</h2>
      <p>
        Protocollo più datato, basato su <strong>XML</strong> e molto rigido
        (contratti WSDL, standard per sicurezza e transazioni). Oggi si incontra
        soprattutto in contesti <strong>enterprise/legacy</strong>.
      </p>

      <h2>Come scegliere</h2>
      <ul>
        <li>
          <strong>REST</strong> — default per API pubbliche e CRUD.
        </li>
        <li>
          <strong>GraphQL</strong> — client con esigenze di dati molto
          variabili.
        </li>
        <li>
          <strong>gRPC</strong> — comunicazione interna performante tra servizi.
        </li>
        <li>
          <strong>SOAP</strong> — integrazione con sistemi legacy che lo
          richiedono.
        </li>
      </ul>
    </ContentPage>
  )
}
