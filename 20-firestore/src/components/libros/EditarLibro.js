import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import Spinner from "../layout/Spinner";

class EditarLibro extends Component {
  tituloInput = React.createRef();
  ISBNInput = React.createRef();
  editorialInput = React.createRef();
  existenciaInput = React.createRef();

  editarLibro = e => {
    e.preventDefault();
    const { libro, firestore, history } = this.props;

    const libroActualizado = {
      ...libro,
      titulo: this.tituloInput.current.value,
      ISBN: this.ISBNInput.current.value,
      editorial: this.editorialInput.current.value,
      existencia: this.existenciaInput.current.value,
    };

    firestore.update({
      collection: 'libros',
      doc: libro.id,
    }, libroActualizado)
      .then(() => history.push('/') );
  };


  render() {
    const { libro } = this.props;

    if (!libro) return <Spinner/>;

    return (
      <div className="row">
        <div className="col-12 mb-4">
          <Link to={'/'} className="btn btn-secondary">
            <i className="fas fa-arrow-circle-left" /> Volver
          </Link>
        </div>

        <div className="col-12">
          <h2>
            <i className="fas fa-user" /> Editar Libro
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <form
                onSubmit={this.editarLibro}
              >
                <div className="form-group">
                  <label>Título: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    placeholder="Título del Libro"
                    required
                    ref={this.tituloInput}
                    defaultValue={libro.titulo}
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
                    ref={this.ISBNInput}
                    defaultValue={libro.ISBN}
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
                    ref={this.editorialInput}
                    defaultValue={libro.editorial}
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
                    ref={this.existenciaInput}
                    defaultValue={libro.existencia}
                  />
                </div>

                <input type="submit"
                       value="Editar Libro"
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

EditarLibro.propTypes = {
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
)(EditarLibro);
