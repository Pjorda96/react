import React, {Component} from 'react';
import './css/App.css';

import imagen from './cryptomonedas.png';

class App extends Component{
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={imagen} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    )
  }
}

export default App;
