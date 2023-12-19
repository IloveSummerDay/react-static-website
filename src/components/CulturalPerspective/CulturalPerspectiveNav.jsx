import { useRef } from 'react'

function CulturalPerspectiveNav() {
  const navs = ['看见非遗', '体验非遗']
  const navsRef = useRef(null)

  function getNavsRefMap() {
    if (!navsRef.current) {
      // 首次运行时初始化 Map。
      navsRef.current = new Map()
    }
    return navsRef.current
  }
  const handleClick = index => {
    const navsRefMap = getNavsRefMap()
    const navNode = navsRefMap.get(index)
    console.log(index, navNode)
  }
  return (
    <header className="h-[100px] flex items-center ">
      <div className="flex items-center ml-[200px]">
        {navs.map((nav, index) => {
          return (
            <div
              className=" text-[30px] ml-[50px] cursor-pointer font-custom flex flex-col justify-evenly"
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
              <div
                style={{
                  backgroundImage: `url(/public/分割线.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  objectFit: 'contain',
                  opacity: `${1}`
                }}
                className=" w-full h-[20px]"
              ></div>
            </div>
          )
        })}
      </div>
    </header>
  )
}

export default CulturalPerspectiveNav
