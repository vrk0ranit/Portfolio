import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import  PageHeaderContent from '../../components/pageHeaderContent/Index'
import { Animate } from 'react-simple-animate'
import './styles.scss';
import {FaDev , FaDatabase, FaNodeJs, FaNode} from 'react-icons/fa'
import Iframe from 'react-iframe'

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
    value: "Mednipur,West Bengal,India",
  },
];

const jobSummary = "Hey, I'm Ranit Bag, a second-year BCA student on a mission to make cool websites! Currently studying at Midnapore College(Autonomous), I'm learning MERN Stack web development since last 6 months along with my college study.I use HTML, CSS, and JavaScript and React to make websites look awesome and work smoothly.I'm not just a front-end guy; I'm also diving into the backend world with Node.js and Express.js ,MongoDb. It's like the engine behind the scenes that makes everything run.I'm also getting my hands dirty with Next.js to make websites load super fast.I'm not just about coding; I'm about solving problems. I love turning ideas into real.When I'm not coding, I'm exploring the latest tech trends, sharpening my skills, and hanging out in the developer community. Let's chat and maybe build something awesome together"

const googleMapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAGNRSoxSf6IOdYw4FpSr4Ey6bPJk81htw&q=22.425721,87.327698`;




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
    
   <Iframe
            url={googleMapEmbedUrl}
            width='20%'
            height='20%' // Set an appropriate height for the map
            id='mapIframe'
            className='mapIframeClassname'
            display='initial'
            position='absolute'
            frameBorder='0'
            allowFullScreen
          /> 
         
         
    </section>
  )
}

export default About