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
          className="main "
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统戏剧是中国各族人民共同创造的综合性表演艺术。中国的戏曲剧种丰富，历史悠久。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统戏剧1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统戏剧2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统戏剧3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>皮影戏</p>
            </div>
            <div className="photos1">
              <div className="photo1 mt-[130px]">
                <img src="/_blankImg/传统戏剧4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统戏剧5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                皮影戏俗称人头戏、影子戏，又称羊皮戏、驴皮影、影子戏、灯影戏、土影戏， 有的地区叫“皮猴戏”、“纸影戏”等，
                是用灯光照射兽皮或纸版雕刻成的人物剪影以表演故事的戏剧。
                表演时，艺人们在白色幕布后面，一边操纵戏曲人物，一边用当地流行的曲调唱述故事，
                同时配以打击乐器和弦乐，有浓厚的乡土气息。
                在河南、山西，陕西农村，这种拙朴的汉族民间艺术形式很受人们的欢迎，
                堪称当今影视艺术的鼻祖，是中国出现最早的戏曲剧种之一。
                在过去电影、电视等等媒体尚未发达的年代，皮影戏曾是十分受欢迎的民间娱乐活动之一。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 border-b-4 border-yellow border-dashed">
        <div
          className="main "
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统戏剧是中国各族人民共同创造的综合性表演艺术。中国的戏曲剧种丰富，历史悠久。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统戏剧1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统戏剧2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统戏剧3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>京剧</p>
            </div>
            <div className="photos1">
              <div className="photo1 mt-[130px]">
                <img src="/_blankImg/传统戏剧6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统戏剧7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1 mt-[200px]">
              <p>
                京剧作为中国传统文化的一部分，具有丰富的文化价值。
                它传承着中国的历史、价值观和文学传统，反映了中国社会的变迁和发展。
                同时，京剧也为观众提供了机会，了解中国的文化、历史和传统故事。
              </p>
              <p>
                京剧的表演技巧和艺术风格在国际上也备受欢迎，
                吸引了众多外国观众和艺术家。京剧的表演技艺和美学价值对于戏剧和表演艺术领域具有深远的影响。
                它展示了中国文化的独特之处，为跨文化交流和理解提供了平台。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <div
          className="main "
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统戏剧是中国各族人民共同创造的综合性表演艺术。中国的戏曲剧种丰富，历史悠久。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统戏剧1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统戏剧2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统戏剧3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>昆曲</p>
            </div>
            <div className="photos1">
              <div className="photo1 mt-[130px]">
                <img src="/_blankImg/传统戏剧8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统戏剧9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1 mt-[200px]">
              <p>
                {' '}
                昆曲是中国戏曲的剧种之一，发源于元末明初的苏州府昆山县，故有此名。
                明嘉靖至清乾隆之时，崑曲风靡全国，特别为士大夫所钟爱。除文人外，商人对崑曲的掷资是推动崑曲发展的重要因素。
                除办家班外，唱堂会及上戏园看戏等均是商人的娱乐活动之一。昆曲的角色行当以生、旦、净、末、丑五种为主，其中以生旦唱曲为中心，唱腔华丽婉转，表演细腻，配合管弦及打击乐的伴奏，
                成为精致的艺术典范。由于崑曲影响后世诸多剧种，故此又被称为“百戏之祖”。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
