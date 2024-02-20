
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/Home/Index';
import About from './containers/About/Index';
import Resume from './containers/Resume/Index';
import Skills from './containers/Skills/Index';
import Portfolio from './containers/Portfolio/Index';
import Contact from './containers/Contact/Index';
import Navbar from './components/navBar/Index';

function App() {
  return (
    <div className="App">


      <Navbar/>



      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
