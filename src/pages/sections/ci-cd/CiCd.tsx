import { ContentPage } from '../../../components/ContentPage'
import { getSection } from '../../../data/roadmap'

const section = getSection('ci-cd')!

export default function CiCd() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        <strong>CI/CD</strong> automatizza il percorso che porta una modifica al
        codice dal repository fino agli utenti, riducendo i passaggi manuali e
        intercettando i problemi il prima possibile.
      </p>

      <h2>Continuous Integration (CI)</h2>
      <p>
        Consiste nell’<strong>integrare il codice spesso</strong> (più volte al
        giorno) in un branch condiviso, facendo partire ad ogni push una{' '}
        <strong>build</strong> e una batteria di{' '}
        <strong>test automatici</strong>. Così i conflitti e le regressioni
        emergono subito, quando sono ancora piccoli e facili da correggere.
      </p>

      <h2>Continuous Delivery / Deployment (CD)</h2>
      <p>
        Estende la CI fino agli ambienti di <strong>staging</strong> e{' '}
        <strong>produzione</strong>. Con la <strong>Continuous Delivery</strong>{' '}
        ogni build che passa i test è <em>pronta</em> al rilascio, ma il deploy
        finale richiede un’<strong>approvazione manuale</strong>. Con il{' '}
        <strong>Continuous Deployment</strong> il rilascio in produzione è
        invece <strong>completamente automatico</strong>.
      </p>

      <h2>La pipeline</h2>
      <p>
        Tutto è orchestrato da una <strong>pipeline</strong>: una sequenza di
        passi (<code>build → test → deploy</code>) che si avvia ad ogni commit.
        Strumenti comuni sono <strong>GitHub Actions</strong>, GitLab CI,
        Jenkins e CircleCI. Il risultato: rilasci più <strong>frequenti</strong>
        , <strong>affidabili</strong> e con meno errori umani.
      </p>
    </ContentPage>
  )
}
