import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-the-basics', 'vectors')!

export default function Vectors() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Un <strong>vettore</strong> è un oggetto matematico con{' '}
        <strong>magnitudo</strong> (lunghezza) e <strong>direzione</strong>,
        rappresentato come una lista ordinata di numeri (le sue{' '}
        <em>componenti</em>). È il modo in cui l’AI rappresenta i dati come
        punti in uno spazio a molte dimensioni.
      </p>

      <h2>Perché contano nell’AI</h2>
      <p>
        Rappresentando ogni dato come un punto/vettore, si possono calcolare{' '}
        <strong>similarità</strong> e <strong>distanza</strong> tra elementi (ad
        esempio con la <em>cosine similarity</em>). Un{' '}
        <strong>embedding</strong> è, di fatto, proprio un vettore: i due
        concetti sono due facce della stessa idea.
      </p>

      <h2>Vector database</h2>
      <p>
        Quando i vettori diventano milioni, servono i{' '}
        <strong>vector database</strong>: li indicizzano per rispondere in
        fretta a domande del tipo “quali elementi sono più <em>vicini</em> a
        questo?”. Sono il motore della ricerca per similarità dietro al RAG.
      </p>
    </ContentPage>
  )
}
