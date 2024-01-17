import { useState } from 'react'
import { qas } from './qas'

export default function QA() {
  const [index, set] = useState(0)
  const handleQuestion = index => {
    set(index)
  }
  return (
    <div
      className="h-[80%] w-[80%] text-textColor
       mx-auto  mt-10  overflow-hidden relative flex justify-center"
    >
      <img
        src="/聊天框.png"
        alt=""
        className="rounded-lg h-full w-auto absolute"
      />
      <div className=" w-[90%] h-[50%] absolute top-20">
        {/* User */}
        <div className=" h-[50%] flex items-center flex-row-reverse">
          <img
            src="/用户头像.png"
            alt=""
          />
          <div
            className="  mr-10 p-4
             flex items-center float-right justify-end bg-[#e8e8e8] bg-opacity-[0.5] rounded-2xl
              text-right
            "
            style={{ textAlign: 'top' }}
          >
            {qas[index].q}
          </div>
        </div>
        {/* AI */}
        <div className=" h-[50%] flex items-center">
          <img
            src="/ai头像.png"
            alt=""
          />
          <div className=" h-[80%] max-w-[70%] ml-10 flex items-center">{qas[index].a}</div>
        </div>
      </div>
      <div className=" w-full h-[10%] flex justify-evenly item-center absolute bottom-20">
        {['什么是非遗？', '非遗有哪些代表性的项目？', '非遗的传承方式有哪些？', '为什么非遗传承重要？'].map(
          (item, index) => {
            return (
              <div
                key={index}
                className=" p-2 bg-[#e8e8e8] flex justify-center item-center h-full
                rounded-xl cursor-pointer border-[3px] border-[#864540] hover:border-[#864540]"
                onClick={() => {
                  handleQuestion(index)
                }}
              >
                <p
                  className=" flex justify-center items-center
                 hover:border-b-[3px] hover:border-[#864540]"
                >
                  {item}
                </p>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
