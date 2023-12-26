import { NavLink } from 'react-router-dom'
import StoriesSwiper from './StoriesSwiper'
import { storiesData } from './newsData'

function InheriteStories() {
  return (
    <>
      <div
        className=" bg-gradient-to-r from-gradientFrom to-gradientTo
       pt-8 min-h-[88vh]
       "
      >
        <div
          className="h-[40vh] w-[70%]  mx-auto
        "
        >
          <StoriesSwiper
            swipers={[
              '/InheriteStories/传承故事1.png',
              '/InheriteStories/传承故事2.png',
              '/InheriteStories/传承故事3.png'
            ]}
          />
        </div>

        <div
          className=" flex items-center justify-between
         w-[80%] mx-auto mt-10 rounded-lg
          flex-wrap
        "
        >
          {storiesData.map((item, i) => {
            return (
              <NavLink
                to={`/NewsInheriteStories${i + 1}`}
                target="_blank"
                key={i}
                className=" w-[45%] border-b-2 pl-2 pr-2 pb-1 mb-4 border-[#A03726] 
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

export default InheriteStories
