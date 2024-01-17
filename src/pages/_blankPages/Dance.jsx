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
              <p>传统舞蹈是以人的肢体语言为载体来表达着中华各民族的生存方式、历史文化心态、风俗习惯和民族性格。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统舞蹈1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统舞蹈2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统舞蹈3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>田东瑶族金锣舞</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈4.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈5.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                金锣舞的舞蹈动作大多来源于瑶民的生产生活，主要有“抬腿击锣”、“靠步点锣”、“双槌过头”、“双槌背击”、“急转点锣”等，
                舞者以男子居多，人数不限，以偶数为宜。每年农历腊月三十至二月初二，瑶寨里人们击锣起舞，金锣既是舞蹈的伴奏乐器，
                又是舞者的道具，锣点节奏与舞蹈动作紧密配合，让人感受到了生命的张力和艺术的美。
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
              <p>传统舞蹈是以人的肢体语言为载体来表达着中华各民族的生存方式、历史文化心态、风俗习惯和民族性格。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统舞蹈1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统舞蹈2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统舞蹈3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>锅庄舞</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈6.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈7.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈8.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                锅庄舞是随着藏民族生产生活的发展而丰富完善的。由于对自然界的种种现象迷惑不解，
                原始社会的先民们产生了种种迷信和宗教的形态，如巫师与巫术，拜物教与图腾。
                这种宗教信仰渗透了先民们的生产生活， 也融合到了民间歌舞艺术里。远古西藏的六大氏族均为崇拜图腾的氏族。
              </p>
              <p>
                《西藏王臣记》中写道：“上部阿里部分是大象和野兽区；中部卫藏部分是野兽和猿猴区；
                下部多康部分是猿猴和罗刹区”。图腾偶像的树立是你中有我，我中有你的人神合一的思想。
                源于这种思想方法的基础，模仿图腾形态动作的舞蹈便产生了。
                摹拟飞禽走兽而舞，是人神合一，氏族神秘互渗的思想方法再现。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 border-b-4 ">
        <div
          className="main"
          style={{ marginTop: 0 }}
        >
          <div className="content1">
            <div className="Text">
              <p>传统舞蹈是以人的肢体语言为载体来表达着中华各民族的生存方式、历史文化心态、风俗习惯和民族性格。</p>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/_blankImg/传统舞蹈1.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统舞蹈2.png" />
              </div>
              <div className="photo">
                <img src="/_blankImg/传统舞蹈3.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div
              className="title"
              style={{ width: '100%' }}
            >
              <p>安塞腰鼓</p>
            </div>
            <div className="photos1">
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈9.png" />
              </div>
              <div className="photo1">
                <img src="/_blankImg/传统舞蹈10.png" />
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="Text1">
              <p>
                {' '}
                腰鼓是陕北各地广泛流传的一种传统鼓舞形式，尤其在安塞、横山、米脂等地最为盛行。
                安塞腰鼓的产生，与其地理环境、历史渊源和民风习俗密切相关。安塞位于陕西延安北部，
                历史上就是军事重镇，素有“上郡咽喉”之称，为早先抵御北方游牧民族之要塞之一。
                随着时间的流逝，腰鼓从军事用途逐渐发展成为当地民众祈求神灵、祝愿丰收、欢度春节时的一种民俗性舞蹈
                ，从而使腰鼓具有更大的群众性，但在击鼓的风格和表演上，依然保留着某些秦汉将士的勃勃英姿。
                总之，安塞腰鼓不仅源于古代战场，同时也与民间祭祀仪式相伴而生。
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
