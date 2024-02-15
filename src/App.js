import './App.css';
import Videos from "./pages/Videos/videos"
import About from "./pages/About/about"
import Footer from "./pages/Footer/footer"
import Latest from './pages/Latest/latest';
import Projects from "./pages/Projects/projects"
import Skills from "./pages/Skills/skills"
import Extracurriculars from "./pages/Extracurriculars/extracurriculars"



window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {

  return (
    <div>
      <section className='tile' id="home_tile">
        <Latest />
      </section>
      <section className='tile' id='about_tile'>
        <About />
      </section>
      <section className='tile' id="projects_tile">
        <Projects />
      </section>


      <section className='tile' id="skills_tile">
        <Skills />
      </section>

      <section className='tile' id="extracurriculars_tile">
      <Extracurriculars />
      </section>
      <section className='tile' id='contact_tile'>
        <Footer />
      </section>

    </div>
  )

  /*(
    <div className='wrapper'>

      <Router>
      <br/>
      <div className='Header'>
      
        <div className='HeaderBox'>
          <div className='Logo'>
            <RLink to="/" className='link'>rishaan</RLink>
          </div>
          <br/><br/>
          <div className='index'>
            <ul>
              <div>
                <li className='navitems'>
                  <RLink to="/" className='link'>Home</RLink>
                </li>
                <li className='navitems'>
                  <RLink to="/videos" className='link'>Videos</RLink>
                </li>
                <li className='navitems'>
                  <RLink to="/about" className='link'>About</RLink>
                </li>
              </div>
            </ul>
            
          </div>
        </div>
      </div>
      
    <Switch>
      <Route path="/" element={<Home/>} />
      <Route path="/videos" element={<Videos/>} />
      <Route path="/about" element={<About/>} />
    </Switch>
    </Router>
    <br/><br/><br/>
    <div className='Footer'>
      <div className='FooterBox'>
        <div className='FooterElements'>
          
          <div>
            <b>Contact:</b> 
          </div>

          <div className='mailtext'>
            <a href="mailto:rishaan.business@gmail.com" className='mail'>rishaan.business@gmail.com</a>
          </div>

          <div className='TinyLinks'>
          <a href="https://www.youtube.com/Rishaan" target="_blank"><img class = "imglogo" src={youtube}/></a>
          <a href="https://www.twitch.tv/rishaan" target="_blank"><img class = "imglogo" src={twitch}/></a>
          <a href="https://instagram.com/rishaanlmao" target="_blank"><img class = "imglogo" src={instagram}/></a>
          <a href="https://twitter.com/rishaanlmao" target="_blank"><img class = "imglogo" src={twitter}/></a>
          <a href="https://discord.com/invite/eZbaeFm" target="_blank"><img class = "imglogo" src={discord}/></a>
          </div>
          
          <div className='Copyright'>© Rishaan 2022</div>
        
        </div>
      </div>
    </div>
    
    </div>
  );*/
}

export default App;
