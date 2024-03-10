import React,{lazy} from 'react';
import './App.scss';
import {Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navBar/Index';
import Part from './utils/particles';

const Home = lazy(() => import('./containers/Home/Index'));
const About = lazy(() => import('./containers/About/Index'));
const Resume = lazy(() => import('./containers/Resume/Index'));
const Skills = lazy(() => import('./containers/Skills/Index'));
const Portfolio = lazy(() => import('./containers/Portfolio/Index'));
const Contact = lazy(() => import('./containers/Contact/Index'));

function App() {
  const location = useLocation();
  

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {
          renderParticleJsInHomePage && (<Part/>)
      }
      
      
      <Navbar/>


      <div className='App__main-page-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      
     
    </div>
  );
}

export default App;
