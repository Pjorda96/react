import React, {Component} from 'react';
import {makeMainRoutes} from "./components/routes";
const routes = makeMainRoutes();

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        {routes}
      </div>
    )
  }
}

export default App;
