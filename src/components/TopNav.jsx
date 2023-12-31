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
      <div className=" flex items-center justify-start h-[70px] absolute top-0 left-0 w-full z-10">
        {navs.map((nav, index) => {
          return (
            <Link
              key={index}
              className=" pl-7 pr-1 text-lg text-[#69532D]"
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
