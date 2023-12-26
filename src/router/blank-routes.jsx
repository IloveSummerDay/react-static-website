import Conferences1 from '../pages/_blankPages/Conferences1'
import Conferences2 from '../pages/_blankPages/Conferences2'
import Conferences3 from '../pages/_blankPages/Conferences3'
import FiveEcommerce from '../pages/_blankPages/Ecommerce'
import FiveEducation from '../pages/_blankPages/Education'
import Events1 from '../pages/_blankPages/Events1'
import Events2 from '../pages/_blankPages/Events2'
import Events3 from '../pages/_blankPages/Events3'
import FiveFilm from '../pages/_blankPages/Film'
import FiveGame from '../pages/_blankPages/Game'
import NewsInheriteStories1 from '../pages/_blankPages/NewsInheriteStories1'
import NewsInheriteStories2 from '../pages/_blankPages/NewsInheriteStories2'
import NewsInheriteStories3 from '../pages/_blankPages/NewsInheriteStories3'
import FiveTravel from '../pages/_blankPages/Travel'

export const _blankRoutes = [
  {
    path: '/NewsInheriteStories1',
    element: <NewsInheriteStories1 />
  },
  {
    path: '/NewsInheriteStories2',
    element: <NewsInheriteStories2 />
  },
  {
    path: '/NewsInheriteStories3',
    element: <NewsInheriteStories3 />
  },
  {
    path: '/Events1',
    element: <Events1 />
  },
  {
    path: '/Events2',
    element: <Events2 />
  },
  {
    path: '/Events3',
    element: <Events3 />
  },
  {
    path: '/Conferences1',
    element: <Conferences1 />
  },
  {
    path: '/Conferences2',
    element: <Conferences2 />
  },
  {
    path: '/Conferences3',
    element: <Conferences3 />
  },
  {
    path: '/Education',
    element: <FiveEducation />
  },
  {
    path: '/Ecommerce',
    element: <FiveEcommerce />
  },
  {
    path: '/Game',
    element: <FiveGame />
  },
  {
    path: '/Film',
    element: <FiveFilm />
  },
  {
    path: '/Travel',
    element: <FiveTravel />
  }
]
