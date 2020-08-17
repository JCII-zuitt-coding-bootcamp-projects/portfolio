import React from 'react';
import { Container , Columns  } from 'react-bulma-components'
import './Contact.css'

// import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile } from 'react-bulma-components/lib/components/form';
const Contact = () => {

	return (

		<Container className="has-text-centered">
			<Columns>
				<Columns.Column>
					
					<form>
						<div className="field">
							<label for="name" className="label has-text-light">Name</label>
							<div className="control">
								<input
									id="name"
									className="input"
									type="text"
									placeholder="Name here"
								/>
							</div>

						</div>

						<div className="field">
							<label for="name" className="label has-text-light">Email</label>
							<div className="control">
								<input
									id="name"
									className="input"
									type="email"
									placeholder="sample@domain.com"
								/>
							</div>

						</div>

						<div className="field">
							<label for="name" className="label has-text-light">Message</label>
							<div className="control">

								<textarea
									id="message"
									className="textarea"
									rows="6	"
									placeholder="Message here"
								/>
							</div>


						</div>
						<button className="button is-primary is-fullwidth" children="Send" />
					</form>

				</Columns.Column>

				<Columns.Column>
					<iframe
						id="gmap"
						src="https://maps.google.com/maps?q=market%20market&t=&z=15&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					/>
				</Columns.Column>
			</Columns>

		</Container>

		);

}


export default Contact;
