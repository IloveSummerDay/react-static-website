import { useEffect } from 'react'

export default function Game() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = '/css/游戏.css' // 替换为你的 CSS 文件路径
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])
  return (
    <div>
      <div className="container1">
        <div className="navigat"></div>
        <div className="main">
          <div className="title">
            <h1>数字乐章：游戏中的非物质文化遗产传承之旅</h1>
          </div>
          <div className="content1">
            <p>
              在数码时代的潮流之下，传统非物质文化遗产在游戏的世界里找到了新的传承之路。电子游戏不再仅仅是娱乐的媒介，它成为了一个跨越时空的桥梁，将古老的传统文化注入到数字化的虚拟世界之中。
            </p>
            <br />
            <p>
              电子游戏不仅仅是代码和图像的堆砌，更是一种文化的传递。从古老的神话传说到传统的民间故事，游戏为这些非物质文化遗产提供了全新的表达方式。
            </p>
            <br />
          </div>
          <div className="small_title">
            <h4>原神———神女劈观</h4>
          </div>
          <div className="photo_content">
            <div className="photo1"></div>
            <div className="photo2"></div>
          </div>
          <div className="content2">
            <p>
              绒球、云肩等戏曲服饰元素，“舞花枪”的动作设计，
              专业戏曲演员演唱的戏曲唱段《神女劈观》……开放世界冒险游戏《原神》推出的新角色“云堇”在社交媒体“火”了。
              一时间，全国玩家都在讨论“云堇”身上所蕴藏的传统戏曲文化元素，对中国京剧产生了浓厚的兴趣。
            </p>
          </div>
          <div className="small_title">
            <h4>王者荣耀———在皮肤特效中彰显非遗魅力</h4>
          </div>
          <div className="content2">
            <p>
              鲁班——狮舞东方皮肤推广醒狮文化； 上官婉儿——梁祝皮肤弘扬越剧文化； 甄姬——游园惊梦皮肤展示昆曲文化；
              王昭君——乞巧织情皮肤不仅被赋予了“牛郎织女”的爱情传说， 也与苏绣传承人姚建萍老师合作展现苏绣魅力。
            </p>
          </div>
          <div className="photo_content">
            <div className="photo3"></div>
            <div className="photo4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
