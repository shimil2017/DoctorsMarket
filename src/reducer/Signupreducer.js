import { SIGNUP_UPDATE } from "../actions/Signupactions";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  gender: "",
  password: "",
  country: "",
  nationality: "",
  postalcode: "",
  streetname: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
