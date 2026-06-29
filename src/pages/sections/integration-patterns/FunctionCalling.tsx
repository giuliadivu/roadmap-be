import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('integration-patterns', 'function-calling')!

export default function FunctionCalling() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Il <strong>function calling</strong> permette a un LLM di decidere{' '}
        <strong>quando eseguire una funzione</strong> e quali argomenti
        passarle. Tu dichiari le funzioni disponibili — per ognuna un nome, una
        breve descrizione e gli argomenti con i loro tipi.
      </p>

      <h2>Il loop</h2>
      <p>
        Durante la conversazione, invece di rispondere in testo, il modello può
        rispondere con un <strong>JSON</strong> conforme allo schema della
        funzione. Il tuo programma “wrapper” legge quel JSON,{' '}
        <strong>chiama la funzione reale</strong>, e{' '}
        <strong>rimanda il risultato</strong> al modello, che prosegue. Questo
        ciclo si ripete finché il compito è svolto.
      </p>

      <h2>Perché conta</h2>
      <p>
        È ciò che permette a un <strong>agente</strong> di fare cose concrete:
        cercare sul web, leggere dati, inviare un’email. Poiché l’output è{' '}
        <strong>strutturato</strong> (si appoggia agli{' '}
        <strong>structured outputs</strong>), si ottengono meno errori rispetto
        a far scrivere al modello codice o comandi in linguaggio naturale.
      </p>
    </ContentPage>
  )
}
