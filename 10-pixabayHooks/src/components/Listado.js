import React from 'react'

import Imagen from './Imagen';

export default function Listado({imagenes}) {
  return (
    <div className="col-12 p-5 row">
      {
        imagenes && imagenes.map(imagen => (
        <Imagen key={imagen.id} imagen={imagen} />
        ))
      }
    </div>
  )
}
