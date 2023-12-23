import { animated, useTransition } from '@react-spring/web'
import { useNavigate } from 'react-router-dom'

function ExperienceCard({ imgUrl, text, desc }) {
  const navigate = useNavigate()
  const handleNav = () => {
    navigate('/')
  }
  const transitions = useTransition(1, {
    from: { opacity: 0.2 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    onStart: () => {
      console.log('【开始】')
    },
    // 在动画停止时调用
    onRest: (_a, _b, item) => {
      console.log('【切换海报】', item, _a, _b)
    },
    exitBeforeEnter: true
  })
  //
  return (
    <>
      {transitions(style => (
        <animated.div
          style={{ ...style }}
          onClick={() => handleNav()}
          className=" w-full h-full relative flex flex-col items-center justify-evenly
         bg-gradient-to-br from-[#FFECC7] to-[#F6CA7E]"
        >
          <div className=" w-full h-[70%] flex justify-evenly items-center">
            <img
              src={imgUrl}
              alt=""
              className=" h-full w-auto block mx-auto hover:scale-[1.05] duration-500 cursor-pointer"
            />
            <p className=" text-center text-xl text-[1rem]">
              <span className=" text-[#C05A47]">{text}</span>
            </p>
          </div>
          <p className="text-[#C05A47] hover:underline hover:font-bold cursor-pointer">{desc}</p>
        </animated.div>
      ))}
    </>
  )
}

export default ExperienceCard
