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
            <div className="Text ">
              <p>传统美术是指民间社会与人们日常生活紧密相关的传统造型技艺。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统美术1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统美术2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统美术3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>中国书法文化</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统美术4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统美术5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                中国书法艺术的形成、发展与汉文字的产生与演进存在着密不可分的连带关系。那么究竟什么是“书法”呢？
                我们可以从它的性质、美学特征、源泉、独特的表现手法方面去理解。书法是以汉字为基础、用毛笔书写的、具有四维特征的抽象符号艺术，
                它体现了万事万物的“对立统一”这个基本规律又反映了人作为主体的精神、气质、学识和修养。
              </p>
              <p>
                中国五千年璀璨的文明及无与伦比的丰富文字记载都已为世人所认可，
                在这一博大精深的历史长河中，中国的书画艺术以其独特的艺术形式和艺术语言再现了这一历时性的嬗变过程。
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
              <p>传统美术是指民间社会与人们日常生活紧密相关的传统造型技艺。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统美术1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统美术2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统美术3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>苗画</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统美术6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统美术7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p> 苗画，湖南省保靖县民间传统美术，国家级非物质文化遗产之一。</p>
              <p>
                苗画是在传统单色绣花样稿的基础上发展起来的独立画种。苗族刺绣原先采用剪纸为绣样，至清代末期，
                一位精通绘画的苗族人王正义把白色的线描改成彩绘，成为一种单纯的布底绘画。
                画面上常见的形象有龙、凤、花、草、鱼、虾、虫、鸟、竹、木等，通过采用写实与抽象、夸张与变形、自由与严谨相结合的表现手法，
                呈现出一种非常独特的审美价值和古朴原始而又热情奔放的浪漫风格。
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
              <p>传统美术是指民间社会与人们日常生活紧密相关的传统造型技艺。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统美术1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统美术2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统美术3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>杨柳青木版年画</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统美术8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统美术9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                天津杨柳青木版年画是中国优秀的民间木版年画之一，生产于十七世纪初叶的天津西郊杨柳青镇，故以产地得名。
                杨柳青年画经过历代民间艺术家的辛勤劳动，形成以木版套印与手工彩绘相结合为主要特征的地方艺术形式，
                杨柳青年画题材广泛、布局丰满匀称、格调幸福喜庆，
                富有音乐般的旋律和沉郁的生活气息，因而具有独特的艺术魅力，三百多年来，一直为广大人民喜闻乐见。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
