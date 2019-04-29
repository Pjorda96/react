import React, {Component} from 'react';
import axios from 'axios';
import Criptomoneda from "./Criptomoneda";
import Error from "./Error";
import PropTypes from 'prop-types';

class Formulario extends Component {
  state = {
    criptomonedas: [],
    moneda: '',
    criptomoneda: '',
    error: false
  };

  async componentDidMount() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    await axios.get(url)
      .then(respuesta => {
        this.setState({
          criptomonedas: respuesta.data.Data
        })
      });
  }

  obtenerValor = e => {
    const {name, value} = e.target;
    this.setState({
      [name] : value,
    })
  };

  cotizarMoneda = e => {
    e.preventDefault();

    const {moneda, criptomoneda} = this.state;
    if (moneda === '' || criptomoneda === '') {
      this.setState({
        error: true
      }, () => {
        setTimeout(() => {
          this.setState({
            error: false
          })
        }, 3000)
      });

      return;
    }

    const cotizacion = {
      moneda,
      criptomoneda
    };

    this.props.cotizarCriptomoneda(cotizacion)
  };

  render() {

    const mensaje = (this.state.error)
      ? <Error mensaje="Ambos campos son obligatorios" />
      : '';

    return (
      <form onSubmit={this.cotizarMoneda}>
        {mensaje}
        <div className="row">
          <label>Elige tu Moneda</label>
          <select
            onChange={this.obtenerValor}
            name="moneda"
            className="u-full-width">
            <option value="">Elige tu moneda</option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="GBP">Libras</option>
            <option value="EUR">Euros</option>
          </select>
        </div>

        <div className="row">
          <div>
            <label>Elige tu Criptomoneda</label>
            <select
              onChange={this.obtenerValor}
              name="criptomoneda"
              className="u-full-width">
              <option value="">Elige tu moneda</option>
              {Object.keys(this.state.criptomonedas).map(key => (
                <Criptomoneda
                  key={key}
                  criptomoneda={this.state.criptomonedas[key]}
                />
              ))}
            </select>
          </div>
        </div>
        <input className="button-primary u-full-width" type="submit" value="Cotizar" />
      </form>
    )
  }
}

Formulario.propTypes = {
  cotizarCriptomoneda: PropTypes.func.isRequired
};

export default Formulario;
