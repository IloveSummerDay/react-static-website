import { useEffect } from 'react'

function NewsInheriteStories() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = '/css/十类非遗.css' // 替换为你的 CSS 文件路径
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])
  return (
    <>
      <div className="container1 border-b-4 border-yellow border-dashed">
        <div className="navigat"></div>
        <div className="main">
          <div className="content1">
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>民间文学是人民大众口头创作、世代口耳相传的语言艺术。如：史诗、故事、神话、传说、谚语等。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/民间文学1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民间文学2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民间文学3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>格萨尔王传</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/民间文学4.png" />
              </div>
              <div className="photo1 h-[273px]">
                <img src="/_blankImg/民间文学5.png" />
              </div>
              <div className="photo1 h-[232px]">
                <img src="/_blankImg/民间文学6.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                作为迄今为止人类所拥有的篇幅最长、内容浩瀚的活态史诗，《格萨（斯）尔》是世界文化宝库中的一颗璀璨明珠。
              </p>
              <p>
                {' '}
                《格萨（斯）尔》是在青藏高原和蒙古草原传唱了千年的说唱体长篇英雄史诗，被称为世界上最长的活态史诗，与《江格尔》《玛纳斯》并称“我国少数民族三大英雄史诗”。这一由藏、蒙古、土等多民族共享的口头史诗，既是民族文化多样性的熔炉，又是多民族民间文化可持续发展的见证。
              </p>
              <p>
                《格萨尔王传》百部汉译工程，拟从现有的300多部格萨尔故事中遴选出最为经典、传颂最为广泛的作品100部，组织藏、汉语翻译专家及作者共同协作，将其翻译为汉文作品出版，以国家通用语言呈现这一震撼人心的伟大史诗。
              </p>
            </div>
          </div>
        </div>
        <div className="end"></div>
      </div>

      <div className="container1 border-b-4 border-yellow border-dashed">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>民间文学是人民大众口头创作、世代口耳相传的语言艺术。如：史诗、故事、神话、传说、谚语等。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/民间文学1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民间文学2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民间文学3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>玛纳斯</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/民间文学7.png" />
              </div>
              <div className="photo1 h-[273px]">
                <img src="/_blankImg/民间文学8.png" />
              </div>
              <div className="photo1  h-[232px]">
                <img src="/_blankImg/民间文学9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                作为中国少数民族三大英雄史诗之一的《玛纳斯》，
                堪称“柯尔克孜族的百科全书”。《玛纳斯》是一部什么样的史诗？何以在新疆传唱千年历久弥新？
                中国社会科学院民族文学研究所研究员阿地里·居玛吐尔地近日在乌鲁木齐就此接受中新社“东西问”专访。
              </p>
              <p>
                {' '}
                《玛纳斯》史诗无论是对人生礼仪、草原山区风光、戈壁荒野的描述，
                还是对征战、婚礼、庆典、狩猎、赛马等场景的描述，都达到了口头文学叙事艺术的巅峰，
                把柯尔克孜族民众古代生活的方方面面巧妙融入口头叙事当中，生动勾勒出古代柯尔克孜族民众社会生活的民俗画卷，
                并通过感人的故事情节启迪后人、教育后代，在千百年的传唱中历久弥新。
              </p>
            </div>
          </div>
        </div>
        <div className="end"></div>
      </div>

      <div className="container1">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>民间文学是人民大众口头创作、世代口耳相传的语言艺术。如：史诗、故事、神话、传说、谚语等。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/民间文学1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民间文学2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民间文学3.png" />
              </div>
            </div>
          </div>
          <div className="content4">
            <div className="title">
              <p>江格尔</p>
            </div>
            <div className="content5">
              <p className=" mt-[88px] mb-[50px]">
                在一座飘着奶茶芳香的蒙古包里，一位手拿蒙古族传统乐器陶布舒尔的老人，
                在琴声伴奏中用低沉浑厚的歌喉缓缓吟唱。从江格尔呱呱坠地，
                到他带领勇士战胜魔王，建设宝木巴乐园，老人的说唱时而铿锵，时而从容。
                围坐在老人身边的男女老幼，全然投入老人所吟诵的史诗海洋，他们时而因英雄的遭遇低声哭泣，
                时而因英雄的胜利高声喝彩……这是新疆阿勒泰草原上传唱史诗《江格尔》的情景，也是千百年来在这里重复上演的情景。
              </p>
              <div className="part_photo ">
                <img src="/_blankImg/民间文学10.png" />
              </div>
              <p className="mt-[50px]">
                蒙古族著名英雄史诗《江格尔》，像是发源于阿尔泰山的一条河流，从遥远的古代奔流而下，
                世代滋润着当地蒙古族儿女的心灵。
                史诗《江格尔》叙述了以江格尔为首的12名雄狮大将和数千名勇士为保卫宝木巴家乡，
                同邪恶势力进行艰苦斗争并取得胜利的故事，表现了蒙古族人民对美好生活的向往，
                充满了英雄主义和理想主义色彩。
              </p>
              <p>
                多数学者认为，《江格尔》最早产生于13世纪。 《江格尔》以丰富的社会、历史、文化内容和杰出的艺术成就，
                在蒙古族社会发展史、思想史、文化史、文学史上占有重要地位，
                与《格萨尔》《玛纳斯》并称“中国少数民族三大史诗”。
              </p>
              <p>
                现场即兴说唱与互动，构成了口头史诗最为动人的特点。
                在《江格尔》长期流传的过程中，说唱艺人在游唱中不断加工、润色和创新，
                使这部史诗的内容逐渐丰富、篇幅不断增加，迄今，国内外已经收集到的共有60多部，
                长达10万行左右。活态的传承和表演，承载着蒙古族对自然的认知、对世界的探求、对人生的理解，
                是一个民族历史记忆、经验情感、诗性智慧、文化传统的集大成。
              </p>
            </div>
          </div>
        </div>
        <div className="end"></div>
      </div>
    </>
  )
}

export default NewsInheriteStories
