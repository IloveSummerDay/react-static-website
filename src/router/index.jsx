import { createBrowserRouter } from 'react-router-dom'
import EchartSvg from '.././components/CulturalPerspective/EchartSvg'
import Experience from '.././components/CulturalPerspective/Experience'
import EventConsultations from '.././components/News/EventConsultations'
import InheriteStories from '.././components/News/InheriteStories'
import ResearchConferences from '.././components/News/ResearchConferences'
import PDF from '.././components/RefreshCulturalHeritage/PDF'
import PolicyRead from '.././components/RefreshCulturalHeritage/PolicyRead'
import TodayDisplay from '.././components/RefreshCulturalHeritage/TodayDisplay'
import CrossborderInheritance from '.././pages/CrossborderInheritance'
import CulturalPerspective from '.././pages/CulturalPerspective'
import News from '.././pages/News'
import NotFoundPage from '.././pages/NotFoundPage'
import RefreshCulturalHeritage from '.././pages/RefreshCulturalHeritage'
import App from '../App'
import QA from '../components/CulturalPerspective/QA'
import TodayDisplayDetail from '../components/RefreshCulturalHeritage/TodayDisplayDetail'
// const isLoginloader = () => {
//   return redirect('/')
// }
import { _blankRoutes } from './blank-routes'
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <NotFoundPage />
  },
  {
    path: '/cultural-perspective',
    element: <CulturalPerspective />,
    children: [
      {
        path: 'see',
        // loader: isLoginloader,
        element: <EchartSvg />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: '/cultural-perspective/experience/QA',
        element: <QA />
      }
    ]
  },

  {
    path: '/cross-border-inheritance',
    element: <CrossborderInheritance />
  },
  {
    path: '/refresh-cultural-heritage',
    element: <RefreshCulturalHeritage />,
    children: [
      {
        path: 'policy',
        element: <PolicyRead />
      },
      {
        path: 'today',
        element: <TodayDisplay />
      }
    ]
  },
  {
    path: '/refresh-cultural-heritage/policy/:id',
    element: <PDF />
  },
  {
    path: '/today/display-detail',
    element: <TodayDisplayDetail />
  },
  {
    path: '/news',
    Component: News,
    children: [
      {
        path: 'inherite-stories',
        element: <InheriteStories />
      },
      {
        path: 'event-consultations',
        element: <EventConsultations />
      },
      {
        path: 'research-conferences',
        element: <ResearchConferences />
      }
    ],
    loader: () => {
      return { id: 'loader' }
    },
    action: () => {
      return { id: 'action' }
    }
  },
  // —————————————————————— //
  ..._blankRoutes
])

export default router
