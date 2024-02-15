import './videos.css';
import React from 'react';
import VidCard from "./card"
import Header from "./header"

const Videos = () => {
    return(
      <div className='wrapper'>
          <Header title="lol"/>
  
          <br/>
        <div className='videos'>
        <VidCard index="0" />
        <VidCard index="1" />
        </div>
        
        <br/><br/>

        <div className='videos'>
        <VidCard index="2" />
        <VidCard index="3" />
        </div>
        
        <br/><br/>
        
        <div className='videos'>
        <VidCard index="4" />
        <VidCard index="5" />
        </div>
        <br/><br/>

        <div className='CardArea'>
        <div className='ParentCard'>

        </div>
        </div>
      </div>
    )
  }

export default Videos;