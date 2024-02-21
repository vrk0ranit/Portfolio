
import './App.scss';
import {Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/Home/Index';
import About from './containers/About/Index';
import Resume from './containers/Resume/Index';
import Skills from './containers/Skills/Index';
import Portfolio from './containers/Portfolio/Index';
import Contact from './containers/Contact/Index';
import Navbar from './components/navBar/Index';
import Part from './utils/particles';


function App() {
  const location = useLocation();
  console.log(location);

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {
        //  renderParticleJsInHomePage || (<Part/>)
      }
      
      {/* <Part/> */}
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
