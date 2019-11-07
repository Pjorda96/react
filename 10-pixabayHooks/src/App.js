import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Buscador from './components/Buscador';
import Listado from './components/Listado';

function App() {
  const [ busqueda, guardarBusqueda ] = useState('')
  const [ imagenes, guardarImagenes ] = useState([])
  const [ paginaActual, guardarPaginaActual ] = useState(1)
  const [ totalPaginas, guardarTotalPaginas ] = useState(1)

  useEffect(() => {
    consultarApi();
  }, [busqueda, paginaActual])

  const consultarApi = async () => {
    const key = '12362900-ab5b5b6af8d671a852c02bf49';
    const perPage = 30;

    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${perPage}&page=${paginaActual}`;

    const res = busqueda && await axios.get(url);
    res && guardarImagenes(res.data.hits);
    res && guardarTotalPaginas(Math.ceil(res.data.totalHits / perPage));

    const jumbotron = document.querySelector('.jumbotron')
    jumbotron.scrollIntoView({behavior: 'smooth', block: 'end'});
  }

  const paginaAnterior = () => {
    let nuevaPaginaActual = paginaActual > 1 ? paginaActual - 1 : 1;
    guardarPaginaActual(nuevaPaginaActual);
  }
  
  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual + 1;
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Buscador
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <Listado
          imagenes={imagenes}
        />

        {
          paginaActual > 1 && <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            Anterior &laquo;
          </button>
        }

        {
          paginaActual !== totalPaginas && <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        }
      </div>
    </div>
  );
}

export default App;
