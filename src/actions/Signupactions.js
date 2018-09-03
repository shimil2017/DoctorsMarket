export const SIGNUP_UPDATE = "SIGNUP_UPDATE";
export const LOCATION_DETAIL = "LOCATION_DETAIL";
export const RESET="RESET";
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

export const intialState=()=>{
  return {
    type:RESET
  }
}
