import { useLoaderData } from 'react-router-dom'
export default function News() {
  const { id } = useLoaderData()
  return <div>News - {id}</div>
}
