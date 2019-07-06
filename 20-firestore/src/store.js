import { createStore, combineReducers, compose} from 'redux';
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config';

import buscarUsuarioReducer from './reducers/buscarUsuarioReducer';

firebase.initializeApp(firebaseConfig);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase),
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  usuario: buscarUsuarioReducer,
});

const initialState = {};

const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
