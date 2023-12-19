function Experience() {
  return (
    <div className=" h-[80%]  flex items-center justify-evenly text-textColor">
      <div className="  w-[40%] h-[80%] flex flex-col justify-evenly cursor-pointer">
        <img
          src="/冷瓷竹编二维码.png"
          alt=""
          className=" block mx-auto hover:scale-[1.2] duration-500"
        />
        <p className=" text-center text-xl ">
          <span className="hover:font-bold">
            冷瓷、竹编 <br></br>微信小程序体验
          </span>
        </p>
      </div>
      <div className="  w-[40%] h-[90%] flex flex-col justify-start cursor-pointer">
        <img
          src="/问答.png"
          alt=""
          className=" block mx-auto hover:scale-[1.2] duration-500"
        />
        <p className=" text-center mt-5 text-xl ">
          <span className="hover:font-bold">非遗答疑小课堂</span>
        </p>
      </div>
    </div>
  )
}

export default Experience
