import './_button.scss'
import { Link, useLocation } from 'react-router-dom'
interface ButtonProps {
  text: string
  link: string
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const location = useLocation()

  return (
    <Link to={link} state={{ from: location }} className="btn">
      {text}
    </Link>
  )
}

export default Button
