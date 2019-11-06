import React, { useState } from 'react'
import Error from "./Error";

function Pregunta(props) {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const validar = e => {
    e.preventDefault();

    if (!cantidad || cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return; // mal hecho
    }

    guardarError(false);
    props.guardarPresupuesto(cantidad);
    props.guardarRestante(cantidad);
    props.guardarPreguntaPresupuesto(false);
  };

  return (
    <>
      <h2>Coloca tu Presupuesto</h2>

      {
        error && <Error mensaje="El presupuesto es incorrecto" />
      }

      <form
        onSubmit={validar}
      >
        <input type="number"
          className="u-full-width"
          placeholder="Por tu presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  )
}

export default Pregunta
