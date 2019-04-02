import React, { Component } from 'react';
import Producto from './Producto'

class Productos extends Component {
  render() {
    return (
      <div>
        <h2>Listado de productos</h2>
        { Object.keys(this.props.Productos).map(key => {
          <Producto
            key={key}
            producto={this.props.producto[key]}
          />
        }) }
      </div>
    )
  }
}

export default Productos