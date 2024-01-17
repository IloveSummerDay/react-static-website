import { useEffect } from 'react'

export default function Ecommerce() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = '/css/电商.css' // 替换为你的 CSS 文件路径
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])
  return (
    <div className="container1">
      <div className="navigat"></div>
      <div className="main">
        <div className="title">
          <h1>数字时代里的传统匠心：电商与非物质文化遗产的传承</h1>
        </div>
        <div className="content">
          <p>
            传统工艺的传承需要面对市场变革， 而电商平台通过全球化的网络， 为传统手工匠人打开了更广阔的销售渠道。
            这不仅令传统工艺在国内外得以更好地传承，还让更多人认识和喜爱这些独具匠心的艺术品。
            电商平台提供了一个数字化的“传承之桥”，让非物质文化遗产在时代的激流中得以焕发新生。
          </p>
        </div>
        <div className="part1_photo">
          <div className="photo1"></div>
          <div className="photo2"></div>
          <div className="photo3"></div>
        </div>
        <div className="content">
          <p>
            而在电商平台上，不仅有传统手工艺品， 还有非物质文化遗产的数字化呈现。通过独特的展示方式，
            用户可以更加直观地了解传统技艺的独特之处。这种数字化的呈现形式，
            不仅为年轻一代提供了更加亲近非遗的方式，也为非物质文化的传承注入了新的活力。
          </p>
        </div>
        <div className="part2_photo">
          <div className="photo4"></div>
          <div className="photo5"></div>
        </div>
        <div className="content">
          <p>
            电商传承非遗，不仅是商品的销售，更是文化的传播。 在这个过程中，电商平台扮演着连接传统与现代的桥梁，
            使得非遗文化在数字时代得以传承，为传统工艺注入了新的生命力。
            让我们一同走进这个数字时代的传统匠心，共同见证非物质文化遗产的辉煌传承。
          </p>
        </div>
        <div className="part3_photo">
          <div className="photo6"></div>
        </div>
      </div>
    </div>
  )
}
