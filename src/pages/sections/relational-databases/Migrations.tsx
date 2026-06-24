import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('relational-databases', 'migrations')!

export default function Migrations() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Una <strong>migration</strong> è uno script versionato che modifica lo{' '}
        <strong>schema</strong> del database in modo incrementale: creare o
        alterare tabelle, aggiungere colonne o indici, e così via. Man mano che
        l’applicazione evolve, anche il database deve evolvere — e le migration
        rendono questa evoluzione <strong>controllata e ripetibile</strong>.
      </p>

      <h2>Perché servono</h2>
      <p>
        Lo schema cambia insieme al codice. Senza migration ci si ritrova a
        modificare i database a mano, in modo diverso tra sviluppatori e tra
        ambienti (dev, staging, produzione). Le migration tengono tutto{' '}
        <strong>in sincrono</strong>: la stessa sequenza di passi porta ogni
        database allo stesso stato, e il team può collaborare senza conflitti.
      </p>

      <h2>Come funzionano</h2>
      <p>
        Ogni migration ha tipicamente una parte <strong>“up”</strong> che
        applica la modifica (es.{' '}
        <code>ALTER TABLE products ADD COLUMN stock INT</code>) e spesso una{' '}
        <strong>“down”</strong> per annullarla (rollback). Il database registra
        in un’apposita tabella <strong>quali migration</strong> sono già state
        applicate, così ogni ambiente esegue solo quelle mancanti, in ordine.
      </p>
      <p>
        Quasi sempre si usano strumenti dedicati invece di SQL manuale:{' '}
        <strong>Flyway</strong>, <strong>Alembic</strong>, le{' '}
        <em>migrations</em> di Django, <strong>Prisma Migrate</strong>, Knex o
        TypeORM.
      </p>

      <h2>Buone pratiche</h2>
      <ul>
        <li>Testare la migration in un ambiente non di produzione prima.</li>
        <li>Fare un backup prima di operazioni distruttive.</li>
        <li>
          Preferire migration piccole e reversibili a grandi cambiamenti unici.
        </li>
        <li>
          Non modificare mai una migration già applicata in produzione: meglio
          aggiungerne una nuova.
        </li>
      </ul>
    </ContentPage>
  )
}
