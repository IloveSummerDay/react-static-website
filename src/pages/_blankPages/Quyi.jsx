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
      <div
        className="container1 border-b-4 border-yellow border-dashed"
        style={{ marginTop: 0 }}
      >
        <div className="navigat"></div>
        <div className="main">
          <div className="content1">
            <div className="Text mt-[120px]">
              <p>曲艺是以口头语言进行“说唱”叙述的表演艺术形式。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/曲艺1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/曲艺2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/曲艺3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>苏州评弹</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/曲艺4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/曲艺5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                苏州评弹是苏州评话和苏州弹词的总称，是采用吴语徒口讲说表演的传统曲艺说书戏剧形式。
                评话俗称“大书”，弹词俗称“小书”。它发源并流行于以苏州为中心的江苏东南部、浙江北部和上海等吴语方言区，大约形成于明末清初。
                苏州评话渊源于宋说话中之讲史。弹词渊源于宋代之小说及元明的词话、陶真等诗赞体说唱。
                关于苏州弹词的艺术形式有“优人百戏，击毬关朴。渔鼓弹词，声音鼎沸”的描述。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container1 border-b-4 border-yellow border-dashed"
        style={{ marginTop: 0 }}
      >
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text mt-[120px]">
              <p>曲艺是以口头语言进行“说唱”叙述的表演艺术形式。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/曲艺1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/曲艺2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/曲艺3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>西河大鼓</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/曲艺6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/曲艺7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                一人、一鼓，一把三弦，一把折扇，台上说书人，台下听书客，都在乡音浓郁、弦索悠扬的说唱中品评陶醉，
                又在风趣生动的故事中明辨是非。。
              </p>
              <p>
                这，就是发源于河间的西河大鼓。
                这种中国北方地区的鼓书暨鼓曲形式，普遍流行于河北境内并流传于周边河南、山东、北京、天津、内蒙古及东北地区，
                至今已有200余年的历史。其唱腔简洁苍劲，韵味独特，风格似说似唱，极富民间乡土气息。2006年经国务院批准，
                被列入第一批国家级非物质文化遗产名录。{' '}
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
            <div className="Text mt-[120px]">
              <p>曲艺是以口头语言进行“说唱”叙述的表演艺术形式。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/曲艺1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/曲艺2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/曲艺3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>河南坠子</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/曲艺8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/曲艺9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                河南坠子源于河南，由流行在河南和皖北的曲艺道情、莺歌柳、三弦书等结合形成的传统曲艺形式。约有一百多年历史。流行于河南、山东、安徽、天津、北京等地。因主要伴奏乐器为“坠子弦”（今称坠胡），
                且用河南语音演唱，故称之为河南坠子。
                演唱者一人，左手打檀木或枣木简板，边打边唱。也有两人对唱的，一人打简板，一人打单钹或书鼓。
              </p>
              <p> 2006年5月20日，该曲艺经国务院批准列入第一批国家级非物质文化遗产名录。 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
