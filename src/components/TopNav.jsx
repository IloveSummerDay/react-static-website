import { Link } from 'react-router-dom'
const navs = ['文化视界', '跨界传承', '盘活非遗', '新闻动态']

const links = [
  '/cultural-perspective/see',
  '/cross-border-inheritance',
  '/refresh-cultural-heritage/policy',
  '/news/inherite-stories'
]
export default function TopNav() {
  return (
    <>
      <div
        className=" flex items-center justify-evenly w-[50%]  text-[1.5rem] flex-nowrap whitespace-nowrap
         mx-auto "
      >
        {navs.map((nav, index) => {
          return (
            <Link
              key={index}
              className=" p-4 ml-8 mr-8 rounded-xl  text-[#69532D] flex items-center justify-center 
               hover:bg-white transition-all duration-300 ease-in-out

              "
              to={links[index]}
            >
              {nav}
            </Link>
          )
        })}
      </div>
    </>
  )
}
