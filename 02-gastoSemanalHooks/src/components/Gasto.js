import React from 'react';

function Gasto({gasto: { nombreGasto, cantidadGasto } }) {
  return (
    <li className="gastos">
      <p>
        {nombreGasto}
        <span className="gasto">$ {cantidadGasto}</span>
      </p>
    </li>
  )
}

export default Gasto;
