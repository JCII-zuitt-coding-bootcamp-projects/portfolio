import React , { useEffect, useState } from 'react'

import ClipboardJS from 'clipboard'

/*Bulma components*/
import { Hero , Container , Heading , Columns } from 'react-bulma-components';


const Contact = ()=>{

	const [numberIsCopied, updateNumberIsCopied] = useState(false);
	const [emailIsCopied, updateemailIsCopied] = useState(false);


	
	useEffect(() => {
		//initialize clipboard for copy pasting
		new ClipboardJS(".clipboard-btn");
	}, [])


	const copyNumberHandler = () =>{
		clipboardSwitchIcon(updateNumberIsCopied);
	}

	const copyEmailHandler = () =>{
		clipboardSwitchIcon(updateemailIsCopied);
	}


	function clipboardSwitchIcon(stateUpdater, seconds = 2){
		// update states
		stateUpdater(true);

		//return the copy icon after setTimeout
		setTimeout(() => {
			stateUpdater(false); // return the copy icon
		}, seconds * 1000);
	}



	return (

		<Hero.Body>
		    <Container className=" animated fadeInDown">
				
				<div className="columns">

				  <div className="column is-6 is-offset-3">

				    <div style={{  margin :'0 auto'}} >
						<Heading className="has-text-centered" subtitle={true} size='3'>
					        Contact Information
					    </Heading>
						<div className="box skill-icons has-text-centered" >

							<figure class="image is-fullwidth">
								<img src="/images/workspace.jfif" alt="Workspace" className="workspace" />
							</figure>
							
							<br/>

							<center>

								<figure className="image is-64x64 is-centered">
								  <img className="lang_tools-sm" src="/assets/user.png" alt="user" />
								</figure>
								<h4 className="subtitle is-4">Jose Clet II</h4>

								<figure className="image is-64x64 is-centered">
								  <img className="lang_tools-sm" src="/assets/phone.png" alt="phone" />
								</figure>
								<h4 className="subtitle is-4">
									09155201879
									{
										!numberIsCopied ? <span data-clipboard-text="09155201879" className="clipboard-btn" onClick={ copyNumberHandler } title="Copy to clipboard">
									  📋
								  	</span> : <span>✔️</span>
									}
								</h4>

								<figure className="image is-64x64 is-centered">
								  <img className="lang_tools-sm" src="/assets/email.png" alt="email" />
								</figure>
								<h4 className="subtitle is-4">
									clet.jose@gmail.com
									{
										!emailIsCopied ? <span data-clipboard-text="clet.jose@gmail.com" className="clipboard-btn" onClick={ copyEmailHandler } title="Copy to clipboard">
									  📋
								  	</span> : <span>✔️</span>
									}
								</h4>

								<div >
								
								  <a href="https://www.linkedin.com/in/jcii/" target="_blank" rel="noopener noreferrer">
								  	<img
										className="lang_tools-sm animated delay-1s fadeIn"
										src="/images/tools/linkedin.svg"
										alt="linkedin account"
										title="Visit my linkedin account"
									/>
								  </a>

								  <a href="https://github.com/Lums31" target="_blank" rel="noopener noreferrer">
								  	<img
										className="lang_tools-sm animated delay-1s fadeIn"
										src="/images/tools/github.svg"
										alt="Github profile account"
										title="Visit my Github profile account"
									/>
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
