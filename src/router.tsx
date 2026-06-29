import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router'
import { createBrowserRouter } from 'react-router'
import { RootLayout } from './components/layout/RootLayout'
import { roadmap } from './data/roadmap'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Caching from './pages/sections/caching/Caching'
import HttpCaching from './pages/sections/caching/HttpCaching'
import Memcached from './pages/sections/caching/Memcached'
import Redis from './pages/sections/caching/Redis'
import Browsers from './pages/sections/frontend-basics/Browsers'
import Css from './pages/sections/frontend-basics/Css'
import FrontendBasics from './pages/sections/frontend-basics/FrontendBasics'
import Html from './pages/sections/frontend-basics/Html'
import JavaScript from './pages/sections/frontend-basics/JavaScript'
import FunctionCalling from './pages/sections/integration-patterns/FunctionCalling'
import IntegrationPatterns from './pages/sections/integration-patterns/IntegrationPatterns'
import Streaming from './pages/sections/integration-patterns/Streaming'
import StructuredOutputs from './pages/sections/integration-patterns/StructuredOutputs'
import BrowsersAndHowTheyWork from './pages/sections/introduction/BrowsersAndHowTheyWork'
import DnsAndHowItWorks from './pages/sections/introduction/DnsAndHowItWorks'
import HowDoesTheInternetWork from './pages/sections/introduction/HowDoesTheInternetWork'
import Introduction from './pages/sections/introduction/Introduction'
import WhatIsDomainName from './pages/sections/introduction/WhatIsDomainName'
import WhatIsHosting from './pages/sections/introduction/WhatIsHosting'
import WhatIsHttp from './pages/sections/introduction/WhatIsHttp'
import ApiSecurityBestPractices from './pages/sections/learn-about-apis/ApiSecurityBestPractices'
import ApiStyles from './pages/sections/learn-about-apis/ApiStyles'
import Authentication from './pages/sections/learn-about-apis/Authentication'
import HashingAlgorithms from './pages/sections/learn-about-apis/HashingAlgorithms'
import LearnAboutApis from './pages/sections/learn-about-apis/LearnAboutApis'
import OpenApiSpecs from './pages/sections/learn-about-apis/OpenApiSpecs'
import WebSecurity from './pages/sections/learn-about-apis/WebSecurity'
import Apache from './pages/sections/learn-about-web-servers/Apache'
import Caddy from './pages/sections/learn-about-web-servers/Caddy'
import LearnAboutWebServers from './pages/sections/learn-about-web-servers/LearnAboutWebServers'
import MsIis from './pages/sections/learn-about-web-servers/MsIis'
import Nginx from './pages/sections/learn-about-web-servers/Nginx'
import AiVsTraditionalCoding from './pages/sections/learn-the-basics/AiVsTraditionalCoding'
import Embeddings from './pages/sections/learn-the-basics/Embeddings'
import HowLlmsWork from './pages/sections/learn-the-basics/HowLlmsWork'
import LearnTheBasics from './pages/sections/learn-the-basics/LearnTheBasics'
import Rags from './pages/sections/learn-the-basics/Rags'
import Vectors from './pages/sections/learn-the-basics/Vectors'
import Migrations from './pages/sections/relational-databases/Migrations'
import NPlusOne from './pages/sections/relational-databases/NPlusOne'
import RelationalDatabases from './pages/sections/relational-databases/RelationalDatabases'

/**
 * Registry slug → componente di pagina.
 * La STRUTTURA delle rotte vive nella config (`data/roadmap.ts`); qui mappiamo
 * solo ogni slug al suo componente TSX scritto a mano.
 */
const sectionComponents: Record<string, ComponentType> = {
  introduction: Introduction,
  'frontend-basics': FrontendBasics,
  'relational-databases': RelationalDatabases,
  'learn-about-apis': LearnAboutApis,
  caching: Caching,
  'learn-about-web-servers': LearnAboutWebServers,
  'learn-the-basics': LearnTheBasics,
  'integration-patterns': IntegrationPatterns,
}

const topicComponents: Record<string, ComponentType> = {
  'introduction/how-does-the-internet-work': HowDoesTheInternetWork,
  'introduction/what-is-http': WhatIsHttp,
  'introduction/what-is-domain-name': WhatIsDomainName,
  'introduction/what-is-hosting': WhatIsHosting,
  'introduction/dns-and-how-it-works': DnsAndHowItWorks,
  'introduction/browsers-and-how-they-work': BrowsersAndHowTheyWork,
  'frontend-basics/html': Html,
  'frontend-basics/css': Css,
  'frontend-basics/javascript': JavaScript,
  'frontend-basics/browsers': Browsers,
  'relational-databases/migrations': Migrations,
  'relational-databases/n-plus-one': NPlusOne,
  'learn-about-apis/api-styles': ApiStyles,
  'learn-about-apis/open-api-specs': OpenApiSpecs,
  'learn-about-apis/authentication': Authentication,
  'learn-about-apis/web-security': WebSecurity,
  'learn-about-apis/hashing-algorithms': HashingAlgorithms,
  'learn-about-apis/api-security-best-practices': ApiSecurityBestPractices,
  'caching/redis': Redis,
  'caching/memcached': Memcached,
  'caching/http-caching': HttpCaching,
  'learn-about-web-servers/nginx': Nginx,
  'learn-about-web-servers/apache': Apache,
  'learn-about-web-servers/caddy': Caddy,
  'learn-about-web-servers/ms-iis': MsIis,
  'learn-the-basics/how-llms-work': HowLlmsWork,
  'learn-the-basics/ai-vs-traditional-coding': AiVsTraditionalCoding,
  'learn-the-basics/embeddings': Embeddings,
  'learn-the-basics/vectors': Vectors,
  'learn-the-basics/rags': Rags,
  'integration-patterns/streaming': Streaming,
  'integration-patterns/structured-outputs': StructuredOutputs,
  'integration-patterns/function-calling': FunctionCalling,
}

/** Genera le rotte delle sezioni navigabili a partire dalla config. */
function buildSectionRoutes(): RouteObject[] {
  return roadmap
    .filter((section) => section.status === 'available')
    .map((section) => {
      const SectionPage = sectionComponents[section.slug]

      if (section.topics?.length) {
        return {
          path: section.slug,
          children: [
            { index: true, element: <SectionPage /> },
            ...section.topics.map((topic): RouteObject => {
              const TopicPage = topicComponents[`${section.slug}/${topic.slug}`]
              return { path: topic.slug, element: <TopicPage /> }
            }),
          ],
        }
      }

      return { path: section.slug, element: <SectionPage /> }
    })
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      ...buildSectionRoutes(),
      { path: '*', element: <NotFound /> },
    ],
  },
])
