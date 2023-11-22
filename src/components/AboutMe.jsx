import React from 'react';
import Avatar from '../img/avataaars.png';

const AboutMe = () => {
  return (
    <div className='about-container' id='aboutme'>
      <div className='about-inner'>
        <div className='about-title'>
          <p>Hi, my name is Iskender Garajayev</p>
          <p>I'm Front-end Developer</p>
        </div>
        <div className='about-img'>
          <img src={Avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
