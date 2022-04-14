import * as types from "../../../redux/types";
import * as api from "../../../services/users.service";

export const registerCenter = (user) => async (dispatch) => {
  try {
    const newUser = await api.registerCenter(user);
    dispatch({
      type: types.REGISTER_CENTER,
      user: newUser,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const newUser = await api.addUser(user);
    dispatch({
      type: types.ADD_USER,
      user: newUser,
    });
  } catch (e) {
    console.log(e);
  }
};

// export const updateUser = (user) => async (dispatch) => {
//   try {
//     const updatedUser = await api.updateUser(user);
//     dispatch({
//       type: types.UPDATE_USER,
//       user: updatedUser,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const deleteUser = (id) => async (dispatch) => {
//   await api.deleteUser(id);
//   dispatch({
//     type: types.DELETE_USER,
//     user: id,
//   });
// };

export const getAllUsers = () => async (dispatch) => {
  const list = await api.getAllUsers();
  dispatch({
    type: types.GET_ALL_USER,
    user: list,
  });
};

export const getUserByCin = (cin) => async (dispatch) => {
  try {
    const user = await api.getUserByCin(cin);
    dispatch({
      type: types.GET_USER_BY_CIN,
      user: user,
    });
  } catch (e) {
    console.log(e);
  }
};

export const setSelectedUser = (user) => ({
  type: types.SET_SELECTED_USER,
  user,
});

export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED_USER,
  value,
});

export const setDisplayUpdate = (value) => ({
  type: types.SET_DISPLAY_UPDATE_USER,
  value,
});

export const updateUser = (user) => async (dispatch) => {
  try {
    const updatedUser = await api.updateUser(user);
    dispatch({
      type: types.UPDATE_USER,
      user: updatedUser,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  await api.deleteUser(id);
  dispatch({
    type: types.DELETE_USER,
    user: id,
  });
};
