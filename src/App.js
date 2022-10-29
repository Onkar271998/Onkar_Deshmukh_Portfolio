
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Courosel from './Pages/Corousel';

import Footer from './Pages/Footer';
import Gitstat from './Pages/Gitstat';
import Home from './Pages/Home';
import MobNav from './Pages/MobNav';

import Navbar from './Pages/Navbar';
import Skills from './Pages/Skills';


function App() {
  return (
    <div className="App">
      <Navbar/>
    
       <Home/>
     <About/>
     <Skills/>
<Courosel/>

  <Gitstat/> 
     <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
