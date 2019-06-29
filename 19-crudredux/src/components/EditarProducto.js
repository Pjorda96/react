import React, {Component} from 'react';
import {connect} from "react-redux";

import {mostrarProducto, editarProducto} from "../actions/productosActions";

class EditarProducto extends Component {
  state = {
    nombre: '',
    precio: '',
    error: false,
  };

  componentDidMount() {
    const {id} = this.props.match.params;

    this.props.mostrarProducto(id)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {nombre, precio} = nextProps.producto;

    this.setState({
      nombre,
      precio,
    });
  }

  nombreProducto = e => {
    this.setState({
      nombre: e.target.value,
    });
  };

  precioProducto = e => {
    this.setState({
      precio: e.target.value,
    });
  };

  onEditarProducto = e => {
    e.preventDefault();
    const {nombre, precio} = this.state;
    const {id} = this.props.match.params;

    if (nombre === '' || precio === '') {
      this.setState({error: true});

      return true;
    }

    this.setState({error: false});

    const producto = {
      id,
      nombre,
      precio,
    };

    this.props.editarProducto(producto);

    this.props.history.push('/');
  };

  render() {
    const {nombre, precio, error} = this.state;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.onEditarProducto}>
                <div className="form-group">
                  <label>Titulo</label>
                  <input onChange={this.nombreProducto} defaultValue={nombre} type="text" className="form-control"
                         placeholder="Titulo"/>
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input onChange={this.precioProducto} defaultValue={precio} type="text" className="form-control"
                         placeholder="Precio"/>
                </div>
                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                  Guardar cambios
                </button>
              </form>
              {error && (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  Ha habido un error
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  producto: state.productos.producto,
});

const actions = {
  mostrarProducto,
  editarProducto,
};

export default connect(mapStateToProps, actions)(EditarProducto);
