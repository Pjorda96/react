import React, {Component} from 'react';
import Buscador from "./components/Buscador";
import {api} from './Config.json';
import Resultado from "./components/Resultado";
import './App.css';

class App extends Component {
  state = {
    termino: '',
    imagenes: '',
    pagina: '',
    cargando: false,
    totalPaginas: ''
  };

  consultarApi = async () => {
    const {termino, pagina} = this.state;
    const url =
      `https://pixabay.com/api/?key=${api.key}&q=${termino}&per_page=30&page=${pagina}`;

    await fetch(url)
      .then(res => {
        this.setState({
          cargando: true,
        });
        return res.json();
      })
      .then(res => this.setState({
        imagenes: res.hits,
        cargando: false,
        totalPaginas: Math.ceil(res.totalHits / 30),
      }))
  };

  datosBusqueda = termino => {
    this.setState({
      termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if (pagina > 1) {
      pagina -= 1;
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        window.scrollTo(0, 0);
      });
    }
  };

  paginaSiguiente = () => {
    let {pagina, totalPaginas} = this.state;

    if (pagina === totalPaginas) return null;
    pagina += 1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      window.scrollTo(0, 0);
    });
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>

        {this.state.cargando
          ? <div className="sk-circle">
              <div className="sk-circle1 sk-child" />
              <div className="sk-circle2 sk-child" />
              <div className="sk-circle3 sk-child" />
              <div className="sk-circle4 sk-child" />
              <div className="sk-circle5 sk-child" />
              <div className="sk-circle6 sk-child" />
              <div className="sk-circle7 sk-child" />
              <div className="sk-circle8 sk-child" />
              <div className="sk-circle9 sk-child" />
              <div className="sk-circle10 sk-child" />
              <div className="sk-circle11 sk-child" />
              <div className="sk-circle12 sk-child" />
            </div>
          : <div className="row justify-content-center">
              <Resultado
                imagenes={this.state.imagenes}
                pagina={this.state.pagina}
                totalPaginas={this.state.totalPaginas}
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
              />
            </div>
        }
      </div>
    );
  }
}

export default App;
