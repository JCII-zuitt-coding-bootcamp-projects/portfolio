import React, {useState} from 'react'

/*Bulma components*/
import { Hero , Container , Heading , Columns} from 'react-bulma-components';

const About = ()=>{

	const lang_tools = [
    "typescript",
    "javascript",
    "react",
    "vue",

    "visual-studio-code",
    "html",
    "css",
    "php",

    "npm",
    "webpack",
    "nodejs",
    "bootstrap",

    "git",
    "laravel",
    "mysql",
    "linux",
    // "mongodb",
    // "express",
    // "jquery",
  ];

	const lang_and_tools = lang_tools.map( name => {
		return (
      <Columns.Column size={3} key={name}>
        <img
          className="lang_tools animated delay-1s swing"
          src={`/images/tools/${name}.png`}
          alt={name}
          title={name}
        />
      </Columns.Column>
    );
	})

	return (

		<Hero.Body>
		    <Container className=" animated fadeInDown">
		    	<Columns>
		    		<Columns.Column className="">
					    <Heading className="has-text-centered" subtitle={true} size='3'>
					        Web Developer Portfolio 
					    	{ /*<i class="material-icons">business_center</i>*/ }
					    </Heading>
					    <Heading subtitle  className="animated fadeIn has-text-justified" style={{ marginTop : '3rem'}}>
					         Hi! I'm Jose Clet II,
					         <br/>
					         And I'm a full stack web developer.
					         <br />
					         <br/>
					         <p>
					         I'm a fast learner and can easily adapt to changes when it comes to the latest web technologies. I have learned  a lot of web technologies and best practices that you can take advantage of.
					         I took <a href="https://zuitt.co/" className="has-text-info" target="_blank">Zuitt Coding Bootcamp</a> course to learn the latest web technologies. I finished their 3 months intensive training course and because of hard work and persistence, I got the 2nd top Performer Achievement Award.
					         </p>

					         <br/>
					         <p>
					         Feel free to browse my portfolio to know more about my projects and skills.
					         </p>
					         <br />
					         Have a nice day! 
					    </Heading>

				    </Columns.Column>

				    <Columns.Column>
				        <Heading className="has-text-centered" subtitle={true} size='3'>
					        Languages and Tools
					    </Heading>


					    <div className="box skill-icons">

					    <Columns>
					    	{ lang_and_tools }
						</Columns>
						</div>

				    </Columns.Column>
		    	</Columns>
		    </Container>	
		</Hero.Body>

		);
}


export default About;
