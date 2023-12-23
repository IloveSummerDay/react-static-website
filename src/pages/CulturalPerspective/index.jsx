import { Outlet } from 'react-router-dom'
import CulturalPerspectiveNav from '../../components/FuncNav'
export default function CulturalPerspective() {
  return (
    <>
      <div className=" h-[100vh] bg-gradient-to-r from-gradientFrom to-gradientTo">
        <CulturalPerspectiveNav
          navs={['看见非遗', '体验非遗']}
          navsUrl={['/cultural-perspective/see', '/cultural-perspective/experience']}
          title={'文化视界'}
          titleWidth={15}
          desc={'Cultural Perspective'}
        />
        <Outlet />
      </div>
    </>
  )
}
