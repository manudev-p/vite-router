import './_aboutPage.scss'

import Email from '../components/Email'
import SocialIcons from '../components/SocialIcons'
import Loader from '../components/Loader'

import Hero from '../modules/Hero'
import { useState } from 'react'
import Navbar from '../modules/Navbar'
import Experience from '../modules/Experience'
import Projects from '../modules/Projects'
import Contact from '../modules/Contact'
import Footer from '../modules/Footer'
import About from '../modules/About'

const AboutPage = () => {
  // throw new Error()
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </>
  )
}

export default AboutPage

export const ErrorBoundary = () => {
  return <h3>Some Error Boundary</h3>
}
