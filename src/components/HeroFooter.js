import React from 'react';
import {Container , Tabs , Hero} from 'react-bulma-components'
const HeroFooter = (props) => {


	function changePageHandler(page){
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
		      		onClick={ ()=>{ changePageHandler('landing') } }
		      >
		        Landing
		      </Tabs.Tab>
		      <Tabs.Tab 
		      		active={ props.shown == "about" } 
		      		onClick={ ()=>{ changePageHandler('about') } }
		      >
		        About
		      </Tabs.Tab>
		      <Tabs.Tab 
		      		active={ props.shown == "projects" }
		      		onClick={ ()=>{ changePageHandler('projects') } }
		      >
		        Project
		      </Tabs.Tab>
		      <Tabs.Tab 
		      		active={ props.shown == "contact" }
		      		onClick={ ()=>{ changePageHandler('contact') } }
		      >
		        Contact
		      </Tabs.Tab>
		    </Tabs>
		</Hero.Footer>

		);

}


export default HeroFooter;
