import React, {Component} from 'react';
import '../css/Navegacion.css';
import {NavLink} from "react-router-dom";

class Navegacion extends Component {

  cerrarSesion = () => {
    this.props.auth.logout()
  };

  iniciarSesion = () => {
    this.props.auth.login()
  };

  render() {
    const {isAuthenticated} = this.props.auth;

    let resultado;

    if(isAuthenticated()) {
      resultado = <a onClick={this.cerrarSesion}>Cerrar sesión</a>;
    } else {
      resultado = <a onClick={this.iniciarSesion}>Iniciar sesión</a>
    }

    return (
      <nav className="navegacion">
        <NavLink to={'/nosotros'} activeClassName={'activo'}>Nosotros</NavLink>
        <NavLink to={'/productos'} activeClassName={'activo'}>Productos</NavLink>
        <NavLink to={'/contacto'} activeClassName={'activo'}>Contacto</NavLink>
        {resultado}
      </nav>
    )
  }
}

export default Navegacion;
