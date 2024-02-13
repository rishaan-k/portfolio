import './header.css';
import React from 'react';

const Header = (props) => {
    return(
      <div className='headerwrapper'>
          <br/><br/>
          <div className='VideoHeader'>
            <div className='VideoText'>
            <div className='OuterText'>
                {props.title} {props.title} {props.title} {props.title} {props.title} {props.title} {props.title}
            </div>
              <div className='CenterText'>
                &nbsp;{props.title}&nbsp;
              </div>
              <div className='OuterText'>
              {props.title} {props.title} {props.title} {props.title} {props.title} {props.title} {props.title}
              </div>
            </div>
          </div>
        
        </div>
    )
  }

export default Header;
