import { useEffect } from 'react'

export default function Conferences3() {
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
          <h1>“新媒体与非物质文化遗产传承创新”学术论坛于中央民族大学举办</h1>
        </div>
        <div className="small_title">
          <p>中央民族大学新闻与传播学院 2023-08-29 19:12 发表于北京</p>
        </div>
        <div className="content">
          <p className=" mt-0">
            8月26日，“新媒体与非物质文化遗产传承创新”学术论坛在中央民族大学海淀校区举办。
            长期以来，非物质文化遗产的保护、传播和传承工作，是党和国家文化事业建设的重心。
            论坛旨在汇聚跨学科专家学者，就新媒体时代非物质文化遗产的传播和传承等问题进行深入探讨和交流，
            共同推动优秀传统文化在新媒体时代的赓续传承与创新传播。
            来自清华大学、北京大学、厦门大学、大连理工大学、中央民族大学、北京外国语大学、北京交通大学、中国传媒大学
            等多所高校的新闻传播学、民族学、民俗学、人类学、社会学、马克思主义哲学等多个学科专业的专家学者围绕论坛主题展开研讨。
          </p>
        </div>
        <div className="part_photo2">
          <div className="photo8"></div>
          <div className="photo9"></div>
        </div>
        <div className="content">
          <p className=" mt-0">
            本次论坛由中央民族大学主办， 中央民族大学新闻与传播学院、中央民族大学新媒体研究中心承办，《
            中央民族大学学报（哲学社会科学版）》、《新闻界》、《民族学刊》《青年记者》提供学术支持。
            论坛共收到参会论文95篇，经过专家遴选，共产生25篇会议宣读论文和4篇书面交流论文。
          </p>
        </div>
        <div className="content">
          <p className=" mt-0">
            论坛召集人、中央民族大学新媒体研究中心主任范小青教授，
            长期以来带领团队围绕新媒体时代非物质文化遗产的传承创新问题展开持续研究，
            团队已经获得国家社科基金、北京市社科基金等各级各类科研立项，
            科研成果发表在新闻传播学、民族学等学科权威期刊， 一批论文被“人大报刊复印资料”转载。
            未来学院将进一步建设和完善科研团队，力求产生高质量、标志性新媒体与非物质文化遗产研究成果。
          </p>
        </div>
        <div className="part_photo2">
          <div className="photo10"></div>
          <div className="photo11"></div>
        </div>
      </div>
      <div className="end"></div>
    </div>
  )
}
