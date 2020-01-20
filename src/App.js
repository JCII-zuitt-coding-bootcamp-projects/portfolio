import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*Bulma css*/
import 'react-bulma-components/dist/react-bulma-components.min.css';

/*Bulma components*/
import { Hero } from 'react-bulma-components';

/*Mount Components..*/
import About from './components/About'
import Contact from './components/Contact'
import HeroFooter from './components/HeroFooter'
import Project from './components/Project'
import Landing from './components/Landing'

function App() {

  const [ whichComponentToShow , setComponentToShow ] = useState("landing")
  let toRender = null;

  switch(whichComponentToShow){
    case 'about':
        toRender = <About />
    break;

    case 'contact':
        toRender = <Contact/>
    break;

    case 'projects':
        toRender = <Project/>
    break;

    case 'landing':
        toRender = <Landing />
    break;
  }


  return (
        <Hero color="info" size="fullheight">
            <Hero.Body>
              { toRender }
            </Hero.Body>
            <HeroFooter shown={whichComponentToShow}
                        setComponentToShow={setComponentToShow}
            />

        </Hero>
      );

  
}

export default App;
