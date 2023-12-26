import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function StoriesSwiper({ swipers = [] }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=" w-full h-full"
      >
        {swipers.map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className=" w-full h-full object-contain"
                src={src}
                alt=""
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default StoriesSwiper
