import React, { useState } from 'react';

/*Bulma css*/
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './mine/Animate.css';
import './App2.css';


/*Bulma components*/
import { Hero } from 'react-bulma-components';

/*Mount Own Components..*/

import HeroHead from './mine/HeroHead'
import HeroFooter from './mine/HeroFooter'

import Landing from './mine/Landing'
import About from './mine/About'
import Projects from './mine/Projects'
import Contact from './mine/Contact'
import Showcase from './mine/Showcase'



function App2() {

  const [ pageShown , setPageShown ] = useState("showcase")
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
  }

  return (
        
        <Hero color="dark" size="fullheight">
		  <HeroHead
			  pageShown={pageShown}
			  setPageShown={setPageShown}
		  />
		  { toRender }
		  <HeroFooter
			  pageShown={pageShown}
			  setPageShown={setPageShown}
		  />
		</Hero>
    );

  
}

export default App2;
