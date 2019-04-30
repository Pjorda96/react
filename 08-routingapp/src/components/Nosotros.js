import React, {Component} from 'react';
import '../css/Nosotros.css';
import camisa from '../camisa_1.png';

class Nosotros extends Component {
  render() {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src={camisa} alt="imagen nosotros"/>
        </div>
        <div className="contenido">
          <h2>Sobre nosotros</h2>
          <p>bla bla blsa.kja bad baethnwarmyns aseth areh ytrke tyuk sasetqae5udyt</p>
        </div>
      </div>
    )
  }
}

export default Nosotros;
