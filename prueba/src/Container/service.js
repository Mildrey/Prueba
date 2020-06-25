import React, { Component } from 'react';
import './style/service.css'

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <img className="img-icon" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/servicios/puerta.jpg" alt="First slide"/>
              <h2>Apertura de puertas</h2>
              <p>Abrimos todo tipo de puertas sin rotura de la misma. Servicio urgente 24 horas..</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <img className="img-icon" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/servicios/comercio.jpg" alt="First slide"/>
              <h2>Apertura de locales</h2>
              <p>Abrimos y reparamos cierres manuales y automáticos en todo tipo de tiendas y locales</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <img className="img-icon" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/servicios/persiana.jpg" alt="First slide"/>
              <h2>Apertura de persianas</h2>
              <p>Abrimos la persiana de tu domicilio o comercio sin ningún tipo de rotura.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <img className="img-icon" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/servicios/coche.jpg" alt="First slide"/>
              <h2>Apertura de coches</h2>
              <p>Abrimos y decodificamos todo tipo de coches sin rotura.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <img className="img-icon" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/servicios/caja-fuerte.jpg" alt="First slide"/>
              <h2>Apertura de cajas fuertes</h2>
              <p>Abrimos su caja fuerte con cualquier tipo de sistema de cierre.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <img className="img-icon" src="https://cerrajerosmalaga24horas.es/imagenes/inicio/servicios/llave.jpg" alt="First slide"/>
              <h2>Cerrajería en general</h2>
              <p>Ofrecemos todo tipo de servicios de cerrajería urgente las 24 horas del día.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;