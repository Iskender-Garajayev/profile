import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMeHeader from './components/pages/AboutMeHeader';
import Home from './components/Home';
import SkillsHeader from './components/pages/SkillsHeader';
import EducationHeader from './components/pages/EducationHeader';
import ProjectsHeader from './components/pages/ProjectsHeader';
import ContactHeader from './components/pages/ContactHeader';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/skills' element={<SkillsHeader />} />
          <Route path='/projects' element={<ProjectsHeader />} />
          <Route path='/about' element={<AboutMeHeader />} />
          <Route path='/education' element={<EducationHeader />} />
          <Route path='/contacts' element={<ContactHeader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
