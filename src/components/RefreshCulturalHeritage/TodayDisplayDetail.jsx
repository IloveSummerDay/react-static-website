import { CaretLeftOutlined, CaretRightOutlined, DoubleRightOutlined, LeftOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { displayInfo } from './displayInfo'

function TodayDisplayDetail() {
  const text = ['日期', '主题', '地点', '注意事项']
  const props = ['title', 'theme', 'place', 'attention', 'img']
  const [displayIndex, setDiaplayIndex] = useState(0)
  const handleNext = () => {
    let temp = (displayIndex + 1) % displayInfo.length
    setDiaplayIndex(temp)
  }
  const handlePrev = () => {
    let temp = displayIndex - 1 < 0 ? 0 : displayIndex - 1
    setDiaplayIndex(temp)
  }
  return (
    <>
      <header
        className=" h-[12vh] bg-gradient-to-r from-gradientNavFrom to-gradientNavTo
      flex items-center
      "
      >
        <div
          className="ml-[2rem] text-[1.3rem] text-[#A03726]
        flex items-center
        "
        >
          <NavLink
            to="/refresh-cultural-heritage/today"
            className=" flex justify-center items-center"
          >
            <LeftOutlined
              className=" cursor-pointer mr-4 hover:text-white 
           hover:scale-[1.6] transition-all duration-500"
            />
          </NavLink>
          <p className=" mr-2">今日展览 </p>
          <DoubleRightOutlined className=" mr-2" />
          <p className=""> 展览回顾</p>
        </div>
      </header>

      <div
        className="h-[88vh] flex justify-evenly items-center
      bg-gradient-to-r from-gradientFrom to-gradientTo
       select-none
      "
      >
        <div
          className=" h-[80%] rounded-2xl w-[30%] bg-[rgba(255,255,255,0.25)]
         flex flex-col justify-evenly items-center text-textColor
        "
        >
          <p className=" text-[1.5rem]">{displayInfo[displayIndex].title}</p>
          <img
            src="../../../public/中国扇分割线.svg"
            alt=""
            className=" block"
          />
          {text.map((item, index) => {
            return (
              <p
                key={index}
                className=" w-[80%] text-[1rem]
                "
              >
                <span className=" mr-4">{item}:</span>
                <span>{displayInfo[displayIndex][props[index]]}</span>
              </p>
            )
          })}
        </div>
        <div className=" h-[80%] rounded-2xl w-[60%] overflow-hidden relative">
          <img
            src={displayInfo[displayIndex].img}
            alt=""
            className=" w-full h-full object-cover select-none"
          />
          <div
            className=" absolute bottom-4 text-[2rem] right-4 text-white
            
            "
          >
            <CaretLeftOutlined
              className=" cursor-pointer"
              onClick={handlePrev}
            />
            <CaretRightOutlined
              className=" cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TodayDisplayDetail
