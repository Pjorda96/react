import React, {Component} from 'react';
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";
import ListaCitas from "./components/ListaCitas";

import {Provider} from 'react-redux';
import stote from './store';

class App extends Component {

  render() {
    return (
      <Provider store={stote}>
        <div className="container">
          <Header
            titulo={'Administrador de Pacientes de Veterinaria'}
          />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita />
            </div>
            <div className="col-md-6">
              <ListaCitas />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
