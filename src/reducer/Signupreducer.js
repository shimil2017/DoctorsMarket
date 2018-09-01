import { SIGNUP_UPDATE, LOCATION_DETAIL } from "../actions/Signupactions";

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
  streetname: "",
  state: "",
  city: "",
  position: {},
  telephone: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOCATION_DETAIL:
      console.log(action.payload);
      // debugger;
      return {
        ...state,
        country: action.payload.country != null ? action.payload.country : "",
        postalcode:
          action.payload.postalCode != null ? action.payload.postalCode : "",
        state: action.payload.adminArea != null ? action.payload.adminArea : "",
        streetname:
          action.payload.streetName != null ? action.payload.streetName : "",
        position:
          action.payload.position != null ? action.payload.position : {},
        city:
          action.payload.subAdminArea != null ? action.payload.subAdminArea : ""
      };
    default:
      return state;
  }
};
