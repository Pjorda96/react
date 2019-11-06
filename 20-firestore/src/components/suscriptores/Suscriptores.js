import React  from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import Spinner from "../layout/Spinner";

const Suscriptores = ({suscriptores, firestore}) => {
  if (!suscriptores) return <Spinner />;

  const eliminarSuscriptor = id => {
    firestore.delete({
      collection: 'suscriptores',
      doc: id,
    });
  };

  return (
    <div className="row">
      <div className="col-md-12 mb-4">
        <Link to={'/suscriptores/nuevo'}
              className="btn btn-primary"
        >
          <i className="fas fa-plus" /> Nuevo Suscriptor
        </Link>
      </div>
      <div className="col-md-8">
        <i className="fas fa-users" /> Suscriptores
      </div>

      <table className="table table-striped mt-4">
        <thead className="text-light bg-primary">
          <tr>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
        {suscriptores.map(suscriptor => (
          <tr key={suscriptor.id}>
            <td>{suscriptor.nombre} {suscriptor.apellido}</td>
            <td>{suscriptor.carrera}</td>
            <td>
              <Link to={`/suscriptores/${suscriptor.id}`}
                    className="btn btn-success btn-block">
                <i className="fas fa-angle-double-right" /> Más Información
              </Link>

              <button onClick={() => eliminarSuscriptor(suscriptor.id)}
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

Suscriptores.propTypes = {
  firestore: PropTypes.object.isRequired,
  suscriptores: PropTypes.array,
};

export default compose(
  firestoreConnect([{ collection: 'suscriptores' }]),
  connect(( state, props) => ({
    suscriptores: state.firestore.ordered.suscriptores,
  }))
)(Suscriptores);