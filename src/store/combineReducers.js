import { combineReducers } from "redux";
import testreducer from "../reducer/testreducer";
import SignupReducer from "../reducer/Signupreducer";
const reducers = combineReducers({
  testreducer: testreducer,
  SignupReducer: SignupReducer
});
export default reducers;
