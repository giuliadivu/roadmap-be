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
    topics: [
      {
        slug: 'how-does-the-internet-work',
        title: 'How does the Internet work',
        summary:
          'Una rete globale di computer interconnessi via TCP/IP: come una richiesta viaggia da te al server e torna indietro.',
        resources: [
          {
            label: 'How does the Internet Work? — cs.fyi',
            url: 'https://cs.fyi/guide/how-does-internet-work',
            type: 'article',
            note: 'Guida chiara al percorso di una richiesta attraverso la rete.',
          },
          {
            label: 'The Internet Explained — Vox',
            url: 'https://www.vox.com/2014/6/16/18076282/the-internet',
            type: 'article',
            note: 'Panoramica divulgativa su cos’è e come nasce Internet.',
          },
          {
            label: 'How does the internet work? (Full Course)',
            url: 'https://www.youtube.com/watch?v=zN8YNNHcaZc',
            type: 'video',
            note: 'Corso video completo sui fondamenti della rete.',
          },
        ],
      },
      {
        slug: 'what-is-http',
        title: 'What is HTTP',
        summary:
          'Il protocollo request-response, stateless, su cui viaggia il web. Spesso usato con HTTPS per la cifratura.',
        resources: [
          {
            label: 'What is HTTP? — Cloudflare',
            url: 'https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/',
            type: 'article',
            note: 'Cos’è HTTP e come funziona il modello richiesta-risposta.',
          },
          {
            label: 'Full HTTP Networking Course',
            url: 'https://www.youtube.com/watch?v=2JYT5f2isg4',
            type: 'course',
            note: 'Corso approfondito su HTTP e networking.',
          },
          {
            label: 'HTTP/1 to HTTP/2 to HTTP/3',
            url: 'https://www.youtube.com/watch?v=a-sBfyiXysI',
            type: 'video',
            note: 'L’evoluzione del protocollo e cosa cambia tra le versioni.',
          },
        ],
      },
      {
        slug: 'what-is-domain-name',
        title: 'What is a Domain Name',
        summary:
          'Indirizzi leggibili dall’uomo (es. example.com) che mappano agli indirizzi IP delle macchine.',
        resources: [
          {
            label: 'What is a Domain Name? — MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name',
            type: 'article',
            note: 'Struttura di un dominio (SLD + TLD) e ruolo dei registrar.',
          },
          {
            label: 'Domain Name vs URL — Cloudflare',
            url: 'https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name/',
            type: 'article',
            note: 'Differenza tra nome di dominio e URL.',
          },
          {
            label: 'A Beginners Guide to How Domain Names Work',
            url: 'https://www.youtube.com/watch?v=Y4cRx19nhJk',
            type: 'video',
            note: 'Introduzione video al funzionamento dei domini.',
          },
        ],
      },
      {
        slug: 'what-is-hosting',
        title: 'What is Hosting',
        summary:
          'Lo spazio e le risorse server per pubblicare un sito: shared, VPS, dedicato, cloud.',
        resources: [
          {
            label: 'Pages, sites, servers and search engines — MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines',
            type: 'article',
            note: 'Chiarisce la differenza tra pagina, sito, web server e motore di ricerca.',
          },
          {
            label: 'What is Web Hosting and How Does It Work?',
            url: 'https://www.youtube.com/watch?v=H8oAvyqQwew',
            type: 'video',
            note: 'Cos’è l’hosting e come funziona, in breve.',
          },
          {
            label: 'Different Types of Web Hosting Explained',
            url: 'https://www.youtube.com/watch?v=AXVZYzw8geg',
            type: 'video',
            note: 'Confronto tra shared, VPS, dedicato e cloud hosting.',
          },
        ],
      },
      {
        slug: 'dns-and-how-it-works',
        title: 'DNS and how it works',
        summary:
          'Il sistema gerarchico che traduce i nomi di dominio in indirizzi IP: la “rubrica” di Internet.',
        resources: [
          {
            label: 'Everything You Need to Know About DNS — cs.fyi',
            url: 'https://cs.fyi/guide/everything-you-need-to-know-about-dns',
            type: 'article',
            note: 'Guida completa alla risoluzione DNS e ai suoi attori.',
          },
          {
            label: 'What is DNS? — Cloudflare',
            url: 'https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/',
            type: 'article',
            note: 'Spiegazione chiara della gerarchia dei server DNS.',
          },
          {
            label: 'How DNS works (comic)',
            url: 'https://howdns.works/',
            type: 'article',
            note: 'Il DNS spiegato a fumetti, passo per passo.',
          },
        ],
      },
      {
        slug: 'browsers-and-how-they-work',
        title: 'Browsers and how they work',
        summary:
          'Come il browser interpreta HTML, CSS e JavaScript e renderizza la pagina (rendering e JS engine).',
        resources: [
          {
            label: 'Populating the Page: How Browsers Work — MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
            type: 'article',
            note: 'Dal parsing al rendering: il percorso critico di una pagina.',
          },
          {
            label: 'How Browsers Work — Ramotion',
            url: 'https://www.ramotion.com/blog/what-is-web-browser/',
            type: 'article',
            note: 'Panoramica sui componenti di un browser moderno.',
          },
          {
            label: 'How Do Web Browsers Work?',
            url: 'https://www.youtube.com/watch?v=5rLFYtXHo9s',
            type: 'video',
            note: 'Spiegazione video del funzionamento interno dei browser.',
          },
        ],
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
  {
    slug: 'caching',
    title: 'Caching',
    summary:
      'Conservare copie dei dati in uno storage temporaneo e veloce per ridurre latenza e carico: strategie, Redis, Memcached e HTTP caching.',
    status: 'available',
    resources: [
      {
        label: 'What is caching? — Cloudflare',
        url: 'https://www.cloudflare.com/en-gb/learning/cdn/what-is-caching/',
        type: 'article',
        note: 'Introduzione chiara al concetto di cache e ai suoi benefici.',
      },
      {
        label: 'Top Caching Strategies Explained — ByteByteGo',
        url: 'https://blog.bytebytego.com/p/top-caching-strategies',
        type: 'article',
        note: 'Cache-aside, read-through, write-through, write-around, write-back a confronto.',
      },
      {
        label: 'Caching Complete Tutorial for Beginners',
        url: 'https://www.youtube.com/watch?v=1XJG34mewts',
        type: 'video',
        note: 'Panoramica video del caching dalle basi.',
      },
    ],
    topics: [
      {
        slug: 'redis',
        title: 'Redis',
        summary:
          'Data store in-memory open source con strutture dati ricche (stringhe, liste, set, hash): cache, sessioni, real-time, message broker.',
        resources: [
          {
            label: 'Redis Documentation',
            url: 'https://redis.io/docs/latest/',
            type: 'official',
            note: 'Documentazione ufficiale: strutture dati, persistenza, clustering.',
          },
          {
            label: 'Redis Roadmap — roadmap.sh',
            url: 'https://roadmap.sh/redis',
            type: 'roadmap',
            note: 'Percorso dedicato per approfondire Redis a fondo.',
          },
          {
            label: 'Redis Crash Course',
            url: 'https://www.youtube.com/watch?v=XCsS_NVAa1g',
            type: 'course',
            note: 'Corso veloce e pratico per partire con Redis.',
          },
        ],
      },
      {
        slug: 'memcached',
        title: 'Memcached',
        summary:
          'Sistema di caching in-memory distribuito e minimale: una grande hash table key-value con eviction LRU.',
        resources: [
          {
            label: 'memcached/memcached — README',
            url: 'https://github.com/memcached/memcached#readme',
            type: 'opensource',
            note: 'Il progetto ufficiale, con panoramica e documentazione.',
          },
          {
            label: 'Memcached Tutorial — TutorialsPoint',
            url: 'https://www.tutorialspoint.com/memcached/index.htm',
            type: 'article',
            note: 'Tutorial introduttivo ai comandi e all’uso.',
          },
          {
            label: 'Redis vs Memcached',
            url: 'https://www.youtube.com/watch?v=Gyy1SiE8avE',
            type: 'video',
            note: 'Confronto diretto per capire quando scegliere l’uno o l’altro.',
          },
        ],
      },
      {
        slug: 'http-caching',
        title: 'HTTP Caching',
        summary:
          'Caching lato client e intermediari governato dagli header HTTP: Cache-Control, ETag, validazione e revalidation.',
        resources: [
          {
            label: 'HTTP Caching — MDN',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching',
            type: 'official',
            note: 'Riferimento completo su Cache-Control, ETag, Expires e validazione.',
          },
          {
            label: 'Everything you need to know about HTTP Caching',
            url: 'https://www.youtube.com/watch?v=HiBDZgTNpXY',
            type: 'video',
            note: 'Spiegazione visuale del funzionamento della cache HTTP.',
          },
          {
            label: 'Client-side caching — Redis docs',
            url: 'https://redis.io/docs/latest/develop/use/client-side-caching/',
            type: 'article',
            note: 'Come il caching lato client si combina con una cache server come Redis.',
          },
        ],
      },
    ],
  },
  {
    slug: 'learn-about-web-servers',
    title: 'Learn about Web Servers',
    summary:
      'Il software che riceve richieste HTTP/HTTPS e serve contenuti o fa da reverse proxy verso l’app: Nginx, Apache, Caddy, MS IIS.',
    status: 'available',
    resources: [
      {
        label: 'What is a Web Server? — MDN',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server',
        type: 'article',
        note: 'Distingue web server hardware e software e spiega cosa fa.',
      },
      {
        label: 'What is a Web Server? — Hostinger',
        url: 'https://www.hostinger.co.uk/tutorials/what-is-a-web-server',
        type: 'article',
        note: 'Introduzione pratica al ruolo del web server nell’hosting.',
      },
      {
        label: 'Web Server Concepts and Examples',
        url: 'https://youtu.be/9J1nJOivdyw',
        type: 'video',
        note: 'Panoramica video dei concetti con esempi concreti.',
      },
    ],
    topics: [
      {
        slug: 'nginx',
        title: 'Nginx',
        summary:
          'Web server e reverse proxy ad alte prestazioni con architettura event-driven: regge moltissime connessioni concorrenti.',
        resources: [
          {
            label: 'Nginx — sito ufficiale',
            url: 'https://nginx.org/',
            type: 'official',
            note: 'Sito e documentazione ufficiale di Nginx.',
          },
          {
            label: 'NGINX Explained in 100 Seconds',
            url: 'https://www.youtube.com/watch?v=JKxlsvZXG7c',
            type: 'video',
            note: 'Cos’è Nginx e a cosa serve, in pillole.',
          },
          {
            label: 'NGINX Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=9t9Mp0BGnyI',
            type: 'video',
            note: 'Tutorial introduttivo alla configurazione.',
          },
        ],
      },
      {
        slug: 'apache',
        title: 'Apache',
        summary:
          'Apache HTTP Server: web server open source storico, modulare e flessibile, cuore dello stack LAMP.',
        resources: [
          {
            label: 'Apache HTTP Server',
            url: 'https://httpd.apache.org/',
            type: 'official',
            note: 'Sito ufficiale del progetto.',
          },
          {
            label: 'Apache Server Documentation',
            url: 'https://httpd.apache.org/docs/2.4/',
            type: 'official',
            note: 'Documentazione ufficiale (moduli, virtual host, configurazione).',
          },
          {
            label: 'Apache vs NGINX',
            url: 'https://www.youtube.com/watch?v=9nyiY-psbMs',
            type: 'video',
            note: 'Confronto tra i due web server più diffusi.',
          },
        ],
      },
      {
        slug: 'caddy',
        title: 'Caddy',
        summary:
          'Web server moderno in Go: HTTPS automatico con Let’s Encrypt e configurazione minimale.',
        resources: [
          {
            label: 'Caddy — sito ufficiale',
            url: 'https://caddyserver.com/',
            type: 'official',
            note: 'Sito e documentazione ufficiale di Caddy.',
          },
          {
            label: 'caddyserver/caddy — GitHub',
            url: 'https://github.com/caddyserver/caddy',
            type: 'opensource',
            note: 'Il progetto open source su GitHub.',
          },
          {
            label: 'How to Make a Simple Caddy 2 Website',
            url: 'https://www.youtube.com/watch?v=WgUV_BlHvj0',
            type: 'video',
            note: 'Esempio pratico di sito servito con Caddy.',
          },
        ],
      },
      {
        slug: 'ms-iis',
        title: 'MS IIS',
        summary:
          'Internet Information Services: il web server di Microsoft per Windows Server, integrato con l’ecosistema .NET.',
        resources: [
          {
            label: 'Microsoft IIS — iis.net',
            url: 'https://www.iis.net/',
            type: 'official',
            note: 'Sito ufficiale di IIS.',
          },
          {
            label: 'Learn Windows Web Server IIS',
            url: 'https://www.youtube.com/watch?v=1VdxPWwtISA',
            type: 'video',
            note: 'Introduzione all’uso di IIS su Windows Server.',
          },
          {
            label: 'What is IIS?',
            url: 'https://www.youtube.com/watch?v=hPWSqEXOjQY',
            type: 'video',
            note: 'Cos’è IIS e dove si usa, in breve.',
          },
        ],
      },
    ],
  },
  {
    slug: 'learn-the-basics',
    title: 'AI in Development: Learn the Basics',
    summary:
      'Le basi dell’AI nello sviluppo backend: come funzionano gli LLM, AI vs programmazione tradizionale e i mattoni delle app AI (embeddings, vettori, RAG).',
    status: 'available',
    resources: [
      {
        label: 'AI in software development — IBM',
        url: 'https://www.ibm.com/think/topics/ai-in-software-development',
        type: 'article',
        note: 'Panoramica di come l’AI entra nel ciclo di sviluppo software.',
      },
      {
        label: 'AI in Software Development — GitHub',
        url: 'https://github.com/resources/articles/ai-in-software-development',
        type: 'article',
        note: 'Il punto di vista di GitHub su AI e produttività degli sviluppatori.',
      },
      {
        label: 'AI in Software Development — Coursera',
        url: 'https://www.coursera.org/articles/ai-in-software-development',
        type: 'article',
        note: 'Introduzione divulgativa all’impatto dell’AI sul coding.',
      },
    ],
    topics: [
      {
        slug: 'how-llms-work',
        title: 'How LLMs Work',
        summary:
          'I Large Language Model come motori di predizione: generano testo token per token a partire da distribuzioni di probabilità.',
        resources: [
          {
            label: 'AI Engineer Roadmap — roadmap.sh',
            url: 'https://roadmap.sh/ai-engineer',
            type: 'roadmap',
            note: 'Percorso dedicato per chi vuole approfondire l’AI engineering.',
          },
          {
            label: 'What is a large language model (LLM)? — Cloudflare',
            url: 'https://www.cloudflare.com/en-gb/learning/ai/what-is-large-language-model/',
            type: 'article',
            note: 'Spiegazione accessibile di cosa sia un LLM e come funziona.',
          },
          {
            label: 'How Large Language Models Work',
            url: 'https://www.youtube.com/watch?v=5sLYAQS9sWQ',
            type: 'video',
            note: 'Il funzionamento di un LLM spiegato a livello intuitivo.',
          },
        ],
      },
      {
        slug: 'ai-vs-traditional-coding',
        title: 'AI vs Traditional Coding',
        summary:
          'Programmazione tradizionale (istruzioni esplicite) vs sviluppo assistito dall’AI (modelli che generano e suggeriscono codice).',
        resources: [
          {
            label: 'Vibe Coding Roadmap — roadmap.sh',
            url: 'https://roadmap.sh/vibe-coding',
            type: 'roadmap',
            note: 'Percorso dedicato allo sviluppo assistito dall’AI.',
          },
          {
            label: 'What is vibe coding? — IBM',
            url: 'https://www.ibm.com/think/topics/vibe-coding',
            type: 'article',
            note: 'Cosa significa scrivere software “guidando” l’AI.',
          },
          {
            label: 'AI Systems vs Traditional Coding',
            url: 'https://www.youtube.com/watch?v=P7lryCIvxgA',
            type: 'video',
            note: 'Confronto tra i due approcci con esempi.',
          },
        ],
      },
      {
        slug: 'embeddings',
        title: 'Embeddings',
        summary:
          'Rappresentazioni vettoriali dense dei dati che catturano il significato: elementi simili finiscono vicini nello spazio.',
        resources: [
          {
            label: 'What are Embeddings in Machine Learning? — Cloudflare',
            url: 'https://www.cloudflare.com/en-gb/learning/ai/what-are-embeddings/',
            type: 'article',
            note: 'Cosa sono gli embedding e perché catturano la semantica.',
          },
          {
            label: 'Getting Started With Embeddings — Hugging Face',
            url: 'https://huggingface.co/blog/getting-started-with-embeddings',
            type: 'article',
            note: 'Guida pratica per generare e usare embedding.',
          },
          {
            label: 'What are Word Embeddings?',
            url: 'https://www.youtube.com/watch?v=wgfSDrqYMJ4',
            type: 'video',
            note: 'Gli embedding delle parole spiegati con esempi.',
          },
        ],
      },
      {
        slug: 'vectors',
        title: 'Vectors',
        summary:
          'Liste ordinate di numeri che rappresentano dati in uno spazio multi-dimensionale: permettono di misurare similarità e distanza.',
        resources: [
          {
            label: 'A Gentle Introduction to Vectors for ML',
            url: 'https://machinelearningmastery.com/gentle-introduction-vectors-machine-learning/',
            type: 'article',
            note: 'Introduzione ai vettori e alle operazioni di base nel ML.',
          },
          {
            label: 'What is a vector database? — Cloudflare',
            url: 'https://developers.cloudflare.com/vectorize/reference/what-is-a-vector-database/',
            type: 'article',
            note: 'Come si indicizzano i vettori per la ricerca per similarità.',
          },
          {
            label: 'AI Foundations — What are Vectors?',
            url: 'https://www.youtube.com/watch?v=dvDmXTKFtgQ',
            type: 'video',
            note: 'I vettori spiegati nel contesto dell’AI.',
          },
        ],
      },
      {
        slug: 'rags',
        title: 'RAG',
        summary:
          'Retrieval-Augmented Generation: recuperare dati rilevanti e passarli all’LLM come contesto per risposte accurate e aggiornate.',
        resources: [
          {
            label: 'What is Retrieval Augmented Generation? — Datacamp',
            url: 'https://www.datacamp.com/blog/what-is-retrieval-augmented-generation-rag',
            type: 'article',
            note: 'Cos’è il RAG e perché migliora l’affidabilità delle risposte.',
          },
          {
            label: 'What is Retrieval-Augmented Generation? — Google Cloud',
            url: 'https://cloud.google.com/use-cases/retrieval-augmented-generation',
            type: 'article',
            note: 'Il RAG spiegato con casi d’uso pratici.',
          },
          {
            label: 'What is Retrieval-Augmented Generation? — IBM',
            url: 'https://www.youtube.com/watch?v=T-D1OfcDW1M',
            type: 'video',
            note: 'Spiegazione video chiara del flusso retrieval + generation.',
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

/** Il sotto-argomento successivo nella stessa sezione, se esiste. */
export function getNextTopic(
  sectionSlug: string,
  topicSlug: string,
): Topic | undefined {
  const topics = getSection(sectionSlug)?.topics
  if (!topics) return undefined
  const idx = topics.findIndex((t) => t.slug === topicSlug)
  if (idx === -1 || idx === topics.length - 1) return undefined
  return topics[idx + 1]
}

/** Path della rotta per una sezione, opzionalmente con sotto-argomento. */
export function sectionPath(sectionSlug: string, topicSlug?: string): string {
  return topicSlug ? `/${sectionSlug}/${topicSlug}` : `/${sectionSlug}`
}
