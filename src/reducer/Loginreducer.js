import { LOGIN_UPDATE } from "../actions/Loginactions";

const INITIAL_STATE = {
 email:"",
 password:"",
 loader:false
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
        
    default:
    return state;
    }
}