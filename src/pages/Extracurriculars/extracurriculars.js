import React from 'react';
import './extracurriculars.css';
import Header from "../Videos/header"
import alt from '../../alt.png'
import wsum from '../../wsum.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const Extracurriculars = () => {
  function handleHomeScroll() {
    var myElement = document.getElementById('tile1');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className='Main'>
      

        <div className='imgpage'>
          <Header title="extracurriculars" />
          <br />
          <div className='ECIntro'>
          <p className='ECintroText'>These are different student organizations and projects that I am part of! They encompass most of my interests outside of Tech! </p>
          </div>
          <br />
          <div className='ECCardSpace'>
          <div className='ECCard'>
            <a href='https://altmagazine.org' target='_blank' className='eclink'>

              <Card>
                <CardMedia className='cardimage'
                  component="img"
                  draggable="false"
                  image={alt}
                  alt="ALT Magazine"
                />
                <CardContent>
                  <p className='ECHeader'>ALT Magazine - Video Director</p>
                  <p className='cardText'>
                    <ul>
                      <li>
                        ALT Magazine is a fashion magazine aiming to deliver underrepresented groups' voices on the UW-Madison campus.
                      </li>
                      <br />
                      <li>
                        Led a team of over 40 creatives to release magazine issues and projects on topics that cover the cultural identities of students through different artistic mediums.
                      </li>

                    </ul>
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className='ECCard'>
            <a href='https://wsum.org' target='_blank' className='eclink'>
              <Card>
                <CardMedia className='cardimage'
                  component="img"
                  draggable="false"
                  image={wsum}
                  alt="WSUM 91.7FM"
                />
                <CardContent>
                  <p className='ECHeader'>WSUM 91.7FM - Radio Show Host</p>
                  <p className='cardText'>
                    <ul>
                      <li>
                        WSUM is the award-winning University of Wisconsin-Madison student-run community radio station that averages over 5,000 monthly listeners.
                      </li>
                      <br />
                      <li>
                        Hosts a weekly radio show that frequently has guests for interviews on diverse topics.
                      </li>

                    </ul>
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extracurriculars;