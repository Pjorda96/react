import {AGREGAR_CITA, BORRAR_CITA, ERROR_CITA, MOSTRAR_CITAS, VALIDAR_FORMULARIO} from "./types";

export const obtenerCitas = () => {
  return {
    type: MOSTRAR_CITAS,
  }
};

export const agregarCita = cita => {
  return {
    type: AGREGAR_CITA,
    payload: cita,
  }
};

export const borrarCita = id => {
  return {
    type: BORRAR_CITA,
    payload: id,
  }
};

export const validarFormulario = estado => {
  return {
    type: VALIDAR_FORMULARIO,
    payload: estado,
  }
};

export const errorCita = estado => {
  return {
    type: ERROR_CITA,
    payload: estado,
  }
};
