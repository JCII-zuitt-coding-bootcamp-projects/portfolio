import React, {useState} from 'react'

import { NavLink } from "react-router-dom";

/*Bulma components*/
import { Hero , Container , Navbar } from 'react-bulma-components';

const HeroHead = (props)=>{

	let [menuShown ,setMenuShown] = useState(false);

	return (
    <Hero.Head>
      <Navbar className="is-fixed-top">
        <Container>
          <Navbar.Brand className="has-background-dark ">
            <a className="navbar-item">
              <h1 className="has-text-weight-bold">{"< JC-Dev / >"}</h1>
            </a>

            <Navbar.Burger
              data-target="navbarMenuHeroB"
              className={menuShown ? "is-active has-background-info" : null}
              onClick={() => {
                setMenuShown(!menuShown);
              }}
            >
              <i className="material-icons has-text-white">menu</i>
            </Navbar.Burger>
          </Navbar.Brand>
          <Navbar.Menu
            id="navbarMenuHeroB"
            className={menuShown ? "is-active" : null}
          >
            <div className="navbar-end">


              <NavLink to="/about" activeClassName="is-active" className="navbar-item" onClick={() =>  setMenuShown(!menuShown) }>
                  <i className="material-icons">account_circle</i>
                  &nbsp;&nbsp;About
              </NavLink>

              <NavLink to="/projects" activeClassName="is-active" className="navbar-item" onClick={() =>  setMenuShown(!menuShown) }>
                  <i className="material-icons">star</i>
                  &nbsp;&nbsp;Projects
              </NavLink>

              <NavLink to="/certificates" activeClassName="is-active" className="navbar-item" onClick={() =>  setMenuShown(!menuShown) }>
                  <i className="material-icons">verified</i>
                  &nbsp;&nbsp;Certificates
              </NavLink>

              <NavLink to="/play" activeClassName="is-active" className="navbar-item" onClick={() =>  setMenuShown(!menuShown) }>
                  <i className="material-icons">videogame_asset</i>
                  &nbsp;&nbsp;Play
              </NavLink>


              <NavLink to="/contact" activeClassName="is-active" className="navbar-item" onClick={() =>  setMenuShown(!menuShown) }>
                  <i className="material-icons">message</i>
                  &nbsp;&nbsp;Contact
              </NavLink>


            </div>
          </Navbar.Menu>
        </Container>
      </Navbar>
    </Hero.Head>
  );
}


export default HeroHead;
