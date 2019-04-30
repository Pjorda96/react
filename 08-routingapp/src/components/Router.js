import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nosotros from './Nosotros';
import Error from './Error';
import productos from '../datos.json';
import Productos from "./Productos";
import SingleProducto from "./SingleProducto";
import Header from "./Header";
import Navegacion from "./Navegacion";
import Contacto from "./Contacto";

class Router extends Component{
  state= {
    productos: [],
    busqueda: '',
  };

  componentDidMount() {
    this.setState({
      productos
    })
  }

  busquedaProducto = busqueda => {
    if (busqueda.length > 3) {
      this.setState({
        busqueda
      })
    } else {
      this.setState({
        busqueda: ''
      })
    }
  };

  render() {
    let productos = {...this.state.productos};
    let busqueda = {...this.state.busqueda};
    let resultado;

    if (busqueda !== '') {
      resultado = productos.filter(producto => (
        producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
      ))
    } else {
      resultado = productos;
    }

    return (
      <BrowserRouter>

        <Header/>
        <Navegacion />
        <Switch>
          <Route exact path="/" render={() => (
            <Productos
              productos={resultado}
              busquedaProducto={this.busquedaProducto}
            />
          )}/>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/productos" render={() => (
            <Productos
              productos={resultado}
              busquedaProducto={this.busquedaProducto}
            />
          )}/>
          <Route exact path="/producto/:productoId" render={props => {
            let idProducto = props.location.pathname.replace('/producto/', '');
            return (
               <SingleProducto
                producto={this.state.productos[idProducto]}
              />
            );
          }}/>
          <Route exact path='/contacto' component={Contacto} />
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
