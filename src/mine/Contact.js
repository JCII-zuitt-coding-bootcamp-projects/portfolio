import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Container , Heading , Columns } from 'react-bulma-components';

import Swal from 'sweetalert2';

const Contact = ()=>{


	const [name,setName] = useState('Cargo Dalisay');
	const [email,setEmail] = useState('');
	const [message,setMessage] = useState('Hi I am cargo dalisay');

	let formData = new FormData();
	formData.name = name;
	formData.email = email;
	formData.message = message;

	//Handlers
	const nameInputHandler = e => {
		console.log('typing inside name input')
		setName(e.target.value);
	}
	const emailInputHandler = e => {
		console.log('typing inside email input')
		setEmail(e.target.value);
	}
	const messageInputHandler = e => {
		console.log('typing inside message input')
		setMessage(e.target.value);
	}

	const submitFormClickHandler = () => {
			console.log('you are trying to submit');

			
			fetch('https://jc-portfolio-server.herokuapp.com/send', {
			// fetch('http://localhost:8000/send', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			}).then(res => {

				return res.json()
			}).then(res => {

				console.log(res.data.message);
				if(res === 'message_not_sent'){
					Swal.fire({
						icon: 'error',
						title: 'Message not sent Successfully',
						text: 'Message not sent',

					})
				}else{
					Swal.fire({
						icon: 'success',
						title: 'Message Sent',
						text: 'The Developer will contact you in 24 hours',

					})
				}
			})
		}

	return (

		<Hero.Body>
		    <Container className=" animated fadeInDown">
				
				<div className="columns">

				  <div className="column is-6 is-offset-3">

				    <div style={{  margin :'0 auto'}} >
						<Heading className="has-text-centered">
					        Contact Information
					    </Heading>
						<div className="box skill-icons has-text-centered" >
							<center>

								<figure className="image is-64x64 is-centered">
								  <img className="" src="/assets/user.png" />
								</figure>
								<h4 className="subtitle is-4">Jose Clet II</h4>

								<figure className="image is-64x64 is-centered">
								  <img className="" src="/assets/phone.png" />
								</figure>
								<h4 className="subtitle is-4">09155074263</h4>

								<figure className="image is-64x64 is-centered">
								  <img className="" src="/assets/email.png" />
								</figure>
								<h4 className="subtitle is-4">clet.jose@gmail.com</h4>

								<div >
								  <a href="https://www.facebook.com/" target="_blank">
								  	<img className="" src="/assets/facebook.png" style={{ width: '64px'}}/>
								  </a>
								  &nbsp;
								  &nbsp;
								  &nbsp;
								  <a href="https://www.linkedin.com/in/jcii/" target="_blank">
								  	<img className="" src="/assets/linkedin.png" style={{ width: '64px'}}/>
								  </a>
								  
								</div>
								<h4 className="subtitle is-4">Others</h4>

							</center>

						</div>
					</div>

				  </div>
				
				

				</div>
			</Container>
		</Hero.Body>

		);
}


export default Contact;
