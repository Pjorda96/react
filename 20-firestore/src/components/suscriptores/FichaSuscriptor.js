import React from 'react';

const FichaSuscriptor = ({alumno}) => {
  return (
    <div className="card my-3">
      <h3 className="card-header bg-primary text-white">Datos Solicitante</h3>

      <div className="card-body">
        <p className="font-weigth-bold">
          Nombre: <span className="font-weigth-normal">{alumno.nombre}</span>
        </p>
        <p className="font-weigth-bold">
          Código: <span className="font-weigth-normal">{alumno.codigo}</span>
        </p>
        <p className="font-weigth-bold">
          Carrera: <span className="font-weigth-normal">{alumno.carrera}</span>
        </p>
      </div>
    </div>
  );
};

export default FichaSuscriptor;
