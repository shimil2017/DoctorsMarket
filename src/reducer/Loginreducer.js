import {
  LOGIN_UPDATE,
  LOGIN_CHECKING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET,
  PROFILE_UPDATE
} from "../actions/Loginactions";
import { REHYDRATE } from "redux-persist/constants";
const INITIAL_STATE = {
  email: "",
  password: "",
  loader: false,
  userdata: {},
  userid: "",
  token: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case LOGIN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_CHECKING:
      return { ...state, loader: true };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      const { id, api_token } = action.payload;
      return {
        ...state,
        loader: false,
        userdata: action.payload,
        userid: id,
        token: api_token
      };
    case PROFILE_UPDATE:
      console.log(action.payload, "here");
      return {
        ...state,
        userdata: { ...state.userdata, profile_pic: action.payload }
      };
    case LOGIN_FAIL:
      return { ...state, loader: false };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
