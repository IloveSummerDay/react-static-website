import { animated, useTransition } from '@react-spring/web'
import { useState } from 'react'
import TopNav from './components/TopNav'
const imgs = ['保护.png', '传承.png', '文化.png']
const choiceBtn = '/轮播按钮.svg'
const choiceNoneBtn = '/轮播按钮（未选中）.svg'

// import TopNav from './components/TopNav'
function App() {
  const [index, setIndex] = useState(0)
  const [pagation, setPagation] = useState([choiceBtn, choiceNoneBtn, choiceNoneBtn])

  const transitions = useTransition(index, {
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: { duration: 3000 },
    onStart: () => {
      console.log('【开始】')
    },
    // 在动画停止时调用
    onRest: (_a, _b, item) => {
      console.log('【切换海报】', item, _a, _b)
      if (index === item) {
        setIndex(index => (index + 1) % imgs.length)
        setPagation(pagation.map((p, i) => ((index + 1) % imgs.length == i ? choiceBtn : choiceNoneBtn)))
      }
    },
    exitBeforeEnter: true
  })

  return (
    <>
      <TopNav />
      {transitions((style, i) => (
        <animated.div
          className="w-[100vw] h-[100vh] object-cover object-center"
          style={{ ...style, backgroundImage: `url(/${imgs[i]})`, willChange: 'opacity' }}
        />
      ))}
      <div className=" absolute flex bottom-1 left-[50%] translate-x-[-50%] h-9">
        {pagation.map((p, index) => {
          return (
            <img
              key={index}
              src={p}
              alt=""
            ></img>
          )
        })}
      </div>
    </>
  )
}

export default App
