import React, {Component, Fragment} from 'react';

import {Provider} from 'react-redux';
import store from './store';
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header/>

            <div className="container">
              <Switch>
                <Route exact path="/" component={Productos} />
                <Route exact path="/productos/nuevo" component={NuevoProducto} />
                <Route exact path="/productos/editar/:id" component={EditarProducto} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
