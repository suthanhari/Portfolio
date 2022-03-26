import { Fade } from 'react-reveal';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Proj from './components/proj';
import Skill from './components/skill';

function App() {
  return (
    <>

      <nav className='topbar' id="topbar">
        <Navbar />
      </nav>


      <main>

        <Home />

        <Fade left >
          <About />
        </Fade>

        <Skill />

        <Fade left >
          <Proj />
        </Fade>

        <Contact />

      </main>
    </>
  );
}

export default App;
