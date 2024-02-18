import React from 'react';
import './skills.css';
import Header from "../Videos/header"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import frameworks from "../../frameworks.png";
import ds from "../../ds.png";
import langs from "../../langs.png";

const Skills = () => {
  function handleHomeScroll() {
    var myElement = document.getElementById('tile1');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div className='Main'>

      <div className='imgpage'>
        <Header title="skills" />
        <br /><br/>
        <div className='skillsCardSpace'>
          <div className='skillsCard'>
            <Card>
            <CardMedia className='skillscardimage'
                component="img"
                draggable="false"
                image={langs}
                alt="Languages"
              />
              <CardContent>
                <p className='skillsCardText'>
                  <ul className='dsList'>
                  <li>Java</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  </ul>
                  <ul className='dsList'>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>Bash</li>
                  <li>Git</li>
                  </ul>
                  </p>
              </CardContent>
            </Card>
          </div>
          <div className='skillsCard'>
            <Card>
            <CardMedia className='skillscardimage'
                component="img"
                draggable="false"
                image={frameworks}
                alt="Frameworks"
              />
              <CardContent>
              <p className='skillsCardText'>
                  <ul className='dsList'>
                  <li>ReactJS</li>
                  <li>MySQL</li>
                  <li>Selenium</li>
                  <li>JavaFX</li>
                  </ul>
                  </p>
              </CardContent>
            </Card>
          </div>
          <div className='skillsCard'>
            <Card>
            <CardMedia className='skillscardimage'
                component="img"
                draggable="false"
                image={ds}
                alt="Design Software"
              />
              <CardContent>
              <p className='skillsCardText'>
                  <ul className='dsList'>
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe After Effects</li>
                  <li>Blender</li>
                  <li>Adobe Lightroom</li>
                  </ul>
                  <ul className='dsList'>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Audition</li>
                  <li>Cinema4D</li>
                  <li>Adobe Illustrator</li>
                  </ul>
                  </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;