import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'Launchpad Technologies Pvt. Ltd.',
    companyUrl: 'https://www.golaunchpad.io//',
    position: 'SENIOR BACKEND DEVELOPER',
    duration: 'May 2022 – Oct 2025',
    location: 'Vancouver, Canada',
    achievements: [
      'Designed and maintained scalable microservices using Golang in a production environment.',
      'Developed REST and gRPC APIs with strong focus on performance and backward compatibility',
      'Implemented concurrency patterns (goroutines, channels, context) for asynchronous processing.',
    ]
  },
  {
    id: 2,
    company: 'Innovatech Solutions Inc.',
    companyUrl: 'https://www.innovatech-solutions.com/',
    position: 'GOLANG DEVELOPER',
    duration: 'Jun 2020 – Feb 2022',
    location: 'Vancouver, Canada',
    achievements: [
      'Designed database schemas and optimized queries for performance and scalability.',
      'Implemented authentication and authorization mechanisms for secure API access.',
      'Collaborated with cross-functional teams to deliver backend-driven features',
      'Assisted with Docker containerization and CI/CD pipeline integration.',
    ]
  },
  {
    id: 3,
    company: 'Hashthink Technologies',
    companyUrl: 'https://www.hashthink.com',
    position: 'BACKEND DEVELOPER',
    duration: 'Aug 2018 – Mar 2020',
    location: 'Toronto, Canada',
    achievements: [
      'Developed and maintained backend services using Node.js and TypeScript',
      'Built and optimized RESTful APIs for web and mobile applications.',
      'Collaborated with cross-functional teams to ensure smooth integration and deployment.',
      'Assisted in improving system performance and reliability through testing and monitoring.',
    ]
  },
  // {
  //   id: 4,
  //   company: 'Metarootz',
  //   companyUrl: 'https://www.metarootz.io/',
  //   position: 'Software Development Engineer — Contract',
  //   duration: 'December 2022 — February 2023',
  //   location: 'Dubai, UAE (Remote)',
  //   achievements: [
  //     'Developed a social media platform using Node.js/Express.js, Next.js, and MongoDB, scaled it to 10,000+ active users, and integrated WebSocket-based voice/video calling to boost user engagement and interaction.'
  //   ]
  // }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey spans across diverse industries and technologies, ranging from enterprise web platforms to modern digital applications. Each experience has strengthened my skills as a web developer and broadened my perspective in building reliable, scalable, and user-centered solutions.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
