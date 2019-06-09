const redux = require('redux');

const createStore = redux.createStore;

const stateInicial = {
  usuarios: []
};

const reducerPrincipal = (state = stateInicial, action) => {
  if (action.type === 'AGREGAR_USUARIOS') {
    return {
      ...state,
      usuarios: action.nombre
    }
  }

  if (action.type === 'MOSTRAR_USUARIOS') {
    return {
      ...state
    }
  }

  return state;
};

const store = createStore(reducerPrincipal);

store.subscribe(() => {
  console.log('Algo ha cambiado...', store.getState());
});

store.dispatch({ type: 'AGREGAR_USUARIOS', nombre: 'Pablo' });
store.dispatch({ type: 'MOSTRAR_USUARIOS' });
