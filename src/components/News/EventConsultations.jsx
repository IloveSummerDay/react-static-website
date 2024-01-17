import { NavLink } from 'react-router-dom'
import StoriesSwiper from './StoriesSwiper'
import { eventsData } from './newsData'

function EventConsultations() {
  return (
    <>
      <div
        className=" bg-gradient-to-r from-gradientFrom to-gradientTo
       pt-8 min-h-[88%]
       "
      >
        <div
          className="h-[40%] w-[70%]  mx-auto
        "
        >
          <StoriesSwiper
            swipers={[
              '/EventConsultations/活动咨询1.png',
              '/EventConsultations/活动咨询2.png',
              '/EventConsultations/活动咨询3.png'
            ]}
          />
        </div>

        <div
          className=" flex items-center justify-between
         w-[80%] mx-auto mt-10 rounded-lg
          flex-wrap
        "
        >
          {eventsData.map((item, i) => {
            return (
              <NavLink
                to={`/Events${i + 1}`}
                target="_blank"
                key={i}
                className=" w-[40%] border-b-2 pl-2 pr-2 pb-1 mb-4 border-[#A03726] 
                text-textColor cursor-pointer flex justify-between
                "
              >
                <span className=" max-w-[70%]">{item.title}</span>
                <span>{item.time}</span>
              </NavLink>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default EventConsultations
