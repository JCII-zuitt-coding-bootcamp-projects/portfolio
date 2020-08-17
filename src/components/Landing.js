import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Container , Heading } from 'react-bulma-components';

const Landing = ()=>{

	let [menuShown ,setMenuShown] = useState(false);

	return (

		<Hero.Body>
		    <Container className="has-text-centered animated flip slower">
		      <Heading className="animated zoomIn is-size-1">
		        Jose Clet II
		      </Heading>
		      <Heading subtitle className="animated fadeInLeftBig faster">
		      	<i className="material-icons ">local_dining</i> &nbsp;
		        {'< Eat />'}
		      </Heading>
		      <Heading subtitle className="animated fadeInRightBig faster" style={{ animationDelay: '0.5s'}} >
		      	<i className="material-icons ">hotel</i> &nbsp;

		        {'< Sleep />'}
		      </Heading>
		      <Heading subtitle className="animated fadeInLeftBig faster" style={{ animationDelay: '1s'}} >
		      	<i className="material-icons ">mouse</i> &nbsp;

		        {'< Code />'}
		      </Heading>
		      <Heading subtitle className="animated fadeInUp faster" style={{ animationDelay: '1.8s'}} >
		      	<i className="material-icons ">repeat</i> &nbsp;

		        {'< Repeat />'}
		      </Heading>
		    </Container>
		</Hero.Body>

		);
}


export default Landing;
