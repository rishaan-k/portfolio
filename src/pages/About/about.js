import React from 'react';
import './about.css';
import Header from "../Videos/header"
import Button from '@mui/material/Button'
import resume from '../../resume.pdf'

const About = () => {
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
    <div className='About'>

      <div className='imgpage'>
        <Header title="welcome" />
        <br />
        <div className='navBar'>
          <p className='navBarItem' onClick={handleHomeScroll}>Home</p>
          <p className='navBarItem' onClick={handleProjectsScroll}>Projects</p>
          <p className='navBarItem' onClick={handleSkillsScroll}>Skills</p>
          <p className='navBarItem' onClick={handleExtracurricularScroll}>Extracurriculars</p>
        </div>

        <p>Hello, I'm Rishaan Kumar, a student that's pursuing a degree in Computer Science and Communication Arts on the Radio-TV-Film track at the University of Wisconsin-Madison </p>
        <a target='_blank' href={resume}>
        <Button variant="contained">Resume</Button>
        </a>
        <Button variant="contained" onClick={handleContactScroll}>Contact</Button>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p>test</p>


      </div>
    </div>
  )
}

export default About;