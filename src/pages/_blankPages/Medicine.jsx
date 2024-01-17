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
      <div className="container1 border-b-4 border-yellow border-dashed ">
        <div className="navigat"></div>
        <div className="main">
          <div className="content1">
            <div className="Text">
              <p>传统医药是中国重要的非物质文化遗产之一，它在维系人们的生命当中发挥着重要的作用。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统医药1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统医药2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统医药3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>针灸</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统医药4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统医药5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                针灸是我国古代劳动人民创造的一种独特的医疗方法，有着悠久的历史。
                几千年来，人们利用金属针具或艾炷、艾卷，在人体特定的部位进针施灸，用以治疗疾病，解除病痛，
                并由此创立了独具特色的人体经络腧穴理论，成为中国医学的一枝奇葩，在世界上享有盛誉。
              </p>
              <p>
                针灸由“针”和“灸”构成，是中医学的重要组成部分之一，其内容包括针灸理论、腧穴、针灸技术以及相关器具，
                在形成、应用和发展的过程中，具有鲜明的中华民族文化与地域特征，是基于中华民族文化和科学传统产生的宝贵遗产。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 border-b-4 border-yellow border-dashed ">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统医药是中国重要的非物质文化遗产之一，它在维系人们的生命当中发挥着重要的作用。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统医药1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统医药2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统医药3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>藏医药</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统医药6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统医药7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                藏医药浴法，藏语称“泷沐”，是藏族人民以土、水、火、风、空“五源”生命观和隆、赤巴、培根“三因”健康观及疾病观为指导，
                通过沐浴天然温泉或药物煮熬的水汁或蒸汽，调节身心平衡，实现生命健康和疾病防治的传统知识和实践。
                该遗产项目既体现相关社区民众通过沐浴防病、疗疾的民间经验，
                也是以《四部医典》为代表的传统藏医理论在当代健康实践中的继承和发展。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统医药是中国重要的非物质文化遗产之一，它在维系人们的生命当中发挥着重要的作用。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统医药1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统医药2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统医药3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>中药炮制技术</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统医药8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统医药9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                中药炮制技术，中国传统医药制备或提取手段之一，由中国中医科学院、中国中药协会申报，国家级非物质文化遗产之一。
              </p>
              <p>
                中药炮制是指在中医理论的指导下，按中医用药要求将中药材加工成中药饮片的传统方法和技术，
                古时又称“炮炙”、“修事”、“修治”。药物经炮制后，不仅可以提高药效、降低药物的毒副作用，
                而且方便存储，是中医临床用药的必备工序。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
