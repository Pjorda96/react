import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';

class Post extends Component {

  confirmarEliminacion = () => {
    const {id} = this.props.info;

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez borrado no se puede recuperar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          '¡Borrado!',
          'El archivo se ha borrado.',
          'success'
        );
        this.props.borrarPost(id);
      }
    });
  };

  render() {
    const {id, title} = this.props.info;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
          <Link to={`/editar/${id}`} className="btn btn-warning">Editar</Link>
          <button className="btn btn-danger" onClick={this.confirmarEliminacion}>Borrar</button>
        </td>
      </tr>
    );
  }
}

export default Post;
