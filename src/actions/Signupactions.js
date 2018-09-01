export const SIGNUP_UPDATE = "SIGNUP_UPDATE";
export const SignupUpdate = ({ prop, value }) => {
  return {
    type: SIGNUP_UPDATE,
    payload: { prop, value }
  };
};
