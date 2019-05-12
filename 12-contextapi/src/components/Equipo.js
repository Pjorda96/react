import React, {Component} from 'react';
import {LaLigaContext} from "./LaLiga";

class Equipo extends Component {
  render() {
    return (
      <LaLigaContext.Consumer>
        {(value) => (
          Object.keys(value.state).map(idEquipo => {
            const {nombre, titulos} = value.state[idEquipo];

            return (
              <li
                key={idEquipo}
                className="list-group-item d-flex justify-content-between align-items-center">
                <p className="m-0">{nombre}
                  <span className=" ml-4 badge badge-danger">{titulos}</span>
                </p>

                <button className="btn btn-success" onClick={() => {
                  value.esCampeon(idEquipo);
                }}>Es Compeón</button>
              </li>
            )
          })
        )}
      </LaLigaContext.Consumer>
    );
  }
}

export default Equipo;
