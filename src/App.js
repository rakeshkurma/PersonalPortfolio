import logo from './logo.svg';
import './App.css';
import Profile from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import {Routes,Route,Link,NavLink} from 'react-router-dom'
function App() {
  return (
    <div className="App">



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Rakesh Kurma</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink className="nav-link active rounded-5" to="">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link rounded-5" to="skills">Skills</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link rounded-5" to="projects">Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link rounded-5" to="contactme">contact Me</NavLink>
      </li>
{/*       
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>




      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap" rel="stylesheet"></link>
      {/* <Profile/>
      <Skills />
      <Projects /> */}
      <Routes>
        <Route path='' element={<Profile/>}></Route>
        <Route path='/skills' id='ski' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contactme' element={<Contact/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
