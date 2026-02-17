/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faGitAlt,
  faGolang,
  faJsSquare,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
           I am a web developer with over 7 years of professional experience building reliable and well-structured web applications. I have worked on a variety of web projects, guiding them from initial concept through development and deployment.
          </p>
          <p>
           I focus on writing clean, maintainable code and creating practical solutions that solve real business problems. I value clear communication, thoughtful problem-solving, and continuous learning to ensure the quality and long-term sustainability of my work.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
