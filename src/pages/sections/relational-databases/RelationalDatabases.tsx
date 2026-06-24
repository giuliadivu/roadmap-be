import { Link } from 'react-router'
import { ContentPage } from '../../../components/ContentPage'
import { getSection, sectionPath } from '../../../data/roadmap'

const section = getSection('relational-databases')!

export default function RelationalDatabases() {
  return (
    <ContentPage
      title={section.title}
      summary={section.summary}
      resources={section.resources}
    >
      <p>
        Un <strong>database relazionale</strong> organizza i dati in{' '}
        <strong>tabelle</strong>: ogni riga è un record, ogni colonna un
        attributo tipizzato. È il modello più diffuso per i dati strutturati e
        si interroga con <strong>SQL</strong>, un linguaggio dichiarativo
        (descrivi <em>cosa</em> vuoi, non <em>come</em> ottenerlo). Esempi:{' '}
        <strong>PostgreSQL</strong>, <strong>MySQL</strong>, Oracle, SQL Server.
      </p>

      <h2>Schema, tabelle e tipi</h2>
      <p>
        Ogni tabella ha uno <strong>schema</strong> fisso: l’elenco delle
        colonne con il loro tipo (<code>INTEGER</code>, <code>VARCHAR</code>,{' '}
        <code>TIMESTAMP</code>…). Questa rigidità è un vantaggio: il database
        rifiuta i dati che non rispettano la forma attesa, garantendo coerenza.
      </p>

      <h2>Chiavi e relazioni</h2>
      <p>
        L’aspetto “relazionale” nasce dalle <strong>chiavi</strong>. La{' '}
        <strong>primary key</strong> identifica in modo univoco una riga; la{' '}
        <strong>foreign key</strong> punta alla primary key di un’altra tabella,
        creando una relazione. Da qui i legami <em>uno-a-molti</em> (un ordine
        ha molte righe) e <em>molti-a-molti</em> (risolti con una tabella
        ponte).
      </p>

      <h2>Integrità dei dati e transazioni ACID</h2>
      <p>
        I <strong>vincoli</strong> (<code>NOT NULL</code>, <code>UNIQUE</code>,{' '}
        <code>CHECK</code>, foreign key) tengono i dati validi a livello di
        database, non solo di applicazione. Le operazioni avvengono in{' '}
        <strong>transazioni ACID</strong> — <em>Atomicity</em> (tutto o niente),{' '}
        <em>Consistency</em>, <em>Isolation</em>, <em>Durability</em> — che le
        rendono affidabili anche in caso di errori o accessi concorrenti.
      </p>

      <h2>Normalizzazione</h2>
      <p>
        La <strong>normalizzazione</strong> è il processo di organizzare le
        tabelle per ridurre la ridondanza: ogni informazione vive in un solo
        posto, evitando dati duplicati e incoerenti. Si bilancia con esigenze di
        performance (a volte si <em>denormalizza</em> di proposito).
      </p>

      <h2>Quando sceglierli</h2>
      <p>
        Sono la scelta naturale quando i dati sono <strong>strutturati</strong>{' '}
        e con relazioni chiare, e quando serve{' '}
        <strong>forte consistenza</strong> (es. pagamenti, prenotazioni). Per
        dati molto variabili o per scalare in orizzontale su enormi volumi, si
        valutano i database NoSQL.
      </p>

      <h2>Approfondimenti</h2>
      <p>
        Due aspetti pratici di lavoro quotidiano con i database relazionali:
      </p>
      <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
        {section.topics?.map((topic) => (
          <li key={topic.slug}>
            <Link
              to={sectionPath(section.slug, topic.slug)}
              className="block rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-300 hover:shadow-sm"
            >
              <span className="font-medium text-slate-900">{topic.title}</span>
              <span className="mt-1 block text-sm text-slate-600">
                {topic.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </ContentPage>
  )
}
