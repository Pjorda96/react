import React, {Component} from 'react';
import Buscador from "./components/Buscador";
import {api} from './Config.json';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
        </div>


      </div>
    );
  }
}

export default App;
