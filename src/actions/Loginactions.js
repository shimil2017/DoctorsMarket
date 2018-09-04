export const LOGIN_UPDATE = "LOGIN_UPDATE";
export const LOGIN_CHECKING = "LOGIN_CHECKING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL="LOGIN_FAIL"
export const RESET="RESET"
import RestClient from "../utils/restclient";
import { DeviceEventEmitter} from "react-native";
export const LoginUpdate = ({ prop, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: { prop, value }
  };
};

export const reset=()=>{
  return {
    type :RESET
  }
}

export const LoginChecking = ({ body, navigate }) => dispatch => {
 console.log(body);
  dispatch({ type: LOGIN_CHECKING });

  RestClient.post("/apis/login", {}, body).then(response => {
    console.log(response,"login resposne")
    if(response.status===200){ 
      dispatch({type:LOGIN_SUCCESS,payload:response.data})
      navigate("Main")
    }else{
      dispatch({type:LOGIN_FAIL})
      DeviceEventEmitter.emit(
        "showToast",
        response.message
      );
    }
  });
 
};
