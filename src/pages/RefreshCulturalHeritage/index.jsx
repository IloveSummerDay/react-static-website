import { Outlet } from 'react-router-dom'
import RefreshCulturalHeritageNav from '../../components/FuncNav'

function RefreshCulturalHeritage() {
  return (
    <>
      <RefreshCulturalHeritageNav
        title={'盘活非遗'}
        desc={'Revitalizing Intangible Cultural Heritage'}
        navs={['政策解读', '今日展览']}
        navsUrl={['/refresh-cultural-heritage/policy', '/refresh-cultural-heritage/today']}
        titleWidth={22}
      />
      <div
        className=" h-[88vh] bg-gradient-to-r from-gradientFrom to-gradientTo
         pb-[2rem] pt-[1rem]
       "
      >
        <Outlet />
      </div>
    </>
  )
}

export default RefreshCulturalHeritage
