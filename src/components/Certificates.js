import React from 'react'

import Swal from "sweetalert2";

/*Bulma components*/
import { Hero , Container , Heading , Columns} from 'react-bulma-components';

const Certificates = ()=>{



    const zoomHandler = (picture) => {

        Swal.fire({
          html: `<figure class="image" style='max-width: 900px; margin: 0 auto;'>
                    <img src="/images/${picture}.jpg" alt="${picture}" class="zoom_certificate" />
                </figure>`,

          width: "auto",
          padding: "0",
          confirmButtonText: "Close",
        });

        

    }

	return (

		<Hero.Body>
		    <Container className=" animated fadeInDown">
		    	<Columns>

		    		<Columns.Column>
				        <Heading className="has-text-centered" subtitle={true} size='3'>
					        Bootcamp Certificate
					    </Heading>


					    <div className="box skill-icons">

					    <Columns>

                            <figure class="image is-fullwidth animated delay-1s flipInX " onClick={ () => zoomHandler('certificate') }>
								<img src="/images/certificate.jpg" alt="Bootcamp Certificate" className="certificate" />
							</figure>

						</Columns>
						</div>

				    </Columns.Column>

				    <Columns.Column>
				        <Heading className="has-text-centered" subtitle={true} size='3'>
					        Award
					    </Heading>


					    <div className="box skill-icons">

					    <Columns>

                            <figure class="image is-fullwidth  animated delay-1s flipInX" onClick={ () => zoomHandler('award') } >
								<img src="/images/award.jpg" alt="Award" className="certificate" />
							</figure>
                            
						</Columns>
						</div>

				    </Columns.Column>

		    	</Columns>
		    </Container>	
		</Hero.Body>

		);
}


export default Certificates;
