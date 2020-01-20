import React from 'react';
import { Container , Columns  } from 'react-bulma-components'
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
					text right
				</Columns.Column>
			</Columns>

		</Container>

		);

}


export default Contact;
