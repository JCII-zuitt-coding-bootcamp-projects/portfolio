import React, { useState } from 'react';

/*Bulma css*/
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './components/Animate.css';
import "./App.css";


/*Bulma components*/
import { Hero } from 'react-bulma-components';

/*Mount Own Components..*/

import HeroHead from './components/HeroHead'
// import HeroFooter from './components/HeroFooter'

import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Showcase from './components/Showcase'




function App() {

  const [ pageShown , setPageShown ] = useState("about")
  let toRender = null;

  switch(pageShown){
    case 'landing':
        toRender = <Landing />
    break;

    case 'about':
        toRender = <About/>
    break;

    case 'projects':
        toRender = <Projects/>
    break;

    case 'contact':
        toRender = <Contact />
    break;

    case 'showcase':
        toRender = <Showcase />
    break;

    default:

    break;
  }

  return (
        
        <Hero color="dark" size="fullheight">
    		  <HeroHead
    			  pageShown={pageShown}
    			  setPageShown={setPageShown}
    		  />
    		  { toRender }
    		  
          {
            // <HeroFooter
            //   pageShown={pageShown}
            //   setPageShown={setPageShown}
            // />
          }
    		</Hero>
    );

  
}

export default App;
