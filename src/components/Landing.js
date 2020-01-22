import React from 'react';

import { Container, Heading } from 'react-bulma-components'

const Landing = () => {

	return (
            <Container className="has-text-centered" >
              <Heading size={1} className="heading-text">
                Jose Clet II
              </Heading>
              <Heading size={4} subtitle>
                Web Developer Portfolio
              </Heading>

            </Container>
          );

}


export default Landing;