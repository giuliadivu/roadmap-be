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

/**
 * Registry slug → componente di pagina.
 * La STRUTTURA delle rotte vive nella config (`data/roadmap.ts`); qui mappiamo
 * solo ogni slug al suo componente TSX scritto a mano.
 */
const sectionComponents: Record<string, ComponentType> = {
  introduction: Introduction,
  'frontend-basics': FrontendBasics,
}

const topicComponents: Record<string, ComponentType> = {
  'frontend-basics/html': Html,
  'frontend-basics/css': Css,
  'frontend-basics/javascript': JavaScript,
  'frontend-basics/browsers': Browsers,
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
