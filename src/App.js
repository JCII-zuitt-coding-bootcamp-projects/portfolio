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

// import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MatchingGame from './components/games/MatchingGame'

import { Route , Switch, Redirect } from "react-router-dom";




function App() {

  return (
    <Hero color="dark" size="fullheight">
      <HeroHead />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

        <Route path="/play" component={MatchingGame} />

        {/* <Redirect from="/all-courses" to="/courses" /> */}
        {/* fallback */}
        <Route component={About} />
      </Switch>
    </Hero>
  );

  
}

export default App;
