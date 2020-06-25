import React, { Component } from 'react';
import './carousel.css';


class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
       	<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
           	<div class="carousel-item active">
      				<img class="d-block w-100" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/carrusel/cerrajeros-urgencias-malaga-01.jpg" alt="First slide"/>
      					<div class="overlay">
       	      		<div className="container">
       	   				 <h1>Cerrajero 24horas</h1>
       	   				 <h4>Málaga</h4>
       	   				 	<button type="button" class="btn btn-outline-light">LLAMAR</button>
       	   				 	 <div className="cinta">
       	   				 	   <h3>certificado</h3>
       	   				 	 </div>
       	 				 	</div>
       	  			</div>  
    				</div>
    				<div class="carousel-item">
      				<img class="d-block w-100" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/carrusel/cerrajeros-urgencias-malaga-02.jpg" alt="Second slide"/>
      				<div class="overlay">
       	      		<div className="container">
       	   				 <h1>Apertura de puertas</h1>
       	   				 	<h4>cerrajero de urgencias 24 horas</h4>
       	   				 		<button type="button" class="btn btn-outline-light">LLAMAR</button>
       	   				 			<div className="cinta">
       	   				 	     <h3>certificado</h3>
       	   				 	   </div>
       	 				 	</div>
       	  			</div>  
    				</div>
    				<div class="carousel-item">
      				<img class="d-block w-100" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/carrusel/cerrajeros-urgencias-malaga-03.jpg" alt="Third slide"/>
      				<div class="overlay">
       	      		<div className="container">
       	   				 <h1>Mas de 10 años de experiencia</h1>
       	   				 		<h4>Habriendo puertas en Málaga</h4>
       	   				 			<div className="cinta">
       	   				 	     <h3>certificado</h3>
       	   				 	   </div>
       	 				 	</div>
       	  			</div>  
    				</div>
 					</div>
				</div>   
      </div>
    );
  }
}

export default Carousel;