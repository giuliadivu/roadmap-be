import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('introduction', 'how-does-the-internet-work')!

export default function HowDoesTheInternetWork() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Internet è una <strong>rete globale di computer interconnessi</strong>{' '}
        che comunicano grazie alla famiglia di protocolli{' '}
        <strong>TCP/IP</strong>. Non esiste un nodo centrale: è una rete{' '}
        <strong>decentralizzata</strong> in cui i dati trovano la loro strada da
        una macchina all’altra.
      </p>

      <h2>Cosa succede a una richiesta</h2>
      <p>
        Quando apri un sito, la richiesta parte dal tuo dispositivo, attraversa
        il tuo <strong>ISP</strong> (provider), interroga il{' '}
        <strong>DNS</strong> per tradurre il nome di dominio in un{' '}
        <strong>indirizzo IP</strong>, e viene poi instradata di <em>router</em>{' '}
        in router attraverso le reti fino al <strong>server</strong> di
        destinazione, che elabora e risponde.
      </p>

      <h2>TCP e IP</h2>
      <p>
        I due ruoli chiave: <strong>IP</strong> si occupa di{' '}
        <em>indirizzare</em> e instradare i pacchetti verso la destinazione
        giusta; <strong>TCP</strong> garantisce una consegna <em>affidabile</em>
        , spezzando i dati in pacchetti, verificando che arrivino tutti e
        riassemblandoli nell’ordine corretto.
      </p>
    </ContentPage>
  )
}
