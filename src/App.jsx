import { useEffect, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import TopNav from './components/TopNav'
const imgs = ['保护.png', '传承.png', '文化.png']

function App() {
  const swiper = useRef(null)
  const pagination = {
    clickable: true
    // renderBullet: function (index, className) {
    //   console.log(index, className)
    //   if (index === 0) return `<img src='/pagination.svg'  class=' inline-block w-[2.5rem] object-contain'></img>`
    //   else return `<img src='/pagination_none.svg'  class=' inline-block w-[2.5rem] object-contain'></img>`
    // }
  }
  useEffect(() => {
    console.log(swiper.current)
    return () => {
      swiper.current = null
    }
  }, [])
  return (
    <>
      <div
        className=" w-full h-full flex flex-col justify-evenly items-center 
      bg-gradient-to-r from-gradientNavFrom to-gradientNavTo
      "
      >
        <TopNav />
        <div className="w-[80%] rounded-[20px] overflow-hidden mx-auto shadow-md">
          <Swiper
            ref={swiper}
            lazy="true"
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={pagination}
            modules={[EffectFade, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={`/${imgs[0]}`}
                className=" object-contain  w-full"
                loading={'lazy'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/${imgs[1]}`}
                className=" object-contain  w-full"
                loading={'lazy'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/${imgs[2]}`}
                className=" object-contain  w-full"
                loading={'lazy'}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default App
