import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have a strong foundation in modern web development, focusing on building responsive, performant, and user-friendly applications. My experience includes developing scalable front-end interfaces, designing robust back-end systems, and integrating APIs to deliver seamless digital experiences.
          </p>
          <p>
            My skill set spans full-stack web development, cloud-based deployment, and DevOps best practices. I work with modern frameworks and tools to ensure clean code, maintainability, and high performance. I’m committed to continuous learning and staying up to date with evolving web technologies to solve complex problems efficiently.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
