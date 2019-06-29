import {
  AGREGAR_PRODUCTO,
  BORRAR_PRODUCTO,
  EDITAR_PRODUCTO,
  MOSTRAR_PRODUCTO,
  MOSTRAR_PRODUCTOS
} from './types';

import axios from 'axios';

const url = 'http://localhost:5000/productos';

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get(`${url}`);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data,
  })
};

export const mostrarProducto = id => async dispatch => {
  const respuesta = await axios.get(`${url}/${id}`);

  dispatch({
    type: MOSTRAR_PRODUCTO,
    payload: respuesta.data,
  })
};

export const borrarProducto = id => async dispatch => {
  await axios.delete(`${url}/${id}`);

  dispatch({
    type: BORRAR_PRODUCTO,
    payload: id,
  })
};

export const agregarProducto = producto => async dispatch => {
  const respuesta = await axios.post(`${url}`, producto);

  dispatch({
    type: AGREGAR_PRODUCTO,
    payload: respuesta.data,
  })
};

export const editarProducto = producto => async dispatch => {
  const respuesta = await axios.put(`${url}/${producto.id}`, producto);

  dispatch({
    type: EDITAR_PRODUCTO,
    payload: respuesta.data,
  })
};
