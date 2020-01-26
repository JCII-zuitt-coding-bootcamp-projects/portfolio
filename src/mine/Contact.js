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
		    <Container>
			<Columns>
				<Columns.Column className="animated fadeInLeftBig">
					
					<form>
						<div className="field">
							<label htmlFor="name" className="label has-text-light">Name</label>
							<div className="control">
								<input
									id="name"
									className="input"
									type="text"
									placeholder="Name here"
									onChange={nameInputHandler} value={name}
								/>
							</div>

						</div>

						<div className="field">
							<label htmlFor="name" className="label has-text-light">Email</label>
							<div className="control">
								<input
									id="name"
									className="input"
									type="email"
									placeholder="sample@domain.com"
									onChange={emailInputHandler} value={email}
								/>
							</div>

						</div>

						<div className="field">
							<label htmlFor="name" className="label has-text-light">Message</label>
							<div className="control">

								<textarea
									id="message"
									className="textarea"
									rows="6	"
									placeholder="Message here"
									onChange={messageInputHandler}
									value={message}
								/>
							</div>


						</div>
						<button type="button" className="button is-primary is-fullwidth" children="Send"
							onClick={submitFormClickHandler}
						/>
					</form>

				</Columns.Column>

				<Columns.Column className="animated fadeIn slower">
					<iframe
						id="gmap"
						src="https://maps.google.com/maps?q=market%20market&t=&z=15&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
					/>
				</Columns.Column>
			</Columns>

			</Container>
		</Hero.Body>

		);
}


export default Contact;
