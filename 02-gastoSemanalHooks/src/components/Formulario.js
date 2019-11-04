import React, { useState } from 'react';

function Formulario(props) {
  const [ nombreGasto, guardarNombreGasto ] = useState('');
  const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
  const [ error, guardarError ] = useState(false);

  return (
    <form action="">
      <h2>Añade tus gastos aquí</h2>

      <div className="campo">
        <label htmlFor="nombre">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          id="nombre"
          onChange={e => guardarNombreGasto(e.target.value)}
        />

        <label htmlFor="cantidad">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          id="cantidad"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
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
