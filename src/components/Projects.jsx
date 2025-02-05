import React from 'react';
import './styles/projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='inner-container'>
        <div className='item-box'>
          <div className='item-img'>
            <Link className='link' target="_blank" to='https://youtube-clone-theta-five.vercel.app'></Link>
          </div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
        <div className='item-box'>
          <div className='item-img'></div>

          <div className='item-title'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
