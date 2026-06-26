import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-the-basics', 'embeddings')!

export default function Embeddings() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Un <strong>embedding</strong> è una rappresentazione{' '}
        <strong>vettoriale</strong> densa e continua di un dato — una parola,
        una frase, un’immagine — in uno spazio a dimensioni ridotte. Trasforma
        informazioni complesse in <strong>numeri</strong> che un modello può
        elaborare facilmente.
      </p>

      <h2>Catturare il significato</h2>
      <p>
        La proprietà chiave è semantica: elementi <strong>simili</strong>{' '}
        finiscono <strong>vicini</strong> nello spazio vettoriale. Con i{' '}
        <em>word embeddings</em>, ad esempio, parole con significati affini sono
        vicine, e diventano possibili relazioni come sinonimi e analogie.
      </p>

      <h2>A cosa servono</h2>
      <p>
        Sono alla base di NLP, sistemi di <strong>raccomandazione</strong> e
        image recognition, e soprattutto della{' '}
        <strong>ricerca semantica</strong>: si confrontano gli embedding (cioè
        dei <strong>vettori</strong>) per trovare i contenuti più affini a una
        query — il meccanismo che alimenta il <strong>RAG</strong>.
      </p>
    </ContentPage>
  )
}
