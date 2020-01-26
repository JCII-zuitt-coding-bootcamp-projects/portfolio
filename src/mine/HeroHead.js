import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Container , Navbar } from 'react-bulma-components';

const HeroHead = (props)=>{

	let [menuShown ,setMenuShown] = useState(false);

	return (

			<Hero.Head>
			    <Navbar>
			      <Container>
			        <Navbar.Brand className="has-background-dark">
			          <a className="navbar-item">
			          	<h1 className="has-text-weight-bold">{ '<LDev />' }</h1>
			          </a>
			          <Navbar.Burger data-target="navbarMenuHeroB"
			          	className={menuShown ? 'is-active has-background-info': null}
			          	onClick={()=>{
			          		setMenuShown(!menuShown);
			          	}}
			          	>
			            <span></span>
			            <span></span>
			            <span></span>
			          </Navbar.Burger>
			        </Navbar.Brand>
			        <Navbar.Menu id="navbarMenuHeroB" 
			        	className={menuShown ? 'is-active': null}
			        >
			          <div className="navbar-end">
			            <Navbar.Item
			               className={props.pageShown == 'landing' ? 'is-active' : null}
			          	   onClick={ ()=> {
			          	   		props.setPageShown('landing')
			          	   		setMenuShown(!menuShown);

			          	   }}
			            >
			              Home
			            </Navbar.Item>
			            <Navbar.Item
			               className={props.pageShown == 'showcase' ? 'is-active' : null}
			          	   onClick={ ()=> {
			          	   		props.setPageShown('showcase')
			          	   		setMenuShown(!menuShown);

			          	   }}
			            >
			              Showcase
			            </Navbar.Item>
			            <Navbar.Item>
			              Documentation
			            </Navbar.Item>
			          </div>
			        </Navbar.Menu>
			      </Container>
			    </Navbar>
			  </Hero.Head>

		);
}


export default HeroHead;
