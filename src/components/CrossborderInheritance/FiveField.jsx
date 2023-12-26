import { animated, useTrail } from '@react-spring/web'
import { NavLink } from 'react-router-dom'

function FiveField({ imageUrls = [] }) {
  const navs = ['Education', 'Ecommerce', 'Game', 'Film', 'Travel']
  const trails = useTrail(imageUrls.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 300 },
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <>
      {trails.map((style, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            backgroundImage: `url(${imageUrls[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className=" h-[100%] flex-1 mr-[2rem] ml-[2rem] bg-yellow
        cursor-pointer hover:scale-[1.1] transition-transform duration-[800ms]
         flex"
        >
          <NavLink
            className=" flex-1"
            to={`/${navs[index]}`}
            target="_blank"
          ></NavLink>
        </animated.div>
      ))}
    </>
  )
}

export default FiveField
