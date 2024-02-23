import React from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.scss';
import {Animate} from 'react-simple-animate'
import { FaLinkedin, FaGithub, FaInstagram  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Home =() => {
  const navigate = useNavigate();


  const handleNavigateToContactMePage = () => {
      navigate('/contact')
  }
  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello I'm Ranit
          <br/>
          Full Stack Web Developer
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateY(550px)'
      }}
      end={{
        transform: 'translatex(0px)'
      }}

      >
        <div className='home__contact-me'>
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
        <div className='home__social-icons'>
            <a href='https://www.linkedin.com/in/ranit-bag-78b3ba252/' target='_blank' rel=''>
              <FaLinkedin size={40}/>
            </a>
            <a href='https://github.com/vrk0ranit' target='_blank' rel=''>
              <FaGithub size={40} />
            </a>
            <a href='https://twitter.com/Bag11Ranit' target='_blank' rel=''>
              <FaXTwitter size={40} />
            </a>
            <a href='https://www.instagram.com/rony.7943/' target='_blank' rel=''>
              <FaInstagram size={40} />
            </a>
          </div>
      </Animate>
    </section>
  )
}

export default Home