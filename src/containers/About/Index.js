import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import  PageHeaderContent from '../../components/pageHeaderContent/Index'
import { Animate } from 'react-simple-animate'
import './styles.scss';
import {FaDev , FaDatabase, FaNodeJs, FaNode} from 'react-icons/fa'

const personalDetails = [
  {
    label: "Name",
    value: "Ranit Bag",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "ranitbag49@gmail.com",
  },
];

const jobSummary = 'Seasoned and independent Full Stack Developer with 1 year experience'

const About = () => {
  return (
    <section id='about' className='about'>
       < PageHeaderContent
        headerText = "About Me"
        icon={<BsInfoCircleFill size={40}/>}
       />
       <div className='about__content'>
        <div className='about__content__personalWrapper'>
        <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateX(-900px)'
      }}
      end={{
        transform: 'translatex(0px)'
      }}

      >
        <h3>Full Stack Developer</h3>
        <p>{jobSummary}</p>
      </Animate> 
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateX(500px)'
      }}
      end={{
        transform: 'translatex(0px)'
      }}

      >
      <h3 className='personalInformationHeaderText'>Personal Information</h3>
      <ul>
        {
          personalDetails.map((item,i) => (
             <li key={i}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
             </li>
          ))
        }
      </ul>
      </Animate>
    </div>
     <div className='about__content__servicesWrapper'>
     <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateX(600px)'
      }}
      end={{
        transform: 'translatex(0px)'
      }}

      >
      <div className='about__content__servicesWrapper__innerContent'>
      <div>
          <FaDev size={60} color='var(--yellow-theme-main-color)'/>
         </div>
         <div>
         <FaNodeJs size={60} color='var(--yellow-theme-main-color)'/>
         </div>
         <div><FaDatabase size={60} color='var(--yellow-theme-main-color)'/></div>
         <div><FaNode size={60} color='var(--yellow-theme-main-color)'/></div>
      </div>
       </Animate>
     </div>
     
       </div>
    </section>
  )
}

export default About