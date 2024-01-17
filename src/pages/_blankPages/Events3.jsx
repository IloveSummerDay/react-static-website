import { useEffect } from 'react'

function Events3() {
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
          <h1>云端非遗进万家 箭乡文旅又出发</h1>
        </div>
        <div className="small_title">
          <p> 尖扎县文化馆 2023-12-18 09:39 发表于青海</p>
        </div>
        <div className="content">
          <p>
            为进一步提高人民群众非物质文化遗产保护意识， 传承弘扬中华优秀传统文化，推动非遗与现代生活相连接，
            进一步增强文化认同，坚定文化自信，铸牢中华民族共同体意识。 12月14日晚，尖扎县以“云端非遗进万家
            箭乡文旅又出发”为主题， 在尖扎县群众文化活动中心二楼多功能厅举办非遗文创产品网络直播推介会，
            青海省文化馆视频号、尖扎文旅视频号、尖扎县文化馆视频号同步直播。
          </p>
        </div>
        <div className="part_photo2">
          <div className="photo">
            <img src="/_blankImg/新闻资讯9.png" />
          </div>
          <div className="photo_1">
            <img src="/_blankImg/新闻资讯10.png" />
          </div>
        </div>
        <div className="content">
          <p>
            直播现场，尖扎县域19家公司参与直播产品推介会，在3个多小时的直播中，
            向广大直播间的网友详细介绍本地藏香、刺绣、藏式家具、藏族服饰、民族手工艺等文创产品150余件，
            整场直播由两位主播分别用双语详细介绍各类文创产品的特点，
            同步在线互动问答、留言交流，让线上观众们了解尖扎非遗，
            从而加快古老非遗融入现代生活的步伐，更好地弘扬传统文化，促进尖扎非遗有效传承发展，
            拓宽尖扎民俗文化和特色产品销售渠道。为活跃直播气氛，尖扎县文化人才专项工作者穿插表演精彩的文艺节目，
            前后2万余名线上观众进入直播间看表演，了解尖扎非遗，收到了很好直播推介效果。
          </p>
        </div>
        <div className="part_photo2">
          <div className="photo">
            <img src="/_blankImg/新闻资讯11.png" />
          </div>
          <div className="photo_1">
            <img src="/_blankImg/新闻资讯12.png" />
          </div>
        </div>
        <div className="content">
          <p>
            尖扎拥有丰富的非物质文化遗产，衍生出很多文旅产品，此次活动是将尖扎的特色非遗产品销售全国，
            促进非遗传承发展，进一步释放消费潜力、激发市场主体活力的一大举措，希望通过直播平台，
            让更多人了解尖扎非遗、感受尖扎魅力。
            同时，尖扎非遗在带动就业方面有着独特优势，也进一步发挥非遗助力乡村振兴的积极作用。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻资讯13.png" />
          </div>
        </div>
      </div>
      <div className="end"></div>
    </div>
  )
}

export default Events3
