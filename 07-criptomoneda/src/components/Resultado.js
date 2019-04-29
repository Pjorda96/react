import React from 'react';
import PropTypes from 'prop-types';

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado;

  if (Object.entries(resultado).length === 0) return null;
  return (
    <div className="resultado">
      <h2>Resultado</h2>
      <p className="precio">Precio: <span>{PRICE}</span></p>
      <p>Máximo de hoy: <span>{HIGHDAY}</span></p>
      <p>Mínimo de hoy: <span>{LOWDAY}</span></p>
      <p>Variación 24 horas: <span>{CHANGEPCT24HOUR}%</span></p>
      <p>Última actualización: <span>{LASTUPDATE}</span></p>
    </div>
  )
};

Resultado.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Resultado;
