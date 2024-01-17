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
      <div className="container1">
        <div className="navigat"></div>
        <div className="main">
          <div className="content1">
            <div className="Text">
              <p>传统技艺是指中华民族在长期劳作实践中，不断探索、总结、提高而形成的具有鲜明特色的手工技艺。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统技艺1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统技艺2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统技艺3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p style={{ fontSize: '2rem' }}>陶瓷烧制技艺</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统技艺4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统技艺5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>陶瓷烧制技艺，福建省龙岩市上杭县传统技艺，龙岩市市级非物质文化遗产之一。</p>
              <p>
                明朝初期，上杭县湖洋就有陶瓷制作的历史，素有“闽西陶瓷之乡”的称誉。
                明朝初期，厂址设在今寨背村迳背自然村的猴古湾。寨背陶瓷技术发达，主要表现在薄胎黑陶和白陶的制作上，
                白陶已采用高岭土作为原料。
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
              <p>传统技艺是指中华民族在长期劳作实践中，不断探索、总结、提高而形成的具有鲜明特色的手工技艺。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统技艺1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统技艺2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统技艺3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p style={{ fontSize: '2rem' }}>木结构建筑营造技艺</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统技艺6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统技艺7.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                中国传统木结构建筑营造技艺是以木材为主要建筑材料，以榫卯为木构件的主要结合方法，
                以模数制为尺度设计和加工生产手段的建筑营造技术体系。营造技艺以师徒之间言传身教的方式世代相传。
                这种营造技艺体系延承了7000多年，遍及中国全境，并传播到日本、韩国等东亚各国，是东方古代建筑技术的代表。
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
              <p>传统技艺是指中华民族在长期劳作实践中，不断探索、总结、提高而形成的具有鲜明特色的手工技艺。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统技艺1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统技艺2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统技艺3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p style={{ fontSize: '2rem' }}>中国蚕桑丝织技艺</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统技艺8.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统技艺9.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                蚕桑丝织是中华民族认同的文化标识，五千年来，它对中国历史作出了重大贡献，并通过丝绸之路对人类文明产生了深远影响。
                为更好地保存保护祖先留下的这些珍贵的文化遗产，浙江、江苏、四川等三省作为蚕桑生产的主产区和蚕桑丝织文化的保护地，
                三省文化行政部门联合行动，
                以中国蚕桑丝织技艺为项目由中国丝绸博物馆向联合国教科文组织申报人类口头与非物质文化遗产名录。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsInheriteStories
