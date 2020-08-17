import React, {useState} from 'react'

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
			          	<h1 className="has-text-weight-bold">{ '< JC-Dev / >' }</h1>
			          </a>


			          <Navbar.Burger data-target="navbarMenuHeroB"
			          	className={menuShown ? 'is-active has-background-info': null}
			          	onClick={()=>{
			          		setMenuShown(!menuShown);
			          	}}
			          	>
			            <i className="material-icons has-text-white">menu</i>
			          </Navbar.Burger>
			        </Navbar.Brand>
			        <Navbar.Menu id="navbarMenuHeroB" 
			        	className={menuShown ? 'is-active': null}
			        >
			          <div className="navbar-end">
			            <Navbar.Item
			               className={props.pageShown == 'about' ? 'is-active' : null}
			          	   onClick={ ()=> {
			          	   		props.setPageShown('about')
			          	   		setMenuShown(!menuShown);

			          	   }}
			            >
			              <i className="material-icons">account_circle</i>
			              &nbsp;&nbsp;About
			            </Navbar.Item>
			            <Navbar.Item
			               className={props.pageShown == 'projects' ? 'is-active' : null}
			          	   onClick={ ()=> {
			          	   		props.setPageShown('projects')
			          	   		setMenuShown(!menuShown);

			          	   }}
			            >
			              <i className="material-icons">star</i>
			              &nbsp;&nbsp;Projects
			            </Navbar.Item>
			            
			            <Navbar.Item
			               className={props.pageShown == 'contact' ? 'is-active' : null}
			          	   onClick={ ()=> {
			          	   		props.setPageShown('contact')
			          	   		setMenuShown(!menuShown);

			          	   }}
			            >
			              <i className="material-icons">message</i>
			              &nbsp;&nbsp;Contact
			            </Navbar.Item>

			          </div>
			        </Navbar.Menu>
			      </Container>
			    </Navbar>
			  </Hero.Head>

		);
}


export default HeroHead;
