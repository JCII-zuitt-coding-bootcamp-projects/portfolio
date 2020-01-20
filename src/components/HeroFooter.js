import React from 'react';
import {Container , Tabs , Hero} from 'react-bulma-components'
const HeroFooter = (props) => {


	function changePage(page){
		props.setComponentToShow(page)
	}

	return (
		<Hero.Footer color="Link">
			<Tabs
		      type="toggle-rounded"
		      align="centered"
		      fullwidth
		    >

		      <Tabs.Tab 
		      		active={ props.shown == "landing" }
		      		onClick={ ()=>{ changePage('landing') } }
		      >
		        Landing
		      </Tabs.Tab>
		      <Tabs.Tab 
		      		active={ props.shown == "about" } 
		      		onClick={ ()=>{ changePage('about') } }
		      >
		        About
		      </Tabs.Tab>
		      <Tabs.Tab 
		      		active={ props.shown == "projects" }
		      		onClick={ ()=>{ changePage('projects') } }
		      >
		        Project
		      </Tabs.Tab>
		      <Tabs.Tab 
		      		active={ props.shown == "contact" }
		      		onClick={ ()=>{ changePage('contact') } }
		      >
		        Contact
		      </Tabs.Tab>
		    </Tabs>
		</Hero.Footer>

		);

}


export default HeroFooter;
