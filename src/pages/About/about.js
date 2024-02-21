import React from 'react';
import './about.css';
import Header from "../Videos/header"
import Button from '@mui/material/Button'
import resume from '../../resume.pdf'
import Rishaan from '../../ye.png'

const About = () => {
  function handleHomeScroll() {
    var myElement = document.getElementById('home_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleProjectsScroll() {
    var myElement = document.getElementById('projects_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleSkillsScroll() {
    var myElement = document.getElementById('skills_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleExtracurricularScroll() {
    var myElement = document.getElementById('extracurriculars_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleContactScroll() {
    var myElement = document.getElementById('contact_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
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
          <p className='navBarItem' onClick={handleExtracurricularScroll}>Activities</p>
        </div>

        <div className='aboutInfoSpace'>
          <div className='aboutInfoPic' >
            <img className='rishaan_photo' src={Rishaan} />
          </div>
          <div className='aboutInfoTextSpace'>
            <div className='aboutInfoText'>
              <p>Hello, I'm Rishaan Kumar, a student that's pursuing a degree in Computer Science and Communication Arts on the Radio-TV-Film track at the University of Wisconsin-Madison. </p>
              <p>I'm interested in Software Engineering, Front-End Web Development and Design, Machine Learning and much more! I've made a couple of projects that use APIs in ReactJS (see below) to implement Web Based Applications.</p>
              <p>I'm also incredibly capitvated by media particularly film and music. I'm the Video Director for ALT Magazine on my campus, and I host a radio show every week on WSUM 91.7FM.</p>
              <p>Feel free to explore this website along with my resume and don't hestitate to reach to me on my LinkedIn or email!</p>
            </div>

            <div className='buttonsSpace'>
              <div className='buttonRow'>
                <div className='button'>
                  <a target='_blank' href={resume}>
                    <Button variant="contained" color='error'>
                      <p className='buttonText'>
                        Resume
                      </p>
                    </Button>
                  </a>
                </div>
                <div className='button'>
                  <Button variant="contained" color='error' onClick={handleContactScroll}>
                    <p className='buttonText'>
                      Contact
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <br /><br />

    </div >
  )
}

export default About;