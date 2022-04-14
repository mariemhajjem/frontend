import * as types from "../types";
import jwt_decode from "jwt-decode";
const loggedUser = localStorage.getItem("token")
  ? jwt_decode(localStorage.getItem("token"))
  : null;

const initialState = loggedUser
  ? { isLoggedIn: true, loggedUser }
  : { isLoggedIn: false, loggedUser: null };

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loggedUser: payload.user,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: payload.loggedIn,
        loggedUser: null,
        errorMessage: payload.message,
      };

    default:
      return state;
  }
};

export default auth;
