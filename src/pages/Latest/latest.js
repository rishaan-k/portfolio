import React from 'react';
import './latest.css';
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import { IconContext } from "react-icons";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link as RLink
  } from "react-router-dom";


function handleScroll() {
    var myElement = document.getElementById('about_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
        top: topPos ,
        left: 0, 
      behavior: 'smooth',
    });
  }

const Latest = () => {
    return(
        
        <div className='FrontPage'>
        <a onClick={handleScroll}>
        <div className='gradient'>
        <div className="page-elements">
        <div className='HeaderBox'>
            <div className='Logo'>
                <div className='outeroutertwotext'>
                    rishaan<br/>
                    rishaan<br/>
                </div>
                <div className='outertwotext'>
                    rishaan<br/>
                    rishaan<br/>
                </div>
                <div className='innertwotext'>
                    rishaan<br/>
                    rishaan<br/>
                </div>
                <div className='centertext'>rishaan<br/></div>
                <div className='innertwotext'>
                    rishaan<br/>
                    rishaan<br/>
                </div>
                <div className='outertwotext'>
                    rishaan<br/>
                    rishaan<br/>
                </div>
                <div className='outeroutertwotext'>
                    rishaan<br/>
                    rishaan<br/>
                </div>
            </div> 
            <div className='buttonspace'>
                <IconContext.Provider value={{ color: "#FDE400", size: "3em" }}>
                    <IoIosArrowDropdownCircle className='icon'/>
                </IconContext.Provider>
            </div>
            <div className='welcome'>
                <p align="right" className='text'>

                Full Stack Developer &<br/>
                Machine Learning Enthusiast
                </p>
            </div>
        </div>  
        </div>
      </div>
      </a>
    </div>
    )
}

export default Latest;
        