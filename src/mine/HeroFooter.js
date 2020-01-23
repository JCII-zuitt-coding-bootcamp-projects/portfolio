import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Container , Navbar } from 'react-bulma-components';

const HeroFooter = (props)=>{

	let [menuShown ,setMenuShown] = useState(false);

	return (

			<Hero.Footer>
			    <nav className="tabs is-boxed is-fullwidth">
			      <div className="container">
			        <ul className="has-background-dark" style={{ opacity: 0.9 }}>
			          <li 
			          	className={props.pageShown == 'about' ? 'is-active' : null}
			          	onClick={ ()=> props.setPageShown('about') }>
			            <a>
			            	<i className="material-icons">account_circle</i> &nbsp;
			            	About
			            </a>
			          </li>
			          <li 
			          	className={props.pageShown == 'projects' ? 'is-active' : null}
			          	onClick={ ()=> props.setPageShown('projects') }>
			          	<a>
			            	<i className="material-icons">star</i> &nbsp;
			            	Projects
			            </a>
			          </li>
			          <li 
			          	className={props.pageShown == 'contact' ? 'is-active' : null}
			          	onClick={ ()=> props.setPageShown('contact') }>
			          	<a>
			            	<i className="material-icons">message</i> &nbsp;
			            	Contact
			            </a>
			          </li>
			        </ul>
			      </div>
			    </nav>
			  </Hero.Footer>

		);
}


export default HeroFooter;
