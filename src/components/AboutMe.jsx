import React from 'react';
import Avatar from '../img/avataaars.png';

const AboutMe = () => {
  return (
    <div className='about-container' id='aboutme'>
      <div className='about-inner'>
        <div className='about-title'>
          <p>Hi, my name is Iskender Garajayev</p>
        </div>
        <div className='about-img'>
          <img src={Avatar} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
