import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('introduction', 'what-is-http')!

export default function WhatIsHttp() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        <strong>HTTP</strong> (Hypertext Transfer Protocol) è il protocollo su
        cui viaggia il web. Definisce il <strong>formato dei messaggi</strong> e
        le regole con cui client e server comunicano.
      </p>

      <h2>Modello richiesta-risposta</h2>
      <p>
        Il client invia una <strong>richiesta</strong> (metodo come{' '}
        <code>GET</code>/<code>POST</code>, URL, header, eventuale body); il
        server restituisce una <strong>risposta</strong> con uno{' '}
        <em>status code</em>, header e contenuto. È un protocollo{' '}
        <strong>stateless</strong>: ogni richiesta è indipendente dalle altre, e
        lo stato (es. la sessione) va gestito a parte con cookie o token.
      </p>

      <h2>HTTPS ed evoluzione</h2>
      <p>
        <strong>HTTPS</strong> è HTTP incapsulato in <strong>TLS</strong>, che
        ne cifra il traffico. Il protocollo è anche evoluto nel tempo: da{' '}
        <strong>HTTP/1.1</strong> a <strong>HTTP/2</strong> (multiplexing di più
        richieste sulla stessa connessione) fino a <strong>HTTP/3</strong>{' '}
        (basato su QUIC, sopra UDP), per ridurre la latenza.
      </p>
    </ContentPage>
  )
}
