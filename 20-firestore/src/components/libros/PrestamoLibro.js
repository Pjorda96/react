import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import Spinner from "../layout/Spinner";
import FichaSuscriptor from "../suscriptores/FichaSuscriptor";

import { buscarUsuario } from "../../actions/buscarUsuarioActions";

class PrestamoLibro extends Component {
  state = {
    error: false,
    busqueda: '',
  };

  buscarAlumno = e => {
    e.preventDefault();
    const { firestore, buscarUsuario } = this.props;
    const { busqueda } = this.state;

    const collection = firestore.collection('suscriptores');
    const consulta = collection.where('codigo', '==', busqueda).get();

    consulta.then(res => {
      if (res.empty) {
        buscarUsuario({});

        this.setState({
          error: true,
        })
      } else {
        const datos = res.docs[0];

        console.log(datos.data())

        buscarUsuario(datos.data());
        this.setState({
          error: false,
        })
      }
    })
  };

  solicitar = () => {
    const { firestore, history, usuario } = this.props;
    let prestados = [...this.props.libro.prestados, usuario];
    const libro = {...this.props.libro};

    usuario.fecha_solucitud = new Date().toLocaleDateString();
    libro.prestados = prestados;

    firestore.update({
      collection: 'libros',
      doc: libro.id
    }, libro).then(history.push('/'));
  };

  leerDato = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };


  render() {
    const { libro, usuario } = this.props;
    const { error } = this.state;

    if(!libro) return <Spinner/>;

    let fichaAlumno, btnSolicitar;

    if(usuario.nombre) {
      fichaAlumno = <FichaSuscriptor
                      alumno={usuario}
                    />;
      btnSolicitar = <button className="btn btn-primary btn-block"
                             onClick={this.solicitar}
                      >
                        Solicitar
                      </button>;
    } else {
      fichaAlumno = null;
      btnSolicitar = null;
    }

    let mensajeResualtado = '';
    if(error) {
      mensajeResualtado = (
        <div className="alert alert-danger text-center font-weight-bold">
          No hay resultados
        </div>
      );
    } else {
      mensajeResualtado = null;
    }

    return (
      <div className="row">
        <div className="col-12 mb-4">
          <Link to={`/libros/${libro.id}`} className="btn btn-secondary">
            <i className="fas fa-arrow-circle-left" /> Volver
          </Link>
        </div>

        <div className="col-12">
          <h2>
            <i className="fas fa-user" /> Solicitar "{libro.titulo}"
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={this.buscarAlumno}
                    className="mb-4"
              >
                <legend className="color-primary text-center">
                  Buscar por código
                </legend>

                <div className="form-group">
                  <input type="text"
                         name="busqueda"
                         className="form-control"
                         onChange={this.leerDato}
                         autoFocus
                  />

                  <input value="Buscar alumno"
                         type="submit"
                         className="btn btn-success btn-block mt-2"/>
                </div>
              </form>
              {fichaAlumno}
              {btnSolicitar}

              {mensajeResualtado}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PrestamoLibro.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(props => [{
    collection: 'libros',
    storeAs: 'libro',
    doc: props.match.params.id,
  }]),
  connect(({ firestore: {ordered}, usuario}, props) => ({
    libro: ordered.libro && ordered.libro[0],
    usuario: usuario,
  }), { buscarUsuario })
)(PrestamoLibro);
