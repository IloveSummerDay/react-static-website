import { animated, useTrail } from '@react-spring/web'
import { NavLink } from 'react-router-dom'
import { policiesData } from './policies'

function PolicyRead() {
  const trails = useTrail(policiesData.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 200 }
  })
  return (
    <div className=" w-full h-full flex justify-evenly flex-col items-center">
      {trails.map((style, i) => {
        return (
          <animated.div
            style={{
              ...style,
              width: `${50 + Math.floor(Math.random() * 10)}%`,
              backgroundImage: `url(/pencil-bg.svg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center'
            }}
            className=" flex-1 flex justify-evenly items-center text-[0.9rem]
             text-[#666666] cursor-pointer hover:text-red-400 
             font-bold hover:translate-x-[30px]
             transition-all duration-1000
             "
            key={i}
          >
            <NavLink
              className=" w-full h-full 
              flex-1 flex justify-evenly items-center text-[0.9rem]"
              to={`/refresh-cultural-heritage/policy/${i + 1}`}
              target="_blank"
            >
              <div className="flex flex-col justify-center items-center">{policiesData[i].title}</div>
              <div className="flex flex-col justify-center items-center">{policiesData[i].department}</div>
              <div className="flex flex-col justify-center items-center">{policiesData[i].time}</div>
            </NavLink>
          </animated.div>
        )
      })}
    </div>
  )
}

export default PolicyRead
