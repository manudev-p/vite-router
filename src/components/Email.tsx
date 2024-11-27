import './_email.scss'
import { Link, useLocation } from 'react-router-dom'

const EMAIL = 'emailto:coso@coso.com'

const Email = () => {
  const location = useLocation()
  return (
    <div className="email">
      <Link to={EMAIL} state={{ from: location }} className="email-link">
        {EMAIL}
      </Link>
    </div>
  )
}

export default Email
