import React, { useState, useEffect } from 'react';
import axios from 'axios';

import imagen from './cryptomonedas.png';
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";
import Cotizacion from "./components/Cotizacion";

function App() {
  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ cargando, guardarCargando ] = useState('');
  const [ resultado, guardarResultado ] = useState({});

  useEffect(() => {
    guardarCargando(true);

    cotizarCriptomoneda();
  }, [ moneda, criptomoneda ]);

  const cotizarCriptomoneda = async () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const resultado = moneda && criptomoneda && await axios.get(url);

    resultado && guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

    guardarCargando(false);
  };

  return (
    <div className="container">
      <div className="row">
      <div className="one-half column">
        <img src={imagen} alt="imagen criptomonedas"
             className="logotipo"
        />
      </div>

      <div className="one-half column">
        <h1>Cotiza Criptomonedas al Instante</h1>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />

        { cargando && <Spinner /> }
        { !cargando && Object.keys(resultado).length && <Cotizacion resultado={resultado} /> }

      </div>
      </div>
    </div>
  );
}

export default App;
