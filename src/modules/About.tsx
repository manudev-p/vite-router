import { Fragment } from 'react'
// import Image from '/react.svg'
import LinkC from '../components/LinkC'
import './_about.scss'

import { Link } from 'react-router-dom'

interface Link {
  href: string
  text: string
}

interface Links {
  [key: string]: Link
}

const ABOUT_PARAGRAPH: string[] = [
  "Lorem Ipsum is simply dummy text {LINK1} of the printing and typesetting industry. {LINK2} Lorem Ipsum has been {LINK3} the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  "Lorem Ipsum is simply dummy text {LINK2} of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  "Lorem Ipsum is simply dummy text {LINK3} of the printing and typesetting industry. Lorem {LINK1} Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
]

const LINKS: Links = {
  LINK1: { href: 'coso1.com', text: 'link to coso1' },
  LINK2: { href: 'coso1.com', text: 'link to coso2' },
  LINK3: { href: 'coso1.com', text: 'link to coso3' }
}

const replaceLinks = (text: string, LINKS: Links): JSX.Element[] => {
  const regex = /\{LINK(\d+)\}/g
  const parts = text.split(regex)

  return parts.flatMap((part, index) => {
    if (index % 2 === 0) {
      return <Fragment key={index}>{part}</Fragment>
    } else {
      const linkNumber = part.match(/\d+/)![0]
      const link = LINKS[`LINK${linkNumber}`]
      return <LinkC key={index} href={link.href} text={link.text} />
    }
  })
}

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2> About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          {ABOUT_PARAGRAPH.map((paragraph, i) => (
            <p key={i} className="about-grid-info-text">
              {replaceLinks(paragraph, LINKS)}
            </p>
          ))}
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Kibana</li>
            <li className="about-grid-info-list-item">Css</li>
            <li className="about-grid-info-list-item">ElasticSearch</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            IMAGE
            {/* <Image alt="profile" fill sizes="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
