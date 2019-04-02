import React, { Component } from 'react';
import Productos from './Productos'
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component {
  render() {
    const productos = [
      { nombre: 'Libro', precio: 200},
      { nombre: 'Disco de música', precio: 100},
      { nombre: 'Instrumento musical', precio: 800},
      { nombre: 'Reproductor musical', precio: 1500},
      { nombre: 'Album ed. especial', precio: 500},
    ]
    
    return (
      <React.Fragment>
        <Header
          titulo='Nuestra tienda virtual'
        />
        <Productos
          productos={productos}
        />

        <Footer />
      </React.Fragment>
    )
  }
}

export default Aplicacion