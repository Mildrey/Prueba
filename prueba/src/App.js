import React, { Component } from 'react';
import './App.css';

import TopBar from './Container/Topbar.js';
import Navbar from './Components/NavBar/navbar.js'
import Carousel from './Components/Carousel/Carousel.js'
import Services from './Container/service.js'
import Solicitar from './Container/Solicitar.js'


class App extends Component {
  render() {
    return (
      <div className="App">     
        <TopBar/>
        <Navbar/>
        <Carousel/>
        <Services/>
        <Solicitar/>
      </div>
    );
  }
}

export default App;
