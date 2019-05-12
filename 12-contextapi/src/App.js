import React, {Component} from 'react';
import Equipos from "./components/Equipos";
import LaLigaProvider from "./components/LaLiga";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LaLigaProvider>
        <Equipos />
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
