export const SIGNUP_UPDATE = "SIGNUP_UPDATE";
export const LOCATION_DETAIL = "LOCATION_DETAIL";
export const RESET = "RESET";
import RestClient from "../utils/restclient";
import {
  LOGIN_CHECKING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/Loginactions";
import { DeviceEventEmitter } from "react-native";
import { toast } from "../components/toast";
export const SignupUpdate = ({ prop, value }) => {
  return {
    type: SIGNUP_UPDATE,
    payload: { prop, value }
  };
};

export const LocationUpdate = data => {
  return {
    type: LOCATION_DETAIL,
    payload: data[0]
  };
};

export const intialState = () => {
  return {
    type: RESET
  };
};

export const registraion = ({ formdata, navigate }) => dispatch => {
  console.log(formdata);
  dispatch({ type: LOGIN_CHECKING });
  //console.log(body, "form reigistarion");
  RestClient.imageUpload("/apis/signup", {}, formdata)
    .then(response => {
      console.log(response, "signup resposne");
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        navigate("Main");
      } else {
        dispatch({ type: LOGIN_FAIL });

        toast({ text: response.message });
      }
    })
    .catch(eror => {
      console.log(eror);
      // alert(eror);
    });
};
