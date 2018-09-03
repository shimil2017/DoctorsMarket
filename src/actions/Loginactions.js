export const LOGIN_UPDATE = "LOGIN_UPDATE";
export const LOGIN_CHECKING = "LOGIN_CHECKING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LoginUpdate = ({ prop, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: { prop, value }
  };
};

export const LoginChecking = ({ email, password, navigate }) => dispatch => {
  console.log(email, password);
  dispatch({ type: LOGIN_CHECKING });
  setTimeout(() => {
    dispatch({ type: LOGIN_SUCCESS });
    navigate("Main");
  }, 3000);
};
