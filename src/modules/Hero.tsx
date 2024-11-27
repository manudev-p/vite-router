import Button from '../components/Button'
import { Link } from 'react-router-dom'
import './_hero.scss'
import Logo from '../components/Logo'

const HERO_BUTTON_LINK = 'https://coso.com'
const HERO_BUTTON_TEXT = 'Check out my course'

const HERO_NAME = 'Manny'
const HERO_INTRO = 'I craft things for web.'
const HERO_CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "

const HERO_CONTENT_LINK_TEXT = 'lorem Ipsum!'
const HERO_CONTENT_LINK_PATH = 'coso.com'

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title"> Hi My Name is</h1>
      <h2 className="hero-title-large">{HERO_NAME}</h2>
      <h3 className="hero-title-large hero-title-sub">{HERO_INTRO}</h3>
      <p className="hero-text">
        {HERO_CONTENT}
        <Link to={HERO_CONTENT_LINK_PATH} target="_blank" className="link">
          {HERO_CONTENT_LINK_TEXT}
        </Link>
      </p>
      <div className="hero-button">
        <Button text={HERO_BUTTON_TEXT} link={HERO_BUTTON_LINK}></Button>
      </div>
    </div>
  )
}

export default Hero
