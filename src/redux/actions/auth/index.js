import * as types from "../../types";
import * as api from "../../../services/auth.service";

export const login = (user) => async (dispatch) => {
  dispatch({
    type: types.FETCH_USER_REQUEST,
  });

  try {
    const loggedUser = await api.login(user);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: loggedUser,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: types.LOGIN_FAIL,
      payload: {
        loggedIn: false,
        message: e.response.data.message,
      },
    });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_USER_REQUEST,
  });

  localStorage.removeItem("token");
  dispatch({
    type: types.LOGIN_FAIL,
    payload: {
      token: null,
      user: null,
    },
  });
};
