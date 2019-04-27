import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component{

  categoryRef = React.createRef();

  cambiarCategoria = e => {
    e.preventDefault();

    this.props.consultarNoticias(this.categoryRef.current.value);
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias por categoría</h2>
            <div className="input-field col s12 m8">
              <select ref={this.categoryRef}>
                <option value="general" defaultValue>General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
              <input type="submit" className="btn amber darken-2" value="Buscar" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired,
};

export default Formulario;
