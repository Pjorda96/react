import React, {Component} from 'react';
import Header from "./components/Header";
import Noticias from "./components/Noticias";
import Formulario from "./components/Formulario";
import {api} from './Config.json';

class App extends Component {

  state = {
    noticias:[],
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (category='general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api.key}`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles,
        })
      })
  };

  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo="Noticias"
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
