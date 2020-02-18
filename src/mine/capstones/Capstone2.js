import React, {useState} from 'react'
// import { Heading } from 'react-bulma-components';

const Capstone2 = (props)=>{

	return (
			<div className={ props.isActive ? "modal is-active animated fadeIn faster" : "modal animated fadeIn faster" }>
			  <div className="modal-background" onClick={ e => props.setIsActive(false)}></div>
			  <div className="modal-card">
			    <header className="modal-card-head">
			      <p className="modal-card-title">EasyBiz Project</p>
			      <button className="delete" aria-label="close"
			      onClick={ e => props.setIsActive(false)}
			      >
			      </button>
			    </header>
			    <section className="modal-card-body has-text-black">
			      	
			      	<a href="/images/capstone/c2.JPG" target="_blank" style={{ cursor : 'zoom-in'}} >
				    	<img
				   			className="is-rounded"
				   			src="/images/capstone/c2.JPG"
				   			style={{ width : '100%'}}
				   		/>
			   		</a>
			   		<h5 class="title is-5 has-text-centered">
			   			<a href="https://easy-biz.herokuapp.com/admin/login" target="_blank">
			   				Go to EasyBiz - Business/Admin side <i class="material-icons">insert_link</i>
			   			</a>
			   			<br/>
			   			<a href="https://easy-biz.herokuapp.com/login" target="_blank">
			   				Go to EasyBiz - Customer side <i class="material-icons">insert_link</i>
			   			</a>
			   		</h5>
			   			<center>
			   			<label className="has-text-centered has-text-success ">(Instructions how to use below)</label>
			   			</center>

			   		<br/>

			   		<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Project title :</span> EasyBiz
			   		</h6>

					<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Developed in:</span> 14 days
			   		</h6>

			   		<p>
			   			<span className="has-text-dark title is-6">About: </span>
			   			EasyBiz is my 2nd project I developed in <a href="https://zuitt.co/" target="_blank">Zuitt Coding Bootcamp</a>.
			   			The goal of the 2nd project is to develop an eCommerce web app using Laravel framework. The EasyBiz Web app is a generic booking website for any businesses/store needs.
			   			It consists of the <a href="https://easy-biz.herokuapp.com/admin/login" target="_blank">business side</a> [admin authentication] and <a href="https://easy-biz.herokuapp.com/login" target="_blank">customer side</a> [user authentication]. Business admin can create reusable bookable templates for the business/store. The business has the ability to explicitly add how many bookable seats/rooms in the bookable template depending on their business needs.
					</p>


			   		<br/>

			   		<p>
			   			<span className="has-text-success title is-6">How to use: </span>
			   			<br/>
			   			<br/>
			   			 <strong>
			   			 	<i class="material-icons float-left">business_center</i> Business/Admin side (Black theme)
			   			 </strong>
			   				<ol className="has-text-justified" style={{ margin: '0 1rem'}}>

				   				<li>
				   					The business can <a href="https://easy-biz.herokuapp.com/admin/register" target="_blank">register</a> in the business side of the web app.
				   				</li>

				   				<li>
				   					After registering and/or logging into the business account, you can now design a bookable template(prerequisite before creating bookable schedule), create bookable schedule and add/edit staffs.
				   				</li>

				   				<li>
				   					After creating bookable schedule. Customers can now reserve or book in the Customer side.
				   				</li>

				   				<li>
				   					Business admin can also verify reservation ticket.
				   				</li>

				   				<li>
				   					You can also find instruction how to use the business side on its <a href="https://easy-biz.herokuapp.com/admin/home" target="_blank">home page</a>
				   				</li>


				   			</ol>
			   			<br/>

			   			 <strong>
			   			 	<i class="material-icons float-left">person</i> Customer side (Blue theme)
			   			 </strong>
			   				<ol className="has-text-justified" style={{ margin: '0 1rem'}}>

				   				<li>
									Register customer account in the <a href="http://easy-biz.herokuapp.com/register" target="_blank">registration page</a> and/or <a href="https://easy-biz.herokuapp.com/login" target="_blank">login</a> your account.
				   				</li>

				   				<li>
									Go to "Find Services (Reservation schedules)" and select the schedule you want to book.
				   				</li>

				   				<li>
									Select the available seats/rooms you want to reserve and click "Reserve" and confirm.
				   				</li>

				   				<li>
				   					You can access the reservation ticket in Reservations page with their QR code and reference number(The business will need this to verify your ticket in the venue/store).	
				   				</li>

				   				<li>
									You can also edit your profile and update password in the "Account" -> "Profile" section
				   				</li>


				   			</ol>
			   			<br/>

			   		</p>

			   		<br/>

					<h6 className="title is-6 has-text-grey">
			   			<span className="has-text-dark">Skills used:</span> Laravel framework, Vue.js , PHP , MySQL database, HTML , CSS(Bootstrap framework)
			   		</h6>

			   		<p>
			   			<span className="has-text-warning title is-6">Note: </span>
			   			The App is hosted on <a href="https://www.heroku.com/" target="_blank">Heroku</a> (free web hosting site). If the website did not load properly or show some error, try to reload the website many times. Contact me if you encountered any problem.
					</p>


			    </section>
			    <footer className="modal-card-foot">
			      <button className="button is-fullwidth" onClick={ e => props.setIsActive(false)}>Close</button>
			    </footer>
			  </div>
			</div>
		);
}


export default Capstone2;
