import React, {Component} from 'react';

const LaLigaContext = React.createContext();
export {LaLigaContext};

class LaLigaProvider extends Component {
  state = {
    equipos: [
      {
        nombre: 'Real Madrid',
        titulos: 35
      },
      {
        nombre: 'Barcelona',
        titulos: 25
      },
      {
        nombre: 'Atlético de Madrid',
        titulos: 10
      }
    ]
  };

  render() {
    return (
      <LaLigaContext.Provider value={{
        state: this.state.equipos,
        esCampeon: (id) => {
          const equipos = [...this.state.equipos];

          equipos[id].titulos = equipos[id].titulos +1;

          this.setState({
            equipos
          })
        }
      }}>
        {this.props.children}
      </LaLigaContext.Provider>
    );
  }
}

export default LaLigaProvider;
