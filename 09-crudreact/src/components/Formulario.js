import React, {Component} from 'react';

class Formulario extends Component {

  tituloRef = React.createRef();
  descripcionRef = React.createRef();

  crearPost = e => {
    e.preventDefault();

    const post = {
      title: this.tituloRef.current.value,
      body: this.descripcionRef.current.value,
      userId: 1
    };

    this.props.crearPost(post);

    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="col-8" onSubmit={this.crearPost}>
        <legend className="text-center">Crear nuevo post</legend>
        <div className="form-group">
          <label htmlFor="titulo">Título del post</label>
          <input ref={this.tituloRef} type="text" className="form-control" id="titulo" placeholder="título"/>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    )
  }
}

export default Formulario;
