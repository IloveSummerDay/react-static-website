import { animated, useTrail } from '@react-spring/web'

function PolicyRead() {
  const trails = useTrail(6, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 }
  })
  return (
    <div className=" w-full h-full flex justify-evenly flex-col items-start">
      {trails.map((style, i) => {
        return (
          <animated.div
            className=" flex-1 mb-4 mt-4 w-[50%] bg-black"
            style={style}
            key={i}
          >
            Hello World
          </animated.div>
        )
      })}
    </div>
  )
}

export default PolicyRead
