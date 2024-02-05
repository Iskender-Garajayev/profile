import React from 'react';
import Header from '../Header';

const EducationHeader = () => {
  return (
    <div className='education-container'>
      <Header />
      <div className='education-header'>
        <h2>education</h2>
      </div>
      <div className='education-inner'>
        <ul>
          <li>
            <h3>Belarusian State Medical University</h3>
            <p>General Medicin 2019</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationHeader;
