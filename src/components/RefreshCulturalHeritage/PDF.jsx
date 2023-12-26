import { useParams } from 'react-router-dom'

function Pdf() {
  const params = useParams()
  console.log(params.id)
  return (
    <iframe
      src={`/pdf/${params.id}.pdf`}
      width="100%"
      className=" h-[100vh]"
    ></iframe>
  )
}

export default Pdf
