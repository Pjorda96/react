import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import Spinner from "../layout/Spinner";

class MostrarLibro extends Component {
  devolverLibro = id => {
    const { firestore, history } = this.props;
    let libroActualizado = {...this.props.libro};
    const prestados = libroActualizado.prestados.filter(prestamo => prestamo.codigo !== id);

    libroActualizado = {...libroActualizado, prestados};

    firestore.update({
      collection: 'libros',
      doc: libroActualizado.id,
    }, libroActualizado)
      .then(() => history.push('/') );
  };

  render() {
    const { libro } = this.props;
    let btnPrestamo;

    if (!libro) return <Spinner/>;

    if (libro.existencia - libro.prestados.length > 0) {
      btnPrestamo = (
        <Link to={`/libros/prestamo/${libro.id}`}
              className="btn btn-success my-3"
        >
          Solicitar
        </Link>
      );
    } else {
      btnPrestamo = null;
    }

    return (
      <div className="row">
        <div className="col-md-6 mb-4">
          <Link to={'/'} className="btn btn-secondary">
            <i className="fas fa-arrow-circle-left"/> Volver
          </Link>
        </div>

        <div className="col-md-6">
          <Link to={`/libros/editar/${libro.id}`} className="btn btn-primary float-right">
            <i className="fas fa-pencil-alt"/> Editar Libro
          </Link>
        </div>

        <hr className="mx-5 w-100"/>

        <div className="col-12">
          <h2 className="mb-4">{libro.titulo}</h2>

          <p>
            <span className="font-weight-bold">
              ISBN:
            </span> {libro.ISBN}
          </p>

          <p>
            <span className="font-weight-bold">
              Editorial:
            </span> {libro.editorial}
          </p>

          <p>
            <span className="font-weight-bold">
              Existencia:
            </span> {libro.existencia}
          </p>

          <p>
            <span className="font-weight-bold">
              Disponibilidad:
            </span> {libro.existencia - libro.prestados.length}
          </p>

          {btnPrestamo}

          <h3 className="my-2">Personas que tienen el libro</h3>
          {libro.prestados.map(prestamo => (
            <div key={prestamo.codigo} className="card my-2">
              <h4 className="card-header">
                {prestamo.nombre} {prestamo.apellido}
              </h4>
              <div className="card-body">
                <p>
                  <span className="font-weigth-bold">
                    Código
                  </span> {prestamo.codigo}
                </p>
                <p>
                  <span className="font-weigth-bold">
                    Carrera
                  </span> {prestamo.carrera}
                </p>
                <p>
                  <span className="font-weigth-bold">
                    Fecha de solicitud
                  </span> {prestamo.fecha_solicitud}
                </p>
              </div>

              <div className="card-footer">
                <button className="btn btn-warning font-weigth-bold"
                        onClick={() => this.devolverLibro(prestamo.codigo)}
                >
                  Devolver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

MostrarLibro.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(props => [{
    collection: 'libros',
    storeAs: 'libro',
    doc: props.match.params.id,
  }]),
  connect(({ firestore: {ordered}}, props) => ({
    libro: ordered.libro && ordered.libro[0]
  }))
)(MostrarLibro);
