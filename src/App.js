import React from 'react';
import logo from './logo.svg';
import './App.css';

/*Mount Components..*/
import About from './components/About'
import Contact from './components/Contact'
import HeroFooter from './components/HeroFooter'
import Project from './components/Project'

function App() {
  return (
    <div className="App">
      {
        /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        */
      }
      <About />
      <Contact />
      <HeroFooter />
      <Project />
    </div>
  );
}

export default App;
