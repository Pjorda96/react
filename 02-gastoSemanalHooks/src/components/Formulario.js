import React, { useState } from 'react';
import Error from "./Error";
import shortId from 'shortid';

function Formulario(props) {
  const [ nombreGasto, guardarNombreGasto ] = useState('');
  const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
  const [ error, guardarError ] = useState(false);

  const { guardarGasto } = props;

  function agregarGasto(e) {
    e.preventDefault();

    if (!nombreGasto || cantidadGasto <= 0 || isNaN(cantidadGasto)) {
      guardarError(true);
      return; // mal hecho
    }

    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortId.generate(),
    };

    guardarGasto(gasto);
    props.guardarCrearGasto(true);
    guardarError(false);

    guardarNombreGasto('');
    guardarCantidadGasto('');
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Añade tus gastos aquí</h2>

      {
        error && <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />
      }

      <div className="campo">
        <label htmlFor="nombre">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          id="nombre"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />

        <label htmlFor="cantidad">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          id="cantidad"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Añadir Gasto"
        />
      </div>
    </form>
  )
}
export default Formulario;
