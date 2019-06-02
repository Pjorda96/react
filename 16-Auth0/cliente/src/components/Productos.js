import React, {Component, Fragment} from 'react';
import Producto from "./Producto";
import Buscador from "./Buscador";
import axios from 'axios';

class Productos extends Component {
  state= {
    productos: [],
    busqueda: '',
  };

  componentDidMount() {
    this.queryAPI();
  }

  queryAPI = () => {
    console.log(this.props.auth.getAccessToken())
    const {getAccessToken} = this.props.auth;

    const headers = {'Authorization': `Bearer ${getAccessToken()}`};
    const url = 'http://localhost:8080/productos';

    return axios.get(url, {headers})
      .then(res => this.setState({productos: res.data}));
  };

  login = () => {
    this.props.auth.login();
  };

  busquedaProducto = busqueda => {
    if (busqueda.length > 3) {

      const copia = [...this.state.productos];
      const productos = copia.filter(producto => (
        producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
      ));

      this.setState({
        busqueda,
        productos
      })
    } else {
      this.setState({
        busqueda: ''
      }, () => {
        this.queryAPI();
      })
    }
  };

  render() {
    const {isAuthenticated} = this.props.auth;

    return (
      <div className="productos">
        { isAuthenticated() && (
          <Fragment>
            <h2>Nuestros productos</h2>
            <Buscador
              busqueda={this.busquedaProducto}
            />
            <ul className="lista-productos">
              {Object.keys(this.state.productos).map(producto => (
                <Producto
                  informacion={this.state.productos[producto]}
                  key={producto}
                />
              ))}
            </ul>
          </Fragment>
        )}


        { !isAuthenticated() && (
          <div className="contenedor-boton">
            <p>Para ver el contenido debes estar logeado</p>
            <a className="boton" onClick={this.login}>Iniciar sesión</a>
          </div>
        )}
      </div>
    )
  }
}

export default Productos;
