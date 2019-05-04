import React, {Component} from 'react';

class Buscador extends Component {

  imagenRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault();

    const busqueda = this.imagenRef.current.value.split(' ').join('+');

    this.props.datosBusqueda(busqueda);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.imagenRef}
              className="form-control form-control-lg"
              type="text"
              placeholder="Busca tu imagen"/>
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar..."/>
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
