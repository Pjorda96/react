import {combineReducers} from "redux";
import citasReducer from './citas'

export default combineReducers({
  citas: citasReducer,
});
