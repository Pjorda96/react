import {
  AGREGAR_PRODUCTO,
  BORRAR_PRODUCTO,
  EDITAR_PRODUCTO,
  MOSTRAR_PRODUCTO,
  MOSTRAR_PRODUCTOS,
} from '../actions/types';

const initialState = {
  productos: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };

    case MOSTRAR_PRODUCTO:
      return {
        ...state,
        producto: action.payload,
      };

    case BORRAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(prod => prod.id !== action.payload)
      };

    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      };

    case EDITAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map(
          producto => (producto.id === action.payload.id)
            ? action.payload
            : producto,
        ),
      };

    default:
      return state;
  }
}
