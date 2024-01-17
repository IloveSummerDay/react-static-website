import { useEffect, useState } from 'react'
import FiveField from '../../components/CrossborderInheritance/FiveField'
import LoadingSpinner from '../../components/CrossborderInheritance/LoadingSpinner'
import CrossborderInheritanceNav from '../../components/FuncNav'
const imageUrls = [
  '/CrossborderInheritance/卡片1.png',
  '/CrossborderInheritance/卡片2.png',
  '/CrossborderInheritance/卡片3.png',
  '/CrossborderInheritance/卡片4.png',
  '/CrossborderInheritance/卡片5.png'
]

function CrossborderInheritance() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = url
      img.addEventListener('load', () => resolve())
      img.addEventListener('error', () => reject())
    })
  }
  useEffect(() => {
    async function preLoadImages() {
      try {
        await Promise.all(imageUrls.map(url => loadImage(url)))
        setImagesLoaded(true)
        console.log('【All images loaded】')
      } catch (error) {
        console.log('【Error loading images】', error)
      }
    }
    preLoadImages()
    return () => {
      setImagesLoaded(false)
    }
  }, [])
  return (
    <>
      <CrossborderInheritanceNav
        title={'跨界传承'}
        titleWidth={15}
        desc={'Cross Border Inheritance'}
      />
      <div
        className=" h-[88%] bg-gradient-to-r from-gradientFrom to-gradientTo
       flex items-center"
      >
        <div className=" h-[80%] w-full flex items-center justify-evenly">
          {imagesLoaded ? (
            // 如果所有图片都加载完成，进行渲染
            <FiveField imageUrls={imageUrls} />
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </>
  )
}

export default CrossborderInheritance
