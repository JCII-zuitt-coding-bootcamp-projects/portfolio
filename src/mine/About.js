import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Container , Heading , Columns} from 'react-bulma-components';

const About = ()=>{

	return (

		<Hero.Body>
		    <Container>
		    	<Columns>
		    		<Columns.Column>
					    <Heading>
					        Web Developer Portfolio
					    </Heading>
					    <Heading subtitle  className="animated zoomIn">
					         Hi! I'm Jose Clet II
					         <br />
					         I'm a full stack web developer. Feel free to browse my portfolio to know more about my projects and skills.
					         <br />
					         Have fun! 
					    </Heading>

				    </Columns.Column>

				    <Columns.Column>
				        <p className="bd-notification is-success">First Column</p>
				    </Columns.Column>
		    	</Columns>
		    </Container>	
		</Hero.Body>

		);
}


export default About;
