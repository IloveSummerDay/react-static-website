// import { useLoaderData } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import NewsNav from '../../components/FuncNav'

export default function News() {
  // const { id } = useLoaderData()
  return (
    <>
      <NewsNav
        title={'新闻动态'}
        desc={'News update'}
        navs={['传承故事', '活动咨询', '科研会议']}
        navsUrl={['/news/inherite-stories', '/news/event-consultations', '/news/research-conferences']}
        titleWidth={10}
      />
      <Outlet></Outlet>
    </>
  )
}
