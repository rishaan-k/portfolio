import React from 'react';
import './projects.css';
import Header from "../Videos/header"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SocialTrack from '../../social_track.png'
import FocusMode from '../../focusmode.png'
import TrackTheSpot from '../../trackthespot.png'
import CovidOGrapher from '../../covid-o-grapher.png'

const Projects = () => {
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
        <Header title="projects" />
        <br />

        <br />
        <div className='projectCardSpace'>
          <div className='projectCard'>
            <Card>
              <CardMedia className='cardimage'
                component="img"
                draggable="false"
                image={TrackTheSpot}
                alt="TrackTheSpot"
              />
              <CardContent>
                <p className='cardText'>
                  <ul>
                    <li>
                      Developed a functional web application that tracks users' Spotify data to give them a report of their
                      top artists and songs during different time frames.
                    </li>
                    <br />
                    <li>
                      Integrated the <b>Spotify API in ReactJS</b> to authenticate account information and retrieve
                      personalized song and artist data before processing the information using <b>JSON parsing algorithms.</b>
                    </li>
                    <br />
                    <li>
                      Utilized OpenAI's ChatGPT API to give personalized recommendations by using the users’ recent
                      listening history as the data set for the LLM.
                    </li>
                  </ul>
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='projectCard'>
            <Card>
              <CardMedia className='cardimage'
                component="img"
                draggable="false"
                image={CovidOGrapher}
                alt="Covid-O-Grapher"
              />
              <CardContent>
                <p className='cardText'>
                  <ul>
                    <li>
                      Developed a functional web application that gives a live report of COVID-19 statistics in all countries of the world.
                    </li>
                    <br />
                    <li>
                      Implemented a front-end dashboard using <b>ReactJS, and the disease.sh API</b> to asynchronously retrieve data and
                      calculate statistics like New Cases, Total Cases and Total Deaths for each country.
                    </li>
                    <br />
                    <li>
                      Used <b>Charts.js</b> that let users view, interact and toggle the data visualizations of the calculated statistics.
                    </li>
                  </ul>
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='projectCard'>
            <Card>
              <CardMedia className='cardimage'
                component="img"
                draggable="false"
                image={SocialTrack}
                alt="social_track"
              />
              <CardContent>
              <p className='cardText'>
                  <ul>
                    <li>
                      Developed an application in <b>Java</b> that used graphs to store user info and their friends for a social media after <b>parsing through a DOT file.</b>
                    </li>
                    <br />
                    <li>
                      Implemented <b>Dijkstra's Algorithm</b> to find the shortest connection from any two members in the network.
                    </li>
                  </ul>
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='projectCard'>
            <Card >
              <CardMedia className='cardimage'
                component="img"
                draggable="false"
                image={FocusMode}
                alt="Focus Mode"
              />
              <CardContent>
                <p className='cardText'>
                  <ul>
                    <li>
                      Developed a Google Chrome Extension using <b>HTML, CSS and JavaScript</b> that prevents the user
                      from accessing websites that are often used to procrastinate work
                    </li>
                    <br />
                    <li>
                      Users would be blocked and redirected if they attempted to access a denylisted website.
                    </li>
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

export default Projects;