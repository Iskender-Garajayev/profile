import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;
