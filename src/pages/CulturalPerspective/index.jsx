import CulturalPerspectiveNav from '../../components/CulturalPerspective/CulturalPerspectiveNav'
// import EchartSvg from '../../components/CulturalPerspective/EchartSvg'
import Experience from '../../components/CulturalPerspective/Experience'
export default function CulturalPerspective() {
  return (
    <>
      <div className=" h-[100vh] bg-[#D8D8D8] text-textColor">
        <CulturalPerspectiveNav />
        <div
          className=" text-[80px] absolute top-[10px] left-[50px] opacity-40"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', whiteSpace: 'nowrap' }}
        >
          文化视界
        </div>
        {/* <EchartSvg /> */}
        <Experience />
      </div>
    </>
  )
}
