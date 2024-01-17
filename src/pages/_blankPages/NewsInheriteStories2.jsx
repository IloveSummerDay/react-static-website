import { useEffect } from 'react'

function NewsInheriteStories() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = '/css/新闻.css' // 替换为你的 CSS 文件路径
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])
  return (
    <div className="container1">
      <div className="navigat"></div>
      <div className="main">
        <div className="title">
          <h1>武当故事：武当山非遗传承，“祝服”以衣载道！</h1>
        </div>
        <div className="small_title">
          <p> 武当道医康养大会 2023-12-13 18:20 发表于湖北</p>
        </div>
        <div className="content">
          <p className=" mt-0">
            武当非遗盘扣是一种古老的中国传统手工艺品，其历史可以追溯到几千年前。
            这种盘扣通常用于装饰和固定衣物，其形状和样式因地域和文化的不同而有所差异。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻传承3.png" />
          </div>
        </div>
        <div className="content">
          <p>
            在武当山地区，盘扣被广泛应用于道教服饰中。这些盘扣通常由布料、绸缎或丝线等材料制成，
            其形状和图案反映了道教文化和武当山的地域特色。
          </p>
        </div>
        <div className="content">
          <p>
            例如，在武当山道教文化中，“阴阳五行”被视为重要的哲学思想。
            因此，一些盘扣的图案会采用阴阳、五行等元素，以表达道教文化的内涵。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻传承4.png" />
          </div>
        </div>
        <div className="content">
          <p>
            武当榔梅，被人们视为武当瑞意吉祥的象征，据《武当福地总真集》载“玄帝磨针之悟，因摘梅花插于木上，
            誓之曰：予若道成，汝当结实，是以灵根仙迹”这就是武当榔梅的仙源。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻传承5.png" />
          </div>
        </div>
        <div className="content">
          <p>
            &quot;衣服本是无生命的，却因为这花样的盘扣而有了生命。不同样式的衣服搭配不同样式的盘扣，
            又成了不一样的景致。一眼望去，麻衣上的盘扣鲜活栩栩，衣服也因之活起来。&quot;
          </p>
        </div>
        <div className="content">
          <p className=" w-[400px] ml-[820px]">——非物资文化传承人祝吉珍</p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻传承6.png" />
          </div>
        </div>
      </div>
      <div className="end"></div>
    </div>
  )
}

export default NewsInheriteStories
