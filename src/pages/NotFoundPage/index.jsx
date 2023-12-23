import { useRouteError } from 'react-router-dom'

export default function NotFoundPage() {
  const error = useRouteError()
  console.error(error)

  return <div className=" text-center">Could not load reviews 😬</div>
}
