export const LOGIN_UPDATE = "LOGIN_UPDATE";
//export const LOCATION_DETAIL = "LOCATION_DETAIL";
export const LoginUpdate = ({ prop, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: { prop, value }
  };
};



    