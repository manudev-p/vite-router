import { Link } from 'react-router-dom'
import './_socialIcons.scss'

import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi'

const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: <FiGithub />,
    link: 'https://github.com/manudev-p'
  },
  {
    name: 'Instagram',
    icon: <FiInstagram />,
    link: 'https://instagram.com/manudev-p'
  },
  {
    name: 'Youtube',
    icon: <FiYoutube />,
    link: 'https://instagram.com/manudev-p'
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin />,
    link: 'https://instagram.com/manudev-p'
  },
  {
    name: 'X',
    icon: <FiTwitter />,
    link: 'https://instagram.com/manudev-p'
  }
]

function SocialIcons() {
  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {SOCIAL_LINKS.map(({ name, icon, link }) => (
          <li className="social-icons-list-item" key={name}>
            <Link
              to={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialIcons
