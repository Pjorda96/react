import React from 'react';
import '../css/Contacto.css';

const Contacto = () => {
  return (
    <form>
      <legend>Formulario de contacto</legend>
      <div className="input-field">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" placeholder="Tu nombre" name="nombre"/>
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Tu email" name="email"/>
      </div>
      <div className="input-field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea name="mensaje" cols="30" rows="10">Mensaje</textarea>
      </div>
      <div className="input-field enviar">
        <input type="submit" value="Enviar"/>
      </div>
    </form>
  )
};

export default Contacto;
