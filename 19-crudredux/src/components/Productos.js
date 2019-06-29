import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import { mostrarProductos } from "../actions/productosActions";
import Producto from "./Producto";

class Productos extends Component {

  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const {productos} = this.props;

    return (
      <Fragment>
        <h2 className="text-center my-5">Listado de productos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {productos.map(prod => (
                <Producto
                  key={prod.id}
                  {...prod}
                />
              ))}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  productos: state.productos.productos,
});

export default connect(mapStateToProps, { mostrarProductos })(Productos);
