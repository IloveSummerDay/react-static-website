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
          <h1>始于匠心 臻于完善——非遗传承人纪执来</h1>
        </div>
        <div className="small_title">
          <p> 大丰堆镇 2023-12-13 14:32 发表于天津</p>
        </div>
        <div className="content">
          <p className=" mt-0">
            纪执来，一个地地道道的陈官屯人，四十出头儿的年纪，他身材高挑儿，时常面带微笑，
            与人说话时眼睛里总是流露出热情与自信，给人一种亲切感。
            他总说：“传承了六百多年的手艺没有在我这一辈消失，就是我对村子作出的最大贡献。
            我还要继续做冬菜，要将品牌做大做强， 让更多人的人知道我们村，我们的冬菜，重振天津冬菜的辉煌。”
          </p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻传承7.png" />
          </div>
        </div>
        <div className="content">
          <p>
            纪执来出生在静海区陈官屯镇纪家庄村的一个普通家庭， 因为在叔伯弟兄中大排行第七，所以父亲给他取小名“老七”。
            这个村有着非常悠久的冬菜制作历史，他的祖上就制作冬菜，手艺可谓是一脉相承。
            小时候他经常听父亲讲冬菜的故事，每到做冬菜时都十分的开心，全家人干劲十足，
            每天热热闹闹跟过年一样。但随着机械加工的兴起，制作时间长、产量少、成本高的手工冬菜逐渐没落，
            在这样的影响下，纪执来也不得不放弃手工制作冬菜的这条路，转头干一些其他的工作来维持生计，
            但是复兴手工冬菜仍是他不变的目标。
          </p>
        </div>
        <div className="content">
          <p>
            2017年在老一辈人的呼吁下，天津冬菜传统加工制作技艺受到媒体的重视并得到广为宣传。
            一时间，沉寂了20多年的古法手工冬菜登上媒体热度榜，引起部分专家学者注意。
            这一年纪家庄冬菜制作技艺被评为了天津市非物质文化遗产，从此名声大噪。在家打工的纪执来闻讯后激动不已，
            20多年来的梦想又重新燃起，
            复兴古法手工冬菜成为纪执来此时此刻唯一的想法。于是在同年他成立了公司专门从事手工制作冬菜。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo">
            <img src="/_blankImg/新闻传承8.png" />
          </div>
        </div>
        <div className="content">
          <p>
            他秉承古法、坚守初心，用匠心成就梦想，用匠艺诠释担当，将冬菜制作发扬光大。
            他一手操办的“纪老七”牌冬菜享誉津城，成为天津冬菜手工制作代表性人物。
            2017年，纪老七的冬菜品牌被确定为“天津市级非物质文化遗产”代表性项目，
            并代表全天津市的非物质文化遗产走进了“2018年天津春节联欢晚会”，向全国人民展示非遗项目的悠久传承。
            2018年，他在国家工商行政管理总局商标局成功注册“纪老七五香冬菜”商标，
            同年5月成立了天津市静海区鸿盛源蔬菜种植专业合作社。此后所种植的作为冬菜的主要原料——白菜、大蒜，
            不仅满足了自身的需求，同时也为村里的人们提供了就业机会。
            2018年10月《天津纪老七五香冬菜系列》荣获第七届北京国际旅游商品博览会“优秀旅游商品奖”。
            2019年7月纪老七被静海区文化和旅游局命名为非物质文化遗产代表性项目冬菜制作技艺代表性传承人，
            同年9月被天津市烹饪协会授予天津餐饮业质量服务提升惠民工程“天津名小吃”称号。
            自2017年起，天津电视台和静海电视台曾多次对纪老七的制菜厂和生产基地进行了采访和报道。
            随之，这个曾不被人看好的年轻人，如今却成为了颇有名气的致富带头人。
          </p>
        </div>
        {/* <div className="part_photo">
          <div className="photo object-contain">
            <img src="/_blankImg/新闻传承9.png" />
          </div>
        </div>
        <div className="content">
          <p>
            这就是陈官屯镇的纪执来——一个白手起家、勇于开拓的上进者，
            一个有爱心有担当的庄稼人。回首这几年的艰辛，纪执来也时常感叹，创业中有苦有甜，
            但看着越来越多人喜欢自己制作的冬菜，心中的甜还是更多一分的。
            他说，做人和做冬菜一样，都要坚守初心、保持匠心、一步步的来，
            只有每一步都做好了、做对了，最后才能有价值，不能夜郎自大也不能投机取巧，
            人生没有捷径，每一步都是必经之路。只有脚踏实地的干事，才能作出成绩。
          </p>
        </div> */}
      </div>
      <div className="end"></div>
    </div>
  )
}

export default NewsInheriteStories
