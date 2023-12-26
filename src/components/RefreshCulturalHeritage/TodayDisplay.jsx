import { NavLink } from 'react-router-dom'

function TodayDisplay() {
  const displayImgs = [
    '/RefreshCulturalHeritage/展览图1.png',
    '/RefreshCulturalHeritage/展览图2.png',
    '/RefreshCulturalHeritage/展览图3.png',
    '/RefreshCulturalHeritage/展览图4.png'
  ]
  return (
    <div
      className=" w-full h-full
    flex-wrap flex items-center justify-evenly p-4
    "
    >
      {displayImgs.map((url, index) => {
        return (
          <NavLink
            to={'/today/display-detail'}
            key={index}
            className=" inline-block pr-10 cursor-pointer hover:translate-x-4
             transition-all duration-700 
             mx-auto
             "
          >
            <img src={url} />
          </NavLink>
        )
      })}
    </div>
  )
}

export default TodayDisplay
