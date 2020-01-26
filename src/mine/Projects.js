import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Columns ,Container} from 'react-bulma-components';

const Projects = ()=>{

	return (

		<Hero.Body>
		<Container>
		   <Columns>

		   {/* 1st Capstone*/}
		   <Columns.Column>

			   	<article className="message is-danger">
				  <div className="message-header">
				    <p>Danger</p>
				    <button className="delete" aria-label="delete"></button>
				  </div>
				  <div className="message-body">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
				  </div>
				</article>

		   </Columns.Column>

			{/* 2nd Capstone*/}
		   <Columns.Column>
		   		<article className="message is-success">
				  <div className="message-header">
				    <p>Success</p>
				    <button className="delete" aria-label="delete"></button>
				  </div>
				  <div className="message-body">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
				  </div>
				</article>
		   </Columns.Column>

			{/* 3rd Capstone*/}
		   <Columns.Column>
		   		<article className="message is-info">
				  <div className="message-header">
				    <p>Info</p>
				    <button className="delete" aria-label="delete"></button>
				  </div>
				  <div className="message-body">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
				  </div>
				</article>
		   </Columns.Column>

		   </Columns>
		 </Container>
		</Hero.Body>

		);
}


export default Projects;
