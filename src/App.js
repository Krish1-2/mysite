import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
// import Achivements from './pages/achivements/achivements';
import Projects from './pages/projects/projects';
import Contact from  './pages/contacts/contact';
import Education from  './pages/education/education';
import Navbar from './Navbar/index';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route  path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/achivements' element={<Achivements />} /> */}
          <Route path='/projects' element={<Projects />} />
          <Route path='/education' element={<Education />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
