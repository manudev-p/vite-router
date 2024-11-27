import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FiGitBranch } from 'react-icons/fi'
import './_footer.scss'

const FOOTER_DESIGN = 'Designed and Built by Manu Pirez.'
const FOOTER_REPOSTARS_URL = 'https://api.github.com/repos/manudev-p/portfolio'
const FOOTER_GIT_PROFILE = 'https://github.com/manudev-p'
const FOOTER_GIT_LABEL_ENABLE = false

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null
  })

  useEffect(() => {
    FOOTER_GIT_LABEL_ENABLE &&
      fetch(FOOTER_REPOSTARS_URL)
        .then(response => response.json())
        .then(json => {
          const { stargazers_count, forks_count } = json
          setGitHubInfo({
            stars: stargazers_count,
            forks: forks_count
          })
        })
        .catch(e => console.error(e))
  }, [])

  return (
    <footer>
      <Link to={FOOTER_GIT_PROFILE} target="_blank" className="footer-link">
        <span className="footer-info">{FOOTER_DESIGN}</span>
        {githubInfo && FOOTER_GIT_LABEL_ENABLE && (
          <div className="footer-git">
            <div className="footer-git-item">
              <FaRegStar className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.stars}</span>
            </div>
            <div className="footer-git-item">
              <FiGitBranch className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.forks}</span>
            </div>
          </div>
        )}
      </Link>
    </footer>
  )
}

export default Footer
