import { useEffect } from 'react'

export default function Conferences2() {
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
        <div
          className="title"
          style={{ height: '120px' }}
        >
          <h1>非遗传承提供创新思路，人工智能引发教育变革——基础教育学院组织开展教师科研分享会</h1>
        </div>
        <div className="small_title">
          <p>包头市土默特右旗图书馆 2023-12-18 10:11 发表于内蒙古</p>
        </div>
        <div className="content">
          <p style={{ marginTop: 0 }}>
            为落实学校“强本升硕”的目标任务，加快推进我院科研工作，鼓励学院教师积极投身科研工作，
            增进教师之间的学术交流。2023年12月6日，
            基础教育学院特邀鲁艳威老师和王明理老师进行了一场内容丰富、生动有趣的科研分享会。
            此次会议由学院科研副院长白玉洁主持，学院三十余位教师参会。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo1"></div>
        </div>
        <div className="content">
          <p style={{ marginTop: 0 }}>
            鲁艳威老师带来了《非遗传承融入大学生创新创业大赛的路径研究》为主题的分享，
            指出非遗文化是历史文化的珍贵遗产，传承非遗文化有助于建立文化自信，
            为大学生创新创业提供新的思路。鲁老师以大学生创新创业文化节作为突破口，
            巧妙地将非遗传承与大学生创新创业大赛结合起来，寻求融合路径，
            并以自己指导学生的创新创业项目“鹿鸣话非遗”为例，
            从项目概述、产品介绍、项目进度、商业模式与组织结构、营销模式、团队成员、财务分析、引领教育等八个方面详细地介绍了传承非遗文化元素“泥叫叫”的多种路径，
            为我院教师指导大学生创新创业提供了新的思路。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo2"></div>
        </div>
        <div className="content">
          <p style={{ marginTop: 0 }}>
            王明理老师以《人工智能为教育带来的变革》为主题进行了分享。
            人工智能是信息化时代一项新兴技术，已经渗透到我们生活的方方面面，
            王老师介绍了人工智能对我们生活中的医疗健康、电商零售、餐饮服务、金融行业、治安安防、交通运输、教育行业等诸多行业产生的影响，其中对于教育行业的影响尤为显著。基于学生、教师以及校园需求，AI赋能学习、赋能教学、赋能管理，助力学生个性化学习、教师精准化教学以及校园智慧化管理。在如今智能化、数字化、信息化社会大背景下，身为教师的我们需把握其带来的机遇与挑战，
            不断提升自身的专业素养，把握好科研的方向。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo3"></div>
        </div>
        <div className="content">
          <p style={{ marginTop: 0 }}>
            会后，白玉洁副院长对本次活动进行了总结。
            她指出高校科研是提升学院教学质量的重要保证，是提高师资水平的重要途径，
            也是促进学生能力、智力等全面发展的重要手段。 坚持“以教育科研为先导，以科研课题研究为载体，
            以常规教学研究为基础，以课堂教学改革为突破口”的行为导向，组织开展研讨、学习、交流等活动，不断学习，有助于提升学院教师的科研能力，为学院的发展贡献力量。同时，白玉洁副院长介绍，后期还将围绕课题申报等问题，交流科研心得，提高课题申报数量和质量；定期开展校内外交流、读书会、研讨活动等，
            邀请教育领域内专家为教师进行科研项目的申报指导。
          </p>
        </div>
        <div className="part_photo">
          <div className="photo4"></div>
        </div>
      </div>
      <div className="end"></div>
    </div>
  )
}
