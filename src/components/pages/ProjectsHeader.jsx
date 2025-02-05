import React from 'react';
import '../styles/projects.css';
import { Link } from 'react-router-dom';
import Youtube from '../../img/YoutubeLone.jpg';
import Ecommerce from '../../img/e-commerce.png';
import Dashboard from '../../img/dashboard.png';
import Weather from '../../img/weather.png';

import Header from '../Header';

const ProjectsHeader = () => {
  return (
    <div className='projects-container'>
      <Header />
      <div className='inner-container'>
        <div className='item-box'>
          <div className='item-img'>
            <Link
              className='link'
              target='_blank'
              to='https://youtube-clone-theta-five.vercel.app'
            >
              <img src={Youtube} alt='Youtube Clone' />
            </Link>
          </div>

          <div className='item-title'></div>
        </div>

        <div className='item-box'>
          <div className='item-img'>
            <Link
              className='link'
              target='_blank'
              to='https://shop-app-i-g.vercel.app/'
            >
              <img src={Ecommerce} alt='Youtube Clone' />
            </Link>
          </div>

          <div className='item-title'></div>
        </div>

        <div className='item-box'>
          <div className='item-img'>
            <Link
              className='link'
              target='_blank'
              to='https://web-eta-flame-25.vercel.app/'
            >
              <img src={Dashboard} alt='Youtube Clone' />
            </Link>
          </div>

          <div className='item-title'></div>
        </div>

        <div className='item-box'>
          <div className='item-img'>
            <Link
              className='link'
              target='_blank'
              to='https://weather-app2222-theta.vercel.app/'
            >
              <img src={Weather} alt='Youtube Clone' />
            </Link>
          </div>

          <div className='item-title'></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
