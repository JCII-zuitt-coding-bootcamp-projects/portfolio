import React from 'react'

import { NavLink } from 'react-router-dom'

/*Bulma components*/
import { Hero  } from 'react-bulma-components';

const HeroFooter = (props)=>{

	// let [menuShown ,setMenuShown] = useState(false);

	return (

			<Hero.Footer>
			    <nav className="tabs is-boxed is-fullwidth">
			      <div className="container">
			        <ul className="has-background-dark" style={{ opacity: 0.9 }}>
			          <li 
			          	// className={props.pageShown == 'about' ? 'is-active' : null}
			          	// onClick={ ()=> props.setPageShown('about') }
						  >
			            <NavLink to='/about'>
			            	<i className="material-icons">account_circle</i> &nbsp;
			            	About
			            </NavLink>
			          </li>
			          <li 
			          	// className={props.pageShown == 'projects' ? 'is-active' : null}
			          	// onClick={ ()=> props.setPageShown('projects') }
						  >
			          	<NavLink to='/projects'>
			            	<i className="material-icons">star</i> &nbsp;
			            	Projects
			            </NavLink>
			          </li>
			          <li 
			          	// className={props.pageShown == 'contact' ? 'is-active' : null}
			          	// onClick={ ()=> props.setPageShown('contact') }
						  >
			          	<NavLink to='/constac'>
			            	<i className="material-icons">message</i> &nbsp;
			            	Contact
			            </NavLink>
			          </li>
			        </ul>
			      </div>
			    </nav>
			  </Hero.Footer>

		);
}


export default HeroFooter;
