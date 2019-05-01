import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Editar extends Component {

  tituloRef = React.createRef();
  descripcionRef = React.createRef();

  editar = e => {
    e.preventDefault();

    const post = {
      title: this.tituloRef.current.value,
      body: this.descripcionRef.current.value,
      userId: 1,
      id: this.props.info.id,
    };

    this.props.editarPost(post);

    e.currentTarget.reset();
  };

  render() {
    if (!this.props.info) return null;

    const {title, body} = this.props.info;

    return (
      <form className="col-8" onSubmit={this.editar}>
        <legend className="text-center">Editar post</legend>
        <div className="form-group">
          <label htmlFor="titulo">Título del post</label>
          <input
            ref={this.tituloRef}
            type="text"
            className="form-control"
            id="titulo"
            placeholder="título"
            defaultValue={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea
            ref={this.descripcionRef}
            className="form-control"
            id="contenido"
            cols="30"
            rows="10"
            placeholder="Contenido..."
            defaultValue={body}
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        <Link to={'/'} className="btn btn-danger float-right">Cancelar</Link>
      </form>
    )
  }
}

export default Editar;
