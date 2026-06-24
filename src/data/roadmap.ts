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

export type ResourceType =
  | 'official'
  | 'article'
  | 'video'
  | 'course'
  | 'roadmap'
  | 'opensource'

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
  {
    slug: 'relational-databases',
    title: 'Relational Databases',
    summary:
      'Dati in tabelle (righe/colonne) interrogati con SQL, con chiavi e vincoli per l’integrità e transazioni ACID. Es. PostgreSQL, MySQL, Oracle.',
    status: 'available',
    resources: [
      {
        label: 'Databases and SQL (edX)',
        url: 'https://www.edx.org/course/databases-5-sql',
        type: 'course',
        note: 'Corso che parte dai concetti dei database relazionali e dal linguaggio SQL.',
      },
      {
        label: 'Relational Databases — IBM',
        url: 'https://www.ibm.com/cloud/learn/relational-databases',
        type: 'article',
        note: 'Panoramica su tabelle, chiavi, relazioni e perché garantiscono forte consistenza.',
      },
      {
        label: 'Intro To Relational Databases (Udacity)',
        url: 'https://www.udacity.com/course/intro-to-relational-databases--ud197',
        type: 'course',
        note: 'Introduzione pratica alla modellazione dei dati e alle query relazionali.',
      },
      {
        label: 'What is a Relational Database',
        url: 'https://youtu.be/OqjJjpjDRLc',
        type: 'video',
        note: 'Spiegazione video sintetica del modello relazionale.',
      },
    ],
    topics: [
      {
        slug: 'migrations',
        title: 'Database Migrations',
        summary:
          'Script versionati che evolvono lo schema del database in modo controllato e ripetibile tra ambienti.',
        resources: [
          {
            label: 'Schema migration — Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Schema_migration',
            type: 'article',
            note: 'Definizione generale e concetti di base delle migrazioni di schema.',
          },
          {
            label: 'What is Database Migration? — MongoDB',
            url: 'https://www.mongodb.com/resources/basics/databases/database-migration',
            type: 'article',
            note: 'Tipi di migrazione (schema vs dati) e perché servono.',
          },
          {
            label:
              "Introduction to Database Migration: A Beginner's Guide — dbvis",
            url: 'https://www.dbvis.com/thetable/introduction-to-database-migration-a-beginners-guide/',
            type: 'article',
            note: 'Esempi di script (ALTER TABLE), tool (Flyway, Alembic, Django) e best practice.',
          },
          {
            label: 'Database Migrations Explained',
            url: 'https://www.youtube.com/watch?v=mMsZPZKNc4g',
            type: 'video',
            note: 'Spiegazione video del flusso up/down e del versionamento.',
          },
        ],
      },
      {
        slug: 'n-plus-one',
        title: 'N+1 Problem',
        summary:
          'Una query per la lista + N query per i dati correlati di ogni elemento: query inefficienti che degradano le performance.',
        resources: [
          {
            label: 'In Detail Explanation of N+1 Problem — Medium (Doctolib)',
            url: 'https://medium.com/doctolib/understanding-and-fixing-n-1-query-30623109fe89',
            type: 'article',
            note: 'Analisi dettagliata del problema e di come individuarlo e risolverlo.',
          },
          {
            label: 'What is the N+1 Problem — PlanetScale',
            url: 'https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it',
            type: 'article',
            note: 'Esempio concreto con misure (≈10x più lento) e soluzione via JOIN/query unica.',
          },
          {
            label: 'SQLite and the N+1 (no) problem',
            url: 'https://www.youtube.com/watch?v=qPfAQY_RahA',
            type: 'video',
            note: 'Punto di vista in cui, con il DB locale, l’N+1 pesa molto meno.',
          },
        ],
      },
    ],
  },
  {
    slug: 'learn-about-apis',
    title: 'Learn about APIs',
    summary:
      'Cos’è un’API e come si progetta, documenta e protegge: stili, OpenAPI, autenticazione, web security, hashing e best practice.',
    status: 'available',
    resources: [
      {
        label: 'What is an API? — AWS',
        url: 'https://aws.amazon.com/what-is/api/',
        type: 'article',
        note: 'Definizione chiara di API: endpoint, metodi e formati di scambio dati.',
      },
      {
        label: 'What is an API (in 5 minutes)',
        url: 'https://www.youtube.com/watch?v=ByGJQzlzxQg',
        type: 'video',
        note: 'Introduzione rapida e visuale al concetto di API.',
      },
      {
        label: 'API Design Roadmap — roadmap.sh',
        url: 'https://roadmap.sh/api-design',
        type: 'roadmap',
        note: 'Percorso dedicato a come progettare bene un’API.',
      },
    ],
    topics: [
      {
        slug: 'api-styles',
        title: 'API Styles',
        summary:
          'I modi di strutturare la comunicazione client-server: REST, GraphQL, gRPC, SOAP.',
        resources: [
          {
            label: 'What is a REST API? — Red Hat',
            url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api',
            type: 'article',
            note: 'Lo stile più diffuso: risorse e verbi HTTP, stateless.',
          },
          {
            label: 'GraphQL — sito ufficiale',
            url: 'https://graphql.org/',
            type: 'official',
            note: 'Un solo endpoint: il client chiede esattamente i campi che gli servono.',
          },
          {
            label: 'gRPC — sito ufficiale',
            url: 'https://grpc.io/',
            type: 'official',
            note: 'RPC ad alte prestazioni su HTTP/2 con Protocol Buffers (binario).',
          },
          {
            label: 'SOAP vs REST vs GraphQL vs gRPC',
            url: 'https://www.youtube.com/watch?v=4vLxWqE94l4',
            type: 'video',
            note: 'Confronto diretto dei quattro stili e di quando usarli.',
          },
        ],
      },
      {
        slug: 'open-api-specs',
        title: 'Open API Specs',
        summary:
          'OpenAPI (ex Swagger): descrivere un’API REST in YAML/JSON come fonte di verità leggibile da umani e macchine.',
        resources: [
          {
            label: 'OpenAPI Specification — sito ufficiale',
            url: 'https://swagger.io/specification/',
            type: 'official',
            note: 'Lo standard per descrivere endpoint, formati e autenticazione.',
          },
          {
            label: 'Swagger Editor',
            url: 'https://swagger.io/tools/swagger-editor/',
            type: 'official',
            note: 'Editor live per scrivere e validare una spec OpenAPI.',
          },
          {
            label: 'OpenAPI 3.0: How to Design and Document APIs',
            url: 'https://www.youtube.com/watch?v=6kwmW_p_Tig',
            type: 'video',
            note: 'Come progettare e documentare un’API con OpenAPI 3.0.',
          },
        ],
      },
      {
        slug: 'authentication',
        title: 'Authentication',
        summary:
          'Verificare l’identità del client (chi sei) — distinta dall’autorizzazione (cosa puoi fare). API key, sessioni, token, JWT, OAuth, SSO.',
        resources: [
          {
            label: 'Basic Authentication — roadmap.sh',
            url: 'https://roadmap.sh/guides/basic-authentication',
            type: 'article',
            note: 'Il metodo più semplice: credenziali nell’header. Solo su HTTPS.',
          },
          {
            label: 'Token Based Authentication — roadmap.sh',
            url: 'https://roadmap.sh/guides/token-authentication',
            type: 'article',
            note: 'Autenticazione stateless basata su token al posto della sessione.',
          },
          {
            label: 'JWT Authentication — roadmap.sh',
            url: 'https://roadmap.sh/guides/jwt-authentication',
            type: 'article',
            note: 'Token firmati e self-contained: cosa sono e come usarli.',
          },
          {
            label: 'OAuth — roadmap.sh',
            url: 'https://roadmap.sh/guides/oauth',
            type: 'article',
            note: 'Delegare l’accesso a terze parti (es. “login con Google”).',
          },
        ],
      },
      {
        slug: 'web-security',
        title: 'Web Security',
        summary:
          'Proteggere l’applicazione dalle minacce comuni: injection, XSS, CSRF; difese come validazione input, HTTPS, header di sicurezza.',
        resources: [
          {
            label: 'Why HTTPS Matters — Google',
            url: 'https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https',
            type: 'article',
            note: 'Perché cifrare il traffico con TLS è il punto di partenza.',
          },
          {
            label: 'OWASP Web Application Security Testing Checklist',
            url: 'https://github.com/0xRadi/OWASP-Web-Checklist',
            type: 'opensource',
            note: 'Checklist pratica per verificare la sicurezza di un’app web.',
          },
          {
            label: 'Cybersecurity Roadmap — roadmap.sh',
            url: 'https://roadmap.sh/cyber-security',
            type: 'roadmap',
            note: 'Percorso dedicato per approfondire la sicurezza.',
          },
          {
            label: '7 Security Risks and Hacking Stories for Web Developers',
            url: 'https://www.youtube.com/watch?v=4YOpILi9Oxs',
            type: 'video',
            note: 'Rischi reali raccontati con esempi concreti.',
          },
        ],
      },
      {
        slug: 'hashing-algorithms',
        title: 'Hashing Algorithms',
        summary:
          'Le password si fanno in hash (one-way), non si cifrano. Hash lenti con salt (bcrypt, scrypt) vs hash veloci (MD5, SHA) inadatti alle password.',
        resources: [
          {
            label: 'Understanding bcrypt — Auth0',
            url: 'https://auth0.com/blog/hashing-in-action-understanding-bcrypt/',
            type: 'article',
            note: 'Come bcrypt usa salt e work factor per rallentare il brute force.',
          },
          {
            label: 'Wikipedia — scrypt',
            url: 'https://en.wikipedia.org/wiki/Scrypt',
            type: 'article',
            note: 'Hash “memory-hard”: resistente anche ad hardware dedicato.',
          },
          {
            label: 'Why is MD5 not safe?',
            url: 'https://infosecscout.com/why-md5-is-not-safe/',
            type: 'article',
            note: 'Perché MD5 (e gli hash veloci) non vanno usati per le password.',
          },
          {
            label: 'What is SHA?',
            url: 'https://www.encryptionconsulting.com/education-center/what-is-sha/',
            type: 'article',
            note: 'La famiglia SHA: ottima per integrità/checksum, non per password.',
          },
        ],
      },
      {
        slug: 'api-security-best-practices',
        title: 'API Security Best Practices',
        summary:
          'La checklist trasversale per mettere in sicurezza un’API: HTTPS, auth robusta, validazione input, rate limiting, minimi privilegi, monitoraggio.',
        resources: [
          {
            label: 'API Security Best Practices Roadmap — roadmap.sh',
            url: 'https://roadmap.sh/api-security-best-practices',
            type: 'roadmap',
            note: 'Percorso dedicato con tutte le pratiche di sicurezza per le API.',
          },
          {
            label: 'OWASP API Security Project (Top 10)',
            url: 'https://owasp.org/www-project-api-security/',
            type: 'opensource',
            note: 'I rischi di sicurezza più critici delle API e come mitigarli.',
          },
        ],
      },
    ],
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
