import React from 'react';
import './extracurriculars.css';
import Header from "../Videos/header"

const Extracurriculars = () => {
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
        <Header title="extracurriculars" />
        <br />

        <p>Hi, I'm Rishaan </p>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p>test</p>


      </div>
    </div>
  )
}

export default Extracurriculars;