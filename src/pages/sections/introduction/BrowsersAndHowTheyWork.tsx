import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('introduction', 'browsers-and-how-they-work')!

export default function BrowsersAndHowTheyWork() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Un <strong>browser</strong> prende <strong>HTML</strong>,{' '}
        <strong>CSS</strong> e <strong>JavaScript</strong> e li trasforma nella
        pagina che vedi. A farlo sono due motori: un{' '}
        <strong>rendering engine</strong> (Blink, Gecko, WebKit) e un{' '}
        <strong>JavaScript engine</strong> (es. V8).
      </p>

      <h2>Dalla risposta al pixel</h2>
      <p>
        Ricevuto l’HTML, il browser lo analizza costruendo il{' '}
        <strong>DOM</strong>; dal CSS costruisce il <strong>CSSOM</strong>; li
        combina nel <em>render tree</em>, calcola il <strong>layout</strong>{' '}
        (posizione e dimensione di ogni elemento) e infine{' '}
        <strong>dipinge</strong> i pixel sullo schermo. Il JavaScript può
        modificare il DOM e innescare nuovi cicli.
      </p>

      <h2>Sicurezza</h2>
      <p>
        Il browser isola le pagine in <strong>sandbox</strong> per impedire che
        un sito acceda al resto del sistema o ad altre schede, e spinge verso{' '}
        <strong>HTTPS</strong> per proteggere i dati in transito.
      </p>
    </ContentPage>
  )
}
