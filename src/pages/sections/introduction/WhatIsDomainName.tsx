import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('introduction', 'what-is-domain-name')!

export default function WhatIsDomainName() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Un <strong>nome di dominio</strong> è un indirizzo{' '}
        <strong>leggibile dall’uomo</strong> (es. <code>example.com</code>) che
        corrisponde all’<strong>indirizzo IP</strong> numerico di un server.
        Serve a navigare senza dover ricordare sequenze di numeri.
      </p>

      <h2>Com’è fatto</h2>
      <p>
        Un dominio si legge da destra a sinistra: il <strong>TLD</strong>{' '}
        (top-level domain, es. <code>.com</code>), il{' '}
        <strong>second-level domain</strong> (es. <code>example</code>) e
        eventuali <strong>sottodomini</strong> (es. <code>www</code> o{' '}
        <code>api</code>).
      </p>

      <h2>Dominio vs URL</h2>
      <p>
        Il dominio è <em>una parte</em> dell’URL: in{' '}
        <code>https://example.com/blog</code>, <code>example.com</code> è il
        dominio, il resto indica protocollo e percorso. I domini si registrano
        tramite i <strong>registrar</strong>, che li gestiscono e li rinnovano.
      </p>
    </ContentPage>
  )
}
