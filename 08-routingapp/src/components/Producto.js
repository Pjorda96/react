import React from 'react';
import '../css/Productos.css';
import {Link} from "react-router-dom";

const Producto = ({producto}) => {
  const {imagen, nombre, precio, id} = producto;

  return (
    <li>
      <img src={`/img/${imagen}.png`} alt={nombre}/>
      <p>{nombre} <span>${precio}</span></p>
      <Link to={`/producto/${id}`}>Más información</Link>
    </li>
  )
};

export default Producto;
