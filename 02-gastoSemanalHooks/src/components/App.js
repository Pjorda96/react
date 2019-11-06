import React, { useState, useEffect } from 'react';
import Pregunta from './Pregunta';

import '../css/normalize.css';
import '../css/skeleton.css';
import Formulario from "./Formulario";
import Listado from "./Listado";
import ControlPresupuesto from "./ControlPresupuesto";

function App() {
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto ] = useState(true);
  const [ crearGasto, guardarCrearGasto ] = useState(false);
  const [ gasto, guardarGasto ] = useState(false);
  const [ gastos, guardarGastos ] = useState([]);

  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
  }, [crearGasto]);


  return (
    <div className="App">
      <header>
        <h1>Gasto semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        {
          preguntaPresupuesto
            ? <Pregunta
              guardarRestante={guardarRestante}
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
            />
            : <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
        }
      </div>
    </div>
  );
}

export default App;
