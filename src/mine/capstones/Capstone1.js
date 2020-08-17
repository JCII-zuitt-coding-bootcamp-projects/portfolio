import React from 'react'
// import { Heading } from 'react-bulma-components';

const Capstone1 = (props)=>{

	return (
			<div className={ props.isActive ? "modal is-active  animated fadeIn faster" : "modal  animated fadeIn faster" }>
			  <div className="modal-background" onClick={ e => props.setIsActive(false)}></div>
			  <div className="modal-card">
			    <header className="modal-card-head">
			      <p className="modal-card-title">ReciPinoy Project</p>
			      <button className="delete" aria-label="close"
			      onClick={ e => props.setIsActive(false)}
			      >
			      </button>
			    </header>
			    <section className="modal-card-body has-text-black">
			      	<a href="/images/capstone/c1.JPG" target="_blank" style={{ cursor : 'zoom-in'}}>
				    	<img
							className="is-rounded"
							alt="Capstone 1 Screentshot"   
				   			src="/images/capstone/c1.JPG"
				   			style={{ width : '100%'}}
				   		/>
					</a>

			   		<h5 class="title is-5 has-text-centered">
			   			{/* <a href="https://recipinoy-project.herokuapp.com" target="_blank"> */}
						<a href="https://recipinoy.netlify.app" target="_blank">
			   				Go to ReciPinoy <i class="material-icons">insert_link</i>
			   			</a>
			   		</h5>

			   		<br/>

			   		<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Project title:</span> Recipinoy
			   		</h6>



					<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Developed in:</span> 7 days
			   		</h6>

			   		<p>
			   			<span className="has-text-dark title is-6">About: </span>
			   			Recipinoy is the 1st project I developed in <a href="https://zuitt.co/" target="_blank">Zuitt Coding Bootcamp</a>. The goal of the 1st project is to showcase our skills in creating static websites using HTML, CSS(Bootstrap), and Javascript. Recipinoy is a website of Pinoy recipes. The website is mobile responsive.
					</p>


			   		<br/>

					<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Skills used:</span> HTML , CSS(Bootstrap framework) and Javascript
			   		</h6>

			   		<p>
			   			{/* <span className="has-text-warning title is-6">Note: </span> */}
			   			The App is hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
						{/* (free web hosting site). If the website did not load properly or show some error, try to reload the website many times. Contact me if you encountered any problem. */}
					</p>


			    </section>
			    <footer className="modal-card-foot">
			      <button className="button is-fullwidth" onClick={ e => props.setIsActive(false)}>Close</button>
			    </footer>
			  </div>
			</div>
		);
}


export default Capstone1;
