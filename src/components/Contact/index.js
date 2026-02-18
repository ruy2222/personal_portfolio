import { useEffect, useState } from 'react'
import { useRef } from 'react'

import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import { useNavigate } from "react-router-dom"
import { ClipLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const contactArray = 'Contact Me'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)

    const email = form.current.email.value
    const res = await verifyEmail(email)
    if (!res) {
      setLoading(false)
      toast.error('Please enter a valid email address', {
        position: 'bottom-center',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
      return
    }

    let fullName = form.current.name.value
    let subject = form.current.subject.value
    let message = form.current.message.value

    let firstName = fullName.split(' ')[0]
    firstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()

    const templateParams = {
      firstname: firstName,
      name: fullName,
      subject: subject,
      message: message,
      email: email,
    }

    emailjs
      .send(
        process.env.REACT_APP_EMIAL_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message successfully sent!', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          const timeout = setTimeout(() => {
            form.current.reset()
            setLoading(false)
          }, 3800)

          return () => clearTimeout(timeout)
        },
        () => {
          setLoading(false)
          toast.error('Failed to send the message, please try again', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        }
      )
  }
  // const navigate = useNavigate();
  // const handleSubmit = async (email) => {
  //   email.preventDefault();
  //   let res = await fetch(
  //     `https://mailok-email-validation.p.rapidapi.com/verify?email=${email}`,
  //     {
  //       method: 'POST',
  //       body: FormData,
  //     }
  //   )
  //   navigate('/thank-you');
  //   // let data = await res.json()
  //   // return res.status === 200 && data.status === 'valid'
  // }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I’m open to new opportunities and collaborations! If you’re looking
            for someone who can bring fresh ideas and deliver impactful results,
            let’s get in touch!
          </p>

          <div className="contact-form">
            {/* <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button
                    type="submit"
                    className="flat-button"
                    disabled={loading}
                  >
                    {loading ? <ClipLoader color="#fff" size={20} /> : 'SEND'}
                  </button>
                </li>
              </ul>
              <ToastContainer />
            </form> */}

            <form
               action="https://public.herotofu.com/v1/df5a3e50-0c01-11f1-b8b0-610c8f909331"
                method="post"
                acceptCharset="UTF-8"

            >
              <ul>
                
                {/* Name + Email */}
                <li className = "half">
                  <input
                    name = "Name"
                    type = "text"
                    placeholder = "Name"
                    required
                  />
                  <input
                    name = "Email"
                    type = "email"
                    placeholder = "Email"
                    required
                  />
                </li>

                {/* Subject */}
                <li>
                  <input
                    name="Subject"
                    type="text"
                    placeholder="Subject"
                  />
                </li>

                {/* Message */}
                <li>
                  <textarea
                    name="Message"
                    placeholder="Message"
                  />
                </li>

                {/* Submit */}
                <li className="actions">
                  <button
                    type="submit"
                    className="flat-button"
                    disabled={loading}
                  >
                    {loading ? <ClipLoader color="#fff" size={20} /> : 'SEND'}
                  </button>
                </li>

                {/* Honeypot */}
                {/* <li
                  style={{
                    textIndent: "-99999px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    position: "absolute",
                  }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </li> */}
              </ul>
              <input
                  type="hidden"
                  name="_redirect"
                  value="http://localhost:3000/thank-you"
                />
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Eirc Chan
            <br />
            Vancouver, <br />
            British Columbia, <br />
            Canada
            <br />
          </div>
          <MapContainer center={[43.7060, -79.3987]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.7060, -79.3987]}>
              <Popup>
                Eric lives here, come over for a cup of coffee :{')'}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
