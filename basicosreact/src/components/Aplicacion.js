import React, {Component} from 'react';
import Productos from './Productos'
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component {
  state = {
    productos: [],
  };

  componentDidMount() {

    const productos = [
      {nombre: 'Libro', precio: 200},
      {nombre: 'Disco de música', precio: 100},
      {nombre: 'Instrumento musical', precio: 800},
      {nombre: 'Reproductor musical', precio: 1500},
      {nombre: 'Album ed. especial', precio: 500},
    ];

    this.setState({
      productos: productos
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          titulo='Nuestra tienda virtual'
        />
        <Productos
          productos={this.state.productos}
        />

        <Footer/>
      </React.Fragment>
    )
  }
}

export default Aplicacion
