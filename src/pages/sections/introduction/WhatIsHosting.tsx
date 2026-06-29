import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('introduction', 'what-is-hosting')!

export default function WhatIsHosting() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        L’<strong>hosting</strong> mette a disposizione{' '}
        <strong>spazio e risorse</strong> su un server per memorizzare e
        distribuire un sito su Internet, mantenendolo raggiungibile{' '}
        <strong>24/7</strong>.
      </p>

      <h2>I tipi principali</h2>
      <ul>
        <li>
          <strong>Shared</strong> — più siti condividono lo stesso server:
          economico, ma con risorse limitate e condivise.
        </li>
        <li>
          <strong>VPS</strong> — una porzione virtuale dedicata di un server,
          con risorse garantite.
        </li>
        <li>
          <strong>Dedicato</strong> — un’intera macchina a tua disposizione:
          massima potenza e controllo.
        </li>
        <li>
          <strong>Cloud</strong> — risorse <em>scalabili</em> e on-demand
          distribuite su più macchine.
        </li>
      </ul>

      <p>
        Oltre all’infrastruttura, i servizi di hosting offrono spesso
        registrazione del dominio, sicurezza e supporto tecnico.
      </p>
    </ContentPage>
  )
}
