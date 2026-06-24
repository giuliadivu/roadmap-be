import { ContentPage } from '../../../components/ContentPage'
import { getTopic } from '../../../data/roadmap'

const topic = getTopic('learn-about-apis', 'hashing-algorithms')!

export default function HashingAlgorithms() {
  return (
    <ContentPage
      title={topic.title}
      summary={topic.summary}
      resources={topic.resources}
    >
      <p>
        Le password non si <em>cifrano</em> (operazione reversibile): si
        trasformano con una funzione di <strong>hash</strong>, che è{' '}
        <strong>a senso unico</strong>. Al login si calcola di nuovo l’hash
        della password inserita e lo si confronta con quello salvato — il valore
        originale non viene mai memorizzato.
      </p>

      <h2>Concetti chiave</h2>
      <ul>
        <li>
          <strong>Salt</strong> — un valore casuale aggiunto a ogni password,
          così due password uguali producono hash diversi e le{' '}
          <em>rainbow table</em> diventano inutili.
        </li>
        <li>
          <strong>Work factor</strong> (cost) — un parametro che rende l’hash{' '}
          <strong>volutamente lento</strong>, per ostacolare il brute force.
        </li>
        <li>
          <strong>Memory-hard</strong> — algoritmi che richiedono molta memoria,
          resistenti anche a GPU/ASIC dedicati.
        </li>
      </ul>

      <h2>Quali usare</h2>
      <ul>
        <li>
          <strong>bcrypt</strong>, <strong>scrypt</strong> (e Argon2) — pensati
          per le password: lenti, con salt e work factor. <em>scrypt</em> è
          anche memory-hard.
        </li>
      </ul>

      <h2>Quali NON usare per le password</h2>
      <ul>
        <li>
          <strong>MD5</strong>, <strong>SHA-1/SHA-256</strong> — sono{' '}
          <strong>veloci</strong> (e MD5/SHA-1 hanno collisioni note): ottimi
          per <em>checksum</em> e integrità dei file, pessimi per le password
          proprio perché un attaccante può provarne miliardi al secondo.
        </li>
      </ul>
    </ContentPage>
  )
}
