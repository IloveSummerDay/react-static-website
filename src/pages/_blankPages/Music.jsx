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
              <p>
                传统音乐是各族人民在长期社会生活过程中，
                集体创造出来的一种广泛流传于民间和上层社会、深受人们喜爱的传统的音乐艺术表现形式。
              </p>
            </div>
            <div className="photos mt-[90px]">
              <div className="photo">
                <img src="/_blankImg/传统音乐1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统音乐2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统音乐3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>黄梅戏</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统音乐4.png" />
              </div>
              <div className="photo1 mt-[273px]">
                <img src="/_blankImg/传统音乐5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p className=" ">黄梅戏节奏轻快，唱腔明亮，旋律简单易上口，《天仙配》就是黄梅戏中非常经典的曲目。</p>
              <p className=" ">黄梅戏是从采茶戏开始，融合了京剧、山歌、茶歌等音乐，形成了现在这种独特的风格。</p>
              <p className=" ">
                {' '}
                而黄梅戏中非常关键的唱腔，被分为了花腔、彩腔、主调三个腔系。而花腔这个唱法更是一些国宝级音乐家的独门技艺，不少现代音乐中融入这种传统的音乐唱腔也并不违和。
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
            <div
              className="Text"
              style={{ height: 'auto' }}
            >
              <p>
                传统音乐是各族人民在长期社会生活过程中，
                集体创造出来的一种广泛流传于民间和上层社会、深受人们喜爱的传统的音乐艺术表现形式。
              </p>
            </div>
            <div className="photos mt-[90px]">
              <div className="photo">
                <img src="/_blankImg/传统音乐1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统音乐2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统音乐3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>西安鼓乐</p>
            </div>
            <div className="photos1">
              <div className="photo1 m-[273px]">
                <img src="/_blankImg/传统音乐6.png" />
              </div>
              <div className="photo1 h-[273px]">
                <img src="/_blankImg/传统音乐7.png" />
              </div>
              <div className="photo1 h-[273px]">
                <img src="/_blankImg/传统音乐8.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                在中国古代，音、乐有别，《礼记；乐记》中载：“凡音之起，由人心生也。人心之动，
                物使之然也，感於物而动，故形於声。声相应，故生变，变成方，谓之音。比音而乐之，及干戚 羽旄，谓之乐”。
                后浑称“音乐”，指用有组织的乐音表达人们的思想感情、反映社会生活的一种艺术。
              </p>
              <p>
                《十面埋伏》是我国传统器乐作品中大型琵琶武曲的优秀代表作。在传统琵琶曲中，文曲一般旋律抒情优美，
                节奏轻缓，技巧多用左手推拉吟揉手法，善于描绘优美的自然景色或表达内心细腻的情感。而武曲则结构精致绵密，
                旋律层次分明，情绪激烈雄壮，节奏复杂多变，多用右手力度较大的演奏技巧，擅长于表现强烈的气氛和情绪。
                因而，琵琶曲《十面埋伏》气势雄伟激昂，风格旖旎壮美，艺术形象生动鲜明，是古典音乐的瑰宝。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 ">
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
                传统音乐是各族人民在长期社会生活过程中，
                集体创造出来的一种广泛流传于民间和上层社会、深受人们喜爱的传统的音乐艺术表现形式。
              </p>
            </div>
            <div className="photos mt-[90px]">
              <div className="photo">
                <img src="/_blankImg/传统音乐1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统音乐2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统音乐3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="title">
              <p>西安鼓乐</p>
            </div>
            <div className="photos1">
              <div className="photo1 mt-[273px]">
                <img src="/_blankImg/传统音乐9.png" />
              </div>
              <div className="photo1 mt-[273px]">
                <img src="/_blankImg/传统音乐10.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                西安鼓乐，也称长安古乐。是千百年来流传在西安(古长安) 及周边地区的民间大型鼓乐脱胎于唐代燕乐，
                后融于宫廷音乐，并逐渐流入民间的西安鼓乐，在经过大批文化工作者的挖掘、抢救、保护之后，
                经历了艰辛而漫长的申报过程，一跃成为世界级非物质文化遗产西安鼓乐，是迄今为止在中国境内发现并保存最完整的大型民间乐种之一，
                脱胎于唐代燕乐，后融于宫廷音乐，安史之乱期间随宫廷乐师的流亡而流入民间。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
