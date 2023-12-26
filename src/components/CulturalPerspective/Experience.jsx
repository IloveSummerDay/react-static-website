import { NavLink } from 'react-router-dom'
import ExperienceCard from './ExperienceCard'

function Experience() {
  return (
    <>
      <div className="h-[88vh] flex items-center justify-evenly text-textColor overflow-hidden">
        <div className="w-[30%] h-full relative">
          <NavLink
            className=" absolute w-full h-[70%] rounded-b-[2rem] overflow-hidden
          hover:translate-y-[40px] hover:shadow-lg
          transition duration-[800ms] ease-in-out
          "
          >
            <ExperienceCard
              imgUrl={'/冷瓷竹编二维码.png'}
              text={'「冷瓷竹编」'}
              desc={'打开微信小程序，即刻体验'}
            />
          </NavLink>
        </div>

        <div className="w-[30%] h-full relative">
          <NavLink
            className=" absolute bottom-[0] w-full h-[70%] rounded-t-[2rem] overflow-hidden
          hover:translate-y-[-40px] hover:shadow-lg
          transition duration-[800ms] ease-in-out
          "
            to={'/cultural-perspective/experience/QA'}
          >
            <ExperienceCard
              imgUrl={'/问答.png'}
              text={'「非遗答疑」'}
              desc={'“小课堂” 为你答疑解惑'}
            />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Experience
