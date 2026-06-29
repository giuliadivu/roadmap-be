import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('introduction', 'dns-and-how-it-works')!

export default function DnsAndHowItWorks() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Il <strong>DNS</strong> (Domain Name System) è la “rubrica” di Internet:
        traduce i <strong>nomi di dominio</strong> leggibili dall’uomo nei{' '}
        <strong>indirizzi IP</strong> delle macchine. Senza, dovremmo ricordare
        sequenze di numeri al posto di <code>example.com</code>.
      </p>

      <h2>La risoluzione, passo per passo</h2>
      <p>
        La traduzione segue una <strong>gerarchia</strong>: il{' '}
        <strong>resolver</strong> (di solito quello del tuo ISP) interroga un{' '}
        <strong>root server</strong>, che rimanda al server del{' '}
        <strong>TLD</strong> (<code>.com</code>), che a sua volta indica il
        server <strong>autoritativo</strong> del dominio, il quale restituisce
        l’indirizzo IP finale.
      </p>

      <h2>Caching e TTL</h2>
      <p>
        Per non ripetere ogni volta l’intero giro, le risposte vengono messe in{' '}
        <strong>cache</strong> a vari livelli (browser, sistema operativo,
        resolver) per un tempo definito dal <strong>TTL</strong>. È ciò che
        rende la navigazione quasi istantanea.
      </p>
    </ContentPage>
  )
}
