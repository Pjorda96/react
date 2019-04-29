import React, {Component} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Eventos from "./components/Eventos";
import {api} from './Config.json';

class App extends Component {
  state = {
    categorias: [],
    eventos: [],
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${api.token}&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories,
        })
      })
  };

  obtenerEventos = async busqueda => {
    const {nombre, categoria} = busqueda;
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${nombre}&sort_by=date&categories=${categoria}&token=${api.token}&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
        this.setState({
          eventos: eventos.events,
        })
      })
  };

  render() {
    return (
      <div className="App">
        <Header titulo="Eventos"/>

        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
          />
          <Eventos
            eventos={this.state.eventos}
          />
        </div>
      </div>
    );
  }
}

export default App;
