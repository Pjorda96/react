import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component{

  ciudadRef = React.createRef();
  paisRef = React.createRef();

  buscarClima = e => {
    e.preventDefault();

    const respuesta = {
      ciudad: this.ciudadRef.current.value,
      pais:this.paisRef.current.value,
    };

    this.props.datosConsulta(respuesta);

    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="ciudad" ref={this.ciudadRef} type="text" />
                <label htmlFor="ciudad">Ciudad: </label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef}>
                  <option value="" defaultValue>Elige un pais</option>
                  <option value="AR" defaultValue>Argentina</option>
                  <option value="CO" defaultValue>Colombia</option>
                  <option value="CR" defaultValue>Costa Rica</option>
                  <option value="ES" defaultValue>España</option>
                  <option value="US" defaultValue>Estados Unidos</option>
                  <option value="MX" defaultValue>México</option>
                  <option value="PE" defaultValue>Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 buscador">
                <input type="submit" className="waves-effect waves-ligth
                  btn-large yellow accent-4" value="Buscar..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Formulario.propTypes = {
  datosConsulta: PropTypes.func.isRequired
};

export default Formulario;
