import type { ComponentType } from 'react'
import { createBrowserRouter } from 'react-router'
import type { RouteObject } from 'react-router'
import { roadmap } from './data/roadmap'
import { RootLayout } from './components/layout/RootLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Introduction from './pages/sections/Introduction'
import FrontendBasics from './pages/sections/frontend-basics/FrontendBasics'
import Html from './pages/sections/frontend-basics/Html'
import Css from './pages/sections/frontend-basics/Css'
import JavaScript from './pages/sections/frontend-basics/JavaScript'
import Browsers from './pages/sections/frontend-basics/Browsers'
import RelationalDatabases from './pages/sections/relational-databases/RelationalDatabases'
import Migrations from './pages/sections/relational-databases/Migrations'
import NPlusOne from './pages/sections/relational-databases/NPlusOne'
import LearnAboutApis from './pages/sections/learn-about-apis/LearnAboutApis'
import ApiStyles from './pages/sections/learn-about-apis/ApiStyles'
import OpenApiSpecs from './pages/sections/learn-about-apis/OpenApiSpecs'
import Authentication from './pages/sections/learn-about-apis/Authentication'
import WebSecurity from './pages/sections/learn-about-apis/WebSecurity'
import HashingAlgorithms from './pages/sections/learn-about-apis/HashingAlgorithms'
import ApiSecurityBestPractices from './pages/sections/learn-about-apis/ApiSecurityBestPractices'
import Caching from './pages/sections/caching/Caching'
import Redis from './pages/sections/caching/Redis'
import Memcached from './pages/sections/caching/Memcached'
import HttpCaching from './pages/sections/caching/HttpCaching'
import LearnAboutWebServers from './pages/sections/learn-about-web-servers/LearnAboutWebServers'
import Nginx from './pages/sections/learn-about-web-servers/Nginx'
import Apache from './pages/sections/learn-about-web-servers/Apache'
import Caddy from './pages/sections/learn-about-web-servers/Caddy'
import MsIis from './pages/sections/learn-about-web-servers/MsIis'
import LearnTheBasics from './pages/sections/learn-the-basics/LearnTheBasics'
import HowLlmsWork from './pages/sections/learn-the-basics/HowLlmsWork'
import AiVsTraditionalCoding from './pages/sections/learn-the-basics/AiVsTraditionalCoding'
import Embeddings from './pages/sections/learn-the-basics/Embeddings'
import Vectors from './pages/sections/learn-the-basics/Vectors'
import Rags from './pages/sections/learn-the-basics/Rags'

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
}

const topicComponents: Record<string, ComponentType> = {
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
