import './header.css';
import React from 'react';

const Header = (props) => {
  function handleScroll() {
    var myElement = document.getElementById('about_tile');
    var topPos = myElement.offsetTop;

    window.scrollTo({
      top: topPos,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className='headerwrapper'>
      <br />
      <div className='VideoHeader'>
        <div className='VideoText'>
          <div className='OuterText'>
            {props.title} {props.title} {props.title} {props.title} {props.title} {props.title} {props.title}
          </div>
          <div className='CenterText' onClick={handleScroll}>
            &nbsp;<u>{props.title}</u>&nbsp;
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
