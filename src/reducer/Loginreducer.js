import {
  LOGIN_UPDATE,
  LOGIN_CHECKING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET
} from "../actions/Loginactions";

const INITIAL_STATE = {
  email: "",
  password: "",
  loader: false,
  userdata:{}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_CHECKING:
      return { ...state, loader: true };
    case LOGIN_SUCCESS:
      return { ...state, loader: false,userdata:action.payload};
    case LOGIN_FAIL:
     return {...state,loader:false}  
    case RESET:
     return INITIAL_STATE 
    default:
      return state;
  }
};
