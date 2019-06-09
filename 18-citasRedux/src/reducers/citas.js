import {AGREGAR_CITA, BORRAR_CITA, ERROR_CITA, MOSTRAR_CITAS, VALIDAR_FORMULARIO} from "../actions/types";

const citaMock = {
  id: 0,
  fecha: '10-20-30',
  hora: '10:30',
  mascota: 'Perro',
  propietario: 'Alguien',
  sintomas: 'bla',
};

const initialState = {
  citas: [
    citaMock,
  ],
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_CITAS:
      return {
        ...state
      };

    case AGREGAR_CITA:
      return {
        ...state,
        citas: [
          ...state.citas,
          action.payload,
        ]
      };

    case BORRAR_CITA:
      return {
        ...state,
        citas: [
          ...state.citas.filter(cita => cita.id !== action.payload)
        ]
      };

    case ERROR_CITA:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
