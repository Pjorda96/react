import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from 'prop-types';

class NuevoLibro extends Component {
  state = {
    titulo: '',
    ISBN: '',
    editorial: '',
    existencia: '',
  };

  agregarLibro = e => {
    e.preventDefault();

    const nuevoLibro = { ...this.state, prestados: [] };

    const { firestore, history } = this.props;

    firestore.add({ collection: 'libros' }, nuevoLibro)
      .then(() => history.push('/') );
  };

  leerDato = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 mb-4">
          <Link to={'/libros'} className="btn btn-secondary">
            <i className="fas fa-arrow-circle-left" /> Volver
          </Link>
        </div>

        <div className="col-12">
          <h2>
            <i className="fas fa-book" /> Nuevo Libro
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <form
                onSubmit={this.agregarLibro}
              >
                <div className="form-group">
                  <label>Título: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    placeholder="Título del Libro"
                    required
                    onChange={this.leerDato}
                    value={this.state.titulo}
                  />
                </div>

                <div className="form-group">
                  <label>ISBN: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="ISBN"
                    placeholder="ISBN del Libro"
                    required
                    onChange={this.leerDato}
                    value={this.state.ISBN}
                  />
                </div>

                <div className="form-group">
                  <label>Editorial: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="editorial"
                    placeholder="Editorial del Libro"
                    required
                    onChange={this.leerDato}
                    value={this.state.editorial}
                  />
                </div>

                <div className="form-group">
                  <label>Existencia: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="existencia"
                    placeholder="Existencia del Libro"
                    required
                    onChange={this.leerDato}
                    value={this.state.existencia}
                  />
                </div>

                <input type="submit"
                       value="Agregar Libro"
                       className="btn btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NuevoLibro.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(NuevoLibro);
