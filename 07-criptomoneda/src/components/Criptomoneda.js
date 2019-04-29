import React from 'react';
import PropTypes from 'prop-types';

const Criptomoneda = ({criptomoneda}) => {
  const {Name, FullName} = criptomoneda.CoinInfo;

  return (
    <option value={Name}>{FullName}</option>
  )
};

Criptomoneda.propTypes = {
  criptomoneda: PropTypes.object.isRequired
};

export default Criptomoneda;
