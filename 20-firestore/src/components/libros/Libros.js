import React  from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import Spinner from "../layout/Spinner";

const Libros = ({libros, firestore}) => {
  const eliminarLibro = id => {
    firestore.delete({
      collection: 'libros',
      doc: id,
    });
  };

  if (!libros) return <Spinner />;

  return (
    <div className="row">
      <div className="col-md-12 mb-4">
        <Link to={'/libros/nuevo'}
              className="btn btn-success"
        >
          <i className="fas fa-plus" /> Nuevo Libro
        </Link>
      </div>
      <div className="col-md-8">
        <i className="fas fa-book" /> Libros
      </div>

      <table className="table table-striped mt-4">
        <thead className="text-light bg-primary">
        <tr>
          <th>Título</th>
          <th>ISBN</th>
          <th>Editorial</th>
          <th>Existencia</th>
          <th>Disponibilidad</th>
          <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
        {libros.map(libro => (
          <tr key={libro.id}>
            <td>{libro.titulo}</td>
            <td>{libro.ISBN}</td>
            <td>{libro.editorial}</td>
            <td>{libro.existencia}</td>
            <td>{libro.existencia - libro.prestados.length}</td>
            <td>
              <Link to={`/libros/${libro.id}`}
                    className="btn btn-success btn-block">
                <i className="fas fa-angle-double-right" /> Más Información
              </Link>

              <button onClick={() => eliminarLibro(libro.id)}
                      className="btn btn-danger btn-block">
                <i className="fas fa-trash-alt" /> Eliminar
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

Libros.propTypes = {
  firestore: PropTypes.object.isRequired,
  libros: PropTypes.array,
};

export default compose(
  firestoreConnect([{ collection: 'libros' }]),
  connect(( state, props) => ({
    libros: state.firestore.ordered.libros,
  }))
)(Libros);
