import { createBrowserRouter } from 'react-router-dom'
import EchartSvg from '.././components/CulturalPerspective/EchartSvg'
import Experience from '.././components/CulturalPerspective/Experience'
import PolicyRead from '.././components/RefreshCulturalHeritage/PolicyRead'
import TodayDisplay from '.././components/RefreshCulturalHeritage/TodayDisplay'
import CrossborderInheritance from '.././pages/CrossborderInheritance'
import CulturalPerspective from '.././pages/CulturalPerspective'
import News from '.././pages/News'
import NotFoundPage from '.././pages/NotFoundPage'
import RefreshCulturalHeritage from '.././pages/RefreshCulturalHeritage'
import App from '../App'
// const isLoginloader = () => {
//   return redirect('/')
// }
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
    path: '/news',
    Component: News,
    loader: () => {
      return { id: 'loader' }
    },
    action: () => {
      return { id: 'action' }
    }
  }
])

export default router
