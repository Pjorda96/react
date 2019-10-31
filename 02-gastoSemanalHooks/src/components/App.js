import React, { useState } from 'react';
import Pregunta from './Pregunta';

import '../css/normalize.css';
import '../css/skeleton.css';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);

  return (
    <div className="App">
      <header>
        <h1>Gasto semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        {
          preguntaPresupuesto
            ? <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
            />
            : (
              <div className="row"></div>
            )
        }
        
      </div>
    </div>
  );
}

export default App;
