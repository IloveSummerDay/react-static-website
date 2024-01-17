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
      <div className="container1  border-b-4 border-yellow border-dashed ">
        <div className="navigat"></div>
        <div className="main">
          <div className="content1">
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>
                民俗指一个国家或民族中广大民众所创造、享用和传承的生活文化。包括信仰习俗、传统节日、服饰习俗、饮食习俗、居住习俗等。
              </p>
            </div>
            <div className="photos mt-[120px">
              <div className="photo">
                <img src="/_blankImg/民俗1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民俗2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民俗3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>中国剪纸</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/民俗4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/民俗5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                剪纸的起源可以追溯到汉朝。传说汉武帝时期，一位宫女剪下了一个花样美丽的人物形象，
                由此开创了剪纸艺术。剪纸在历史的长河中得到了不断的发展和传承。
              </p>
              <p>
                随着时代的变迁，剪纸的传承也经历了不少波折。在文化大革命期间，许多文化遗产被摧毁或流失，剪纸也不例外。
                然而，随着改革开放的深入，人们开始重新关注传统文化，剪纸也逐渐得到了重视和保护。
                目前，剪纸已被列入联合国教科文组织的人类非物质文化遗产名录，成为中华文化的重要代表之一。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container1  border-b-4 border-yellow border-dashed ">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>
                民俗指一个国家或民族中广大民众所创造、享用和传承的生活文化。包括信仰习俗、传统节日、服饰习俗、饮食习俗、居住习俗等。
              </p>
            </div>
            <div className="photos mt-[120px]">
              <div className="photo">
                <img src="/_blankImg/民俗1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民俗2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民俗3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>泥塑</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/民俗6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/民俗7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                泥塑是一门千年传承的非遗技艺，也是一种具有极高艺术价值和审美意义的文化瑰宝。
                一、泥塑的历史渊源与传承泥塑，又称泥雕、泥塑艺术，起源于新石器时代，至今已有数千年的历史。
                早期的泥塑以表现生活场景、神话故事和民间信仰为主， 通过简单的泥料塑造出生动的形象。
                随着历史的推移，泥塑逐渐发展壮大，逐步形成了各地独具特色的泥塑艺术风格。
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
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>
                民俗指一个国家或民族中广大民众所创造、享用和传承的生活文化。包括信仰习俗、传统节日、服饰习俗、饮食习俗、居住习俗等。
              </p>
            </div>
            <div className="photos">
              <div className="photo mt-[120px]">
                <img src="/_blankImg/民俗1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民俗2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/民俗3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>火把节</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/民俗8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/民俗9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>火把节（彝族火把节），流行于云南、贵州、四川等彝族地区的传统节日，国家级非物质文化遗产之一。</p>
              <p>
                火把节的起源与人们对火的崇拜有关，其目的是期望用火驱虫除害，保护庄稼生长。火把节期间，
                各村寨以干松木和松明子扎成大火把竖立寨中，各家门前竖起小火把，入夜点燃，村寨一片通明；
                同时人们手持小型火把绕行田间、住宅一周，将火把、松明子插于田间地角。青年男女在寨中大火把周围弹唱、跳舞，彻夜不息。
                节日期间，还有赛马、斗牛、射箭、摔跤、拔河、荡秋千等娱乐活动，并开设贸易集市。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
