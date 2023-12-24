import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Header from './components/Header';
// import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Skills />
      <Education/>
    </div>
  );
}

export default App;
