import React, { Component } from 'react';
import './navbar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar container"> 
        <div className="row">
        	<div className="col-4">
        	 <h3>CERRAJEROSMÁLAGA</h3>
        	</div>
        	<div className="col-8">
        		<ul class="nav justify-content-end">
  						<li class="nav-item">
    						<a class="nav-link active" href="#">INICIO</a>
 							</li>
  						<li class="nav-item">
    						<a class="nav-link" href="#">CERRAJERÍA URGENTE</a>
  						</li>
  						<li class="nav-item">
   					 		<a class="nav-link" href="#">SERVICIO 24H</a>
  						</li>
  						<li class="nav-item">
   				 			<a class="nav-link disabled" href="#">CONTACTO</a>
  			  		</li>
						</ul>
        	</div>
        </div>          
      </div>
    );
  }
}

export default NavBar;