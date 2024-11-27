import './_link.scss'
import { Link, useLocation } from 'react-router-dom'

const LinkC = ({ href, text }: { href: string; text: string }) => {
  const location = useLocation()

  return (
    <Link to={href} state={{ from: location }} className="link" target="_blank">
      {text}
    </Link>
  )
}

export default LinkC
