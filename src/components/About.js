import React from 'react';

import { Container, Heading } from 'react-bulma-components'

const About = () => {

	return (
		<Container className="has-text-centered ">
			
			<Heading size={2}>
				<h1 className="heading-text has-text-black">
					Web Development is our passion
				</h1>
			</Heading>
			<Heading size="6" subtitle>
				We are a multidisciplanary dev team, specializing in mobile product design, web development, branding and illustration
			</Heading>
		</Container>

		);

}


export default About;
