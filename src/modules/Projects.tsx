// import { useContext } from 'react'
import './_projects.scss'

import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import { Link } from 'react-router-dom'

import content from '../static/content/content.json'

// import { LangContext } from '@/pages'

const Projects = () => {
  //const lang: string = useContext(LangContext)

  const projects = { ...content.content.en.sections.projects }
  const projectsData = projects.work
  const title = projects.title
  const subTitle = projects.subTitle

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 }
        }}
      >
        <h2>{title}</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            // image,
            projectDescription,
            //projectLink,
            projectExternalLinks,
            projectName,
            projectTech
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 }
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    {/* <Image src={image} fill alt={projectName} quality={100} /> */}
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">{subTitle}</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech: string) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        to={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        to={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects
