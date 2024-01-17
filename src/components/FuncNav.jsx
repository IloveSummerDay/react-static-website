import { useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function FuncNav({ title, desc, navs = [], navsUrl = [], titleWidth = 15 }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const navsRef = useRef(null)
  console.log('pathname', pathname)
  const [navsDivisionLineOpacity, setOpacity] = useState(navsUrl.map(path => (path == pathname ? 1 : 0)))
  console.log(navsDivisionLineOpacity, pathname)
  function getNavsRefMap() {
    if (!navsRef.current) {
      // 首次运行时初始化 Map
      navsRef.current = new Map()
    }
    return navsRef.current
  }
  const handleClick = index => {
    const navsRefMap = getNavsRefMap()
    const navNode = navsRefMap.get(index)
    setOpacity(navsDivisionLineOpacity.map((item, i) => (i === index ? 1 : 0)))
    navigate(navsUrl[index])
    console.log(index, navNode, pathname)
  }
  return (
    <header
      className="h-[12%] flex items-center  bg-gradient-to-r from-gradientNavFrom to-gradientNavTo
     relative"
    >
      <NavLink
        to={'/'}
        className=" block h-[50%] ml-4"
      >
        <img
          className=" block h-full hover:scale-[0.8] transition-all duration-500"
          src="/homeicon.svg"
          alt=""
        />
      </NavLink>
      <div
        className=" relative text-white h-full 
      flex flex-col justify-evenly items-center ml-[2rem]"
        style={{ width: titleWidth + 'rem' }}
      >
        <p className=" w-full text-left text-[1.5rem]">{title}</p>
        <p className=" w-full text-right text-[1rem]">{desc}</p>
      </div>
      <div className="flex items-center absolute left-[50%] translate-x-[-50%]">
        {navs.map((nav, index) => {
          return (
            <div
              className=" relative text-[1.3rem] ml-[4rem] cursor-pointer 
              flex flex-col justify-start items-center text-textNavTitleColor"
              key={index}
            >
              <p
                onClick={() => {
                  handleClick(index)
                }}
                ref={node => {
                  const map = getNavsRefMap()
                  if (node) {
                    map.set(index, node)
                  } else {
                    map.delete(nav)
                  }
                }}
              >
                {nav}
              </p>
              <p
                style={{
                  backgroundImage: `url(/分割线.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: `${navsDivisionLineOpacity[index]}`,
                  transition: 'all 0.5s ease-in-out'
                }}
                className=" w-[150%] h-[20px] absolute bottom-[-0.625rem]"
              ></p>
            </div>
          )
        })}
      </div>
    </header>
  )
}

export default FuncNav
