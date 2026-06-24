/**
 * Fonte di verità unica della roadmap.
 *
 * Questo array descrive la struttura (sezioni → sotto-argomenti) e da qui
 * vengono generati: le rotte (src/router.tsx), la sidebar (Sidebar.tsx) e
 * l'indice in home (Home.tsx).
 *
 * Per aggiungere una sezione/argomento basta aggiungere una voce qui.
 * Il riferimento è la roadmap ufficiale: https://roadmap.sh/backend
 */

export type ResourceType = 'official' | 'article' | 'video' | 'course'

export interface Resource {
  label: string
  url: string
  type: ResourceType
  /**
   * Spiegazione esplicita della risorsa: cosa copre e perché è utile.
   * È il cuore dell'"approfondimento": non un semplice link, ma il concetto spiegato.
   */
  note: string
}

export interface Topic {
  slug: string
  title: string
  summary: string
  resources: Resource[]
}

export interface Section {
  slug: string
  title: string
  summary: string
  /** `available` = ha una rotta navigabile; `planned` = mostrata come placeholder. */
  status: 'available' | 'planned'
  /** Sotto-argomenti con rotte annidate (es. Frontend Basics → HTML/CSS/...). */
  topics?: Topic[]
  /** Risorse per sezioni senza sotto-argomenti (es. Introduction). */
  resources?: Resource[]
}

export const roadmap: Section[] = [
  {
    slug: 'introduction',
    title: 'Introduction',
    summary:
      'Cosa significa "backend": il modello client-server, i suoi tre componenti (server, applicazione, database) e cosa fa un backend developer.',
    status: 'available',
    resources: [
      {
        label:
          'What is backend? A comprehensive intro to server-side development',
        url: 'https://alokai.com/blog/what-is-backend',
        type: 'article',
        note: 'Panoramica del ruolo del backend, delle responsabilità del backend developer (dati, logica, sicurezza, scalabilità) e del rapporto con il frontend.',
      },
      {
        label: 'What is Back-End Architecture? — Codecademy',
        url: 'https://www.codecademy.com/article/what-is-back-end-architecture',
        type: 'article',
        note: 'Spiega i tre componenti dell’architettura (server, applicazione, database) e il ciclo richiesta-risposta che li collega.',
      },
      {
        label: 'Backend web development — a complete overview',
        url: 'https://www.youtube.com/watch?v=XBu54nfzxAQ',
        type: 'video',
        note: 'Video che dà il quadro d’insieme: cos’è il backend e quali tecnologie entrano in gioco.',
      },
      {
        label: 'How The Backend Works',
        url: 'https://www.youtube.com/watch?v=4r6WdaY3SOA',
        type: 'video',
        note: 'Spiega visivamente cosa succede a una richiesta dal client al server e ritorno.',
      },
    ],
  },
  {
    slug: 'frontend-basics',
    title: 'Frontend Basics',
    summary:
      'Le basi del frontend che ogni backend developer dovrebbe conoscere: HTML, CSS, JavaScript e come funzionano i browser.',
    status: 'available',
    topics: [
      {
        slug: 'html',
        title: 'HTML',
        summary: 'La struttura e la semantica dei contenuti web.',
        resources: [
          {
            label: 'MDN — HTML',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            type: 'official',
            note: 'Riferimento completo su elementi, attributi e semantica.',
          },
          {
            label: 'web.dev — Learn HTML',
            url: 'https://web.dev/learn/html',
            type: 'course',
            note: 'Corso strutturato e moderno sull’HTML, capitolo per capitolo.',
          },
        ],
      },
      {
        slug: 'css',
        title: 'CSS',
        summary: 'Lo strato di presentazione: layout, stile e responsive.',
        resources: [
          {
            label: 'MDN — CSS',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            type: 'official',
            note: 'Riferimento su selettori, box model, flexbox e grid.',
          },
          {
            label: 'web.dev — Learn CSS',
            url: 'https://web.dev/learn/css',
            type: 'course',
            note: 'Corso completo che parte dalle basi fino a layout avanzati.',
          },
        ],
      },
      {
        slug: 'javascript',
        title: 'JavaScript',
        summary: 'Il linguaggio che rende interattive le pagine web.',
        resources: [
          {
            label: 'MDN — JavaScript Guide',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            type: 'official',
            note: 'Guida ufficiale al linguaggio, dai tipi alle funzioni.',
          },
          {
            label: 'javascript.info',
            url: 'https://javascript.info/',
            type: 'course',
            note: 'Tutorial moderno e approfondito, dal basico all’avanzato.',
          },
        ],
      },
      {
        slug: 'browsers',
        title: 'Browsers and how they work',
        summary:
          'Cosa fa un browser dietro le quinte quando carica una pagina.',
        resources: [
          {
            label: 'MDN — How browsers work',
            url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
            type: 'article',
            note: 'Dal parsing dell’HTML al rendering: il percorso critico.',
          },
        ],
      },
    ],
  },

  // --- Sezioni successive della roadmap (placeholder, ancora senza rotta) ---
  {
    slug: 'internet',
    title: 'Internet',
    summary: 'Come funziona Internet, HTTP/HTTPS, DNS, hosting e domini.',
    status: 'planned',
  },
  {
    slug: 'pick-a-language',
    title: 'Pick a Language',
    summary: 'Scegliere un linguaggio backend (Node.js, Java, Go, Python…).',
    status: 'planned',
  },
  {
    slug: 'version-control',
    title: 'Version Control Systems',
    summary: 'Git e le piattaforme di hosting del codice.',
    status: 'planned',
  },
  {
    slug: 'databases',
    title: 'Databases',
    summary: 'Database relazionali e NoSQL, indici, transazioni.',
    status: 'planned',
  },
  {
    slug: 'apis',
    title: 'APIs',
    summary: 'REST, JSON APIs, GraphQL, autenticazione e autorizzazione.',
    status: 'planned',
  },
]

/** Solo le sezioni navigabili (con rotta). */
export const availableSections = roadmap.filter((s) => s.status === 'available')

export function getSection(slug: string): Section | undefined {
  return roadmap.find((s) => s.slug === slug)
}

export function getTopic(
  sectionSlug: string,
  topicSlug: string,
): Topic | undefined {
  return getSection(sectionSlug)?.topics?.find((t) => t.slug === topicSlug)
}

/** Path della rotta per una sezione, opzionalmente con sotto-argomento. */
export function sectionPath(sectionSlug: string, topicSlug?: string): string {
  return topicSlug ? `/${sectionSlug}/${topicSlug}` : `/${sectionSlug}`
}
