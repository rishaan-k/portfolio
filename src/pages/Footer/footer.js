import React from 'react';
import './footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  function handleHomeScroll() {
    var myElement = document.getElementById('home_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  function handleProjectsScroll() {
    var myElement = document.getElementById('projects_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  function handleAboutScroll() {
    var myElement = document.getElementById('about_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  function handleSkillsScroll() {
    var myElement = document.getElementById('skills_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  function handleExtracurricularScroll() {
    var myElement = document.getElementById('extracurriculars_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  function handleContactScroll() {
    var myElement = document.getElementById('contact_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div className='Footer'>
      <div className='FooterBox'>
        <div className='navBar'>
          <p className='navBarItem' onClick={handleAboutScroll}>About</p>
          <p className='navBarItem' onClick={handleProjectsScroll}>Projects</p>
          <p className='navBarItem' onClick={handleSkillsScroll}>Skills</p>
          <p className='navBarItem' onClick={handleExtracurricularScroll}>Activities</p>
        </div>
        <div className='FooterElements'>

          <div>
            <b>Contact:</b>
          </div>

          <div className='mailtext'>
            <a href="mailto:rakumar2@wisc.edu" className='mail'>rakumar2@wisc.edu</a>
          </div>

          <div className='TinyLinks'>
            <a href='https://www.linkedin.com/in/rishaan-kumar/' className='tinylinka'>
            <FaLinkedin size={45}/>
            </a>
            <a href='https://github.com/rishaan-k' className='tinylinka'>
            <FaGithub size={45}/>
            </a>
          </div>

          <div className='Copyright'>©2024</div>

        </div>
      </div>
    </div>
  )
}

export default Footer;