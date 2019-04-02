import React, { Component } from 'react';

class Producto extends Component {
  render() {
    return (
      <div>
        <h2>Listado de productos</h2>
        {console.log(this.props)}
      </div>
    )
  }
}

export default Producto