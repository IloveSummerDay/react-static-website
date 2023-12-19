import { createBrowserRouter } from 'react-router-dom'
import CulturalPerspective from '.././pages/CulturalPerspective'
import News from '.././pages/News'
import NotFoundPage from '.././pages/NotFoundPage'
import App from '../App'
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,

    errorElement: <NotFoundPage />
  },
  {
    path: '/cultural-perspective',
    element: <CulturalPerspective />
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
