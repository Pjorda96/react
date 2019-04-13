import React from 'react';
import {revisarPresupuesto} from "../helper";

const Restante = props => {
  const {presupuesto, restante} = props;

  return (
  <div className={revisarPresupuesto(presupuesto, restante)}>
    Restante: ${restante}
  </div>
  )
};

export default Restante;
