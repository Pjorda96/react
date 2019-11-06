import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from "./Criptomoneda";
import Error from "./Error";

function Formulario({guardarMoneda, guardarCriptomoneda}) {
  const [ criptomonedas, guardarCriptomonedas ] = useState([]);
  const [ monedaCotizar, guardarMonedaCotizar ] = useState('');
  const [ criptoCotizar, guardarCriptoCotizar ] = useState('');
  const [ error, guardarError ] = useState(false);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    const resultado = await axios.get(url);

    guardarCriptomonedas(resultado.data.Data);
  };

  const cotizarMoneda = e => {
    e.preventDefault();

    (!monedaCotizar || !criptoCotizar) && guardarError(true);
    (!monedaCotizar || !criptoCotizar) || guardarError(false);

    guardarMoneda(monedaCotizar);
    guardarCriptomoneda(criptoCotizar);
  };

  return (
    <form
      onSubmit={cotizarMoneda}
    >
      {
        error && <Error mensaje="Ambos campos son obligatorios" />
      }
      <div className="row">
        <label htmlFor="moneda">Elige tu moneda</label>
        <select
          name=""
          id="moneda"
          className="u-full-width"
          onChange={e => guardarMonedaCotizar(e.target.value)}
        >
          <option value="">- Elige tu moneda -</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euro</option>
        </select>
      </div>

      <div className="row">
        <label htmlFor="crypto">Elige tu criptomoneda</label>
        <select
          name=""
          id="crypto"
          className="u-full-width"
          onChange={e => guardarCriptoCotizar(e.target.value)}
        >
          <option value="">- Elige tu criptomoneda -</option>
          {criptomonedas.map(criptomoneda => (
            <Criptomoneda
              key={criptomoneda.CoinInfo.Id}
              criptomoneda={criptomoneda}
            />
          ))}
        </select>
      </div>

      <input type="submit" className="button-primary u-full-width" value="Calcular" />

    </form>
  )
}

export default Formulario;
