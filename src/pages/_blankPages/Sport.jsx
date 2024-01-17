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
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统体育是数千年来中华民族健体强身，玩物适情文化生活不可或缺的部分，具有广泛的社会基础。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统体育1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统体育2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统体育3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>抖空竹</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统体育4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统体育5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                空竹，以竹木为材料制成，中空，因而得名，清代曾与空钟混称，俗称响葫芦，
                江南又称之为扯铃，以北京、天津所产的最为著名。空竹为圆盘状，中有木轴，以竹棍系线绳缠绕木轴拽拉抖动。
                空竹分为单轮（木轴一端为圆盘）和双轮（木轴两端各有一圆盘）两种。
                圆盘四周有哨口，以一个大哨口为低音孔，若干小哨口为高音孔，分为双响、四响、六响，直至三十六响。拽拉抖动空竹时，各哨同时发音，高亢雄浑，声入云表。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 border-b-4 border-yellow border-dashed">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统体育是数千年来中华民族健体强身，玩物适情文化生活不可或缺的部分，具有广泛的社会基础。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统体育1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统体育2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统体育3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>打陀螺</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统体育6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统体育7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                陀螺是中国传统民俗体育游戏，流传甚广。为木制的圆锥形，上大下尖。
                将尖头着地，以绳绕螺身，然后旋转放开鞭绳，使陀螺旋转；或用手直接旋转陀螺，待陀螺着地，以绳抽之，使之旋转。
                另有鸣声陀螺和菱形陀螺，以竹木制成中空圆筒，中间贯以旋轴。圆筒体开有狭长裂口，
                转动时由于气流作用能发声。菱形陀螺为两头小，中间大，以绳绕螺身，使着地旋转，顺势抽绳，使螺旋转。
              </p>
              <p>2021年5月24日，云南省申报的打陀螺经国务院批准列入第五批国家级非物质文化遗产代表性项目名录。</p>
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
              <p>传统体育是数千年来中华民族健体强身，玩物适情文化生活不可或缺的部分，具有广泛的社会基础。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统体育1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统体育2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统体育3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>高杆船技</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统体育8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统体育9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                高杆船技是桐乡市兼具水乡、蚕乡特色的传统民俗杂技项目，流传于桐乡青石、永秀一带，表演于一年一度的“双庙渚蚕花胜会”。
              </p>
              <p>
                “人在杆上翻、杆在船上立、船在河中行”是高竿船技的最大特色。该项目以一支较长的带稍毛竹，作为表演主杆，船中置一石臼为杆基，用三支较粗的毛竹，绑扎成三角支撑架。
                船由2只农用木船并排绑扎，船面铺有木板，组成独具水乡风情的水上表演台。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
