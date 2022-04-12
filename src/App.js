import { Fade } from 'react-reveal';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Proj from './components/proj';
import Skill from './components/skill';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
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


          <Routes>
            {/* <Route path='/project' element={<Redirect url="https://www.guvi.in/courses#" />} /> */}
            <Route path='/some-path' component={() => {
              window.location.href = 'https://www.guvi.in/courses#';
              return null;
            }} />
          </Routes>

        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
