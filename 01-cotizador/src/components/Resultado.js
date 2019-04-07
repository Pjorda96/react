import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component{
  render() {
    const resultado = this.props.resultado;
    const mensaje = (!resultado) ? 'Elije marca, año y tipo de seguro' : `El total es: $ ${resultado}`;

    return(
      <div className="gran-total">
        <TransitionGroup component="span" className="resultado">
          <CSSTransition
            className="resultado"
            key={resultado}
            timeout={{enter: 400, exit: 400}}
          >
            <span>{mensaje}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default Resultado;
