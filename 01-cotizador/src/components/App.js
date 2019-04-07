import React, {Component} from 'react';
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";

import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from '../helper'
import Resultado from "./Resultado";

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  };

  cotizarSeguro = (dates) => {
    const {marca, plan, year} = dates;

    const diferencia = obtenerDiferenciaAnio(year);

    let resultado = 2000;
    resultado -= ((diferencia * 3) * resultado) / 100;
    resultado = calcularMarca(marca) * resultado;
    resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);

    const datos = {
      marca,
      plan,
      year
    };

    this.setState({
      resultado,
      datos
    })
  };

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de seguro de coche"
        />

        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />

          <Resultado
            resultado={this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
