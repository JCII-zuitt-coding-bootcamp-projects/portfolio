import React, {useState} from 'react'
// import { Heading } from 'react-bulma-components';

const Capstone3 = (props)=>{

	return (
			<div className={ props.isActive ? "modal is-active  animated fadeIn faster" : "modal  animated fadeIn faster" }>
			  <div className="modal-background" onClick={ e => props.setIsActive(false)}></div>
			  <div className="modal-card">
			    <header className="modal-card-head">
			      <p className="modal-card-title">EyeSecure Project</p>
			      <button className="delete" aria-label="close"
			      onClick={ e => props.setIsActive(false)}
			      >
			      </button>
			    </header>
			    <section className="modal-card-body has-text-black">
			      	
					<a href="/images/capstone/c3.JPG" target="_blank" style={{ cursor : 'zoom-in'}}>
				    	<img
							   className="is-rounded"
							   alt="Capstone 3"
				   			src="/images/capstone/c3.JPG"
				   			style={{ width : '100%'}}
				   		/>
					</a>

			   		<h5 class="title is-5 has-text-centered">
			   			{/* <a href="https://eyesecure.herokuapp.com" target="_blank"> */}
						<a href="https://eyesecure.netlify.app" target="_blank">
			   				Go to EyeSecure <i class="material-icons">insert_link</i>
			   			</a>
			   		</h5>
					   

					<h6 class="title is-6 has-text-centered">
						<a href="https://github.com/JCII-zuitt-coding-bootcamp-projects/Capstone-3-client" target="_blank">
			   				Go to client/frontend repository
							<img
								className="small_icon"
								src="/images/tools/github.svg"
								alt="Github repo"
								title="Visit project repository"
							/>
			   			</a>
						<br/><br/>
						<a href="https://github.com/JCII-zuitt-coding-bootcamp-projects/Capstone-3-server" target="_blank">
			   				Go to server repository
							<img
								className="small_icon"
								src="/images/tools/github.svg"
								alt="Github repo"
								title="Visit project repository"
							/>
			   			</a>
			   		</h6>
					
					<center>
					<label className="has-text-centered has-text-success ">(Instructions how to use below)</label>
					</center>

			   		<br/>

			   		<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Project title:</span> EyeSecure
			   		</h6>

					<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Developed in:</span> 8 days
			   		</h6>

			   		<p>
			   			<span className="has-text-dark title is-6">About: </span>
			   			EyeSecure is the 3rd project I developed in <a href="https://zuitt.co/" target="_blank">Zuitt Coding Bootcamp</a>.
			   			It was developed using the MERN stack(MongoDB, Express. js, React, and Node. js), Apollo graphql, and many cool Javascript libraries.
			   			The project was inspired by <a href="https://www.youtube.com/watch?v=CLo3e1Pak-Y" target="_blank">China's facial recognition technology (AI) </a>they have today.
			   			Basically, Eyesecure is a facial recognition technology for CCTV cameras that can be used probably in CCTV camera's control room.
			   			Admins will feed<a href="https://www.youtube.com/watch?v=HcqpanDadyQ" target="_blank">(machine learning)</a> the system the faces of the person they want to monitor and once a recorded face is detected, it will be saved automatically in the recent detections.
			   			They can also add a person in the watchlist and once their face where detected, the system will alarm.			
					</p>


			   		<br/>

			   		<p>
			   			<span className="has-text-success title is-6">How to use: </span>
			   			<br/>
			   			<br/>
			   				<ol className="has-text-justified" style={{ margin: '0 1rem'}}>

				   				<li>
				   					Go to the <a href="https://eyesecure.netlify.app/login" target="_blank">Login</a> Page and use the credentials below:
				   					<br/>
				   					<strong className="has-text-grey">Username:</strong> &nbsp;<i>admin1</i>
				   					<br/>
									<strong className="has-text-grey">Password:</strong> &nbsp;&nbsp;<i>123456</i>

				   				</li>

				   				<li>
				   					Go to the "Admin" section to Add, Edit, or delete Admins.
				   				</li>
									
								<li>
									To add a new person, click "People" => "Add Person", Fill up the form by adding common person details, and attached the VALID Profile photo for that person. <span className="has-text-danger">Don't upload images without a person's face.</span> You may upload celebrity faces for fast resources(If you don't want to use your own face).
				   				</li>

				   				<li>
									After adding the person profile, Click the "EyeSecure Icon" in the middle of the Navigation bar to start Face recognition.
				   				</li>

				   				<li>
									The Live monitoring section may take some time to load for it will load the A.I. model that will be used and all the faces in the database. Once everything is loaded, Click the "Start Live Detection".
				   				</li>

				   				<li>
									If you don't want to test your own face in live detection, You can test live detection by using your phone (search for the celebrity photo with their faces) and put it in front of the WebCam.
				   				</li>

				   				<li>
									Unknown faces will be tagged as Unknown(Yellow box) if the registered face is detected(green box) it will be shown in the right side section and it will be saved in the "Recent detection section." 
				   				</li>

				   				<li>
				   					If the detected face is in the Watchlist, the system will alarm.
				   				</li>

				   				<li>
				   					To view all recent detection, go to "Monitor" -> "Recent detections". You can zoom in the Face detected by clicking.
				   				</li>

				   			</ol>
			   			<br/>


			   		</p>

			   		<br/>

					<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Skills used:</span> MERN stack(MongoDB, Express. js, React, and Node. js), Apollo graphql and other Javascript libraries
			   		</h6>

			   		<p>
			   			<span className="has-text-warning title is-6">Note: </span>
			   			<br/>
			   			<br/>
			   				<ol className="has-text-justified" style={{ margin: '0 1rem'}}>


				   				<li>
				   					EyeSecure is developed on a computer with:
				   					<ul type="bullet" style={{ fontStyle : 'italic' }}>
				   						<li>
											- 8 Gig ram
				   						</li>

				   						<li>
											- 512GB PCIe M.2 SSD storage
				   						</li>

				   						<li>
											- Windows 10 operating system
				   						</li>

				   						<li>
											- Intel Core i5-9300H 2.40GHz
				   						</li>

				   						<li>
											- 0.9 MP WebCam
				   						</li>
				   					</ul>
				   					If you will use EyeSecure in a lower Computer specification, it may affect App/system performance. The higher the specifications, the faster the program.
				   				</li>

				   				<li>
				   					The App is hosted on <a href="https://www.netlify.com/" target="_blank">netlify</a> for the frontend while the backend on <a href="https://www.heroku.com/" target="_blank">Heroku</a>.
				   					If the website did not load properly or show some error, try to reload the website many times.
				   					Because of these, the system may load slower for rendering and fetching of necessary data.
				   				</li>

				   				<li>
				   					The system is not mobile responsive since it is not intended for mobile users.
				   				</li>

				   				<li>
				   					The system needs a decent webcam(to mimic a CCTV camera) to test live facial recognition.
				   				</li>


				   			</ol>
			   			<br/>


			   		</p>



			    </section>
			    <footer className="modal-card-foot">
			      <button className="button is-fullwidth" onClick={ e => props.setIsActive(false)}>Close</button>
			    </footer>
			  </div>
			</div>
		);
}


export default Capstone3;
