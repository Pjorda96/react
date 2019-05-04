import React, {Component} from 'react';
import Imagen from "./Imagen";
import Navegacion from "./Navegacion";

class Resultado extends Component {

  mostrarImagenes = () => {
    const {imagenes, pagina, totalPaginas} = this.props;

    if (imagenes.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {imagenes.map(imagen => (
            <Imagen
              key={imagen.id}
              imagen={imagen}
            />
          ))}
        </div>
        <Navegacion
          pagina={pagina}
          totalPaginas={totalPaginas}
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}
        />
      </React.Fragment>
    )
  };

  render() {
    return (
      <React.Fragment>
        {this.mostrarImagenes()}
      </React.Fragment>
    );
  }
}

export default Resultado;
