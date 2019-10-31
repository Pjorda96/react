import React, { useState } from 'react'

function Pregunta(props) {
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  const validar = e => {
    e.preventDefault();

    (!cantidad || cantidad <= 0) && guardarError(true);

    guardarError(false);
    props.guardarPresupuesto(cantidad);
    props.guardarPreguntaPresupuesto(true);
  }

  return (
    <>
      <h2>Coloca tu Presupuesto</h2>

      {
        error && <p className="alert alert-danger error">El presupuesto es incorrecto</p>
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
