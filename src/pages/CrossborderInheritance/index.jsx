import { animated, useTrail } from '@react-spring/web'
import CrossborderInheritanceNav from '../../components/FuncNav'

function CrossborderInheritance() {
  const trails = useTrail(5, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 300 },
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <>
      <CrossborderInheritanceNav
        title={'跨界传承'}
        titleWidth={15}
        desc={'Cross Border Inheritance'}
      />
      <div
        className=" h-[88vh] bg-gradient-to-r from-gradientFrom to-gradientTo
       flex items-center"
      >
        {trails.map((style, index) => (
          <animated.div
            key={index}
            style={style}
            className=" h-[80%] flex-1 mr-[2rem] ml-[2rem] bg-black
          cursor-pointer hover:scale-[1.1] transition-transform duration-[800ms]"
          >
            Hello World
          </animated.div>
        ))}
      </div>
    </>
  )
}

export default CrossborderInheritance
