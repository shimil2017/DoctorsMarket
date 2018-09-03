import { combineReducers } from "redux";
import testreducer from "../reducer/testreducer";
import SignupReducer from "../reducer/Signupreducer";
import Loginreducer from "../reducer/Loginreducer"
const reducers = combineReducers({
  testreducer: testreducer,
  SignupReducer: SignupReducer,
  Loginreducer:Loginreducer
});
export default reducers;
