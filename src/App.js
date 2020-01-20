import React from 'react';
import logo from './logo.svg';
import './App.css';

/*Bulma css*/
import 'react-bulma-components/dist/react-bulma-components.min.css';

/*Bulma components*/
import { Hero,Container,Heading } from 'react-bulma-components';

/*Mount Components..*/
import About from './components/About'
import Contact from './components/Contact'
import HeroFooter from './components/HeroFooter'
import Project from './components/Project'

function App() {
  return (
    <Hero color="info" size="fullheight">
        <Hero.Body >
          {/*<About />
                    
                    <HeroFooter />
                    <Project />*/}
          <Contact />
        </Hero.Body>
    </Hero>
  );
}

export default App;
