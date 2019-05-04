import React from 'react';

const Navegacion = props => {

  return (
    <div className="py-5">
      {
        (props.pagina !== 1)
          ? <button className="btn btn-info mr-1" onClick={props.paginaAnterior}>&larr; Anterior</button>
          : null
      }
      {
        (props.pagina !== props.totalPaginas)
          ? <button className="btn btn-info" onClick={props.paginaSiguiente}>Siguiente &rarr;</button>
          : null
      }
    </div>
  )
};

export default Navegacion;
