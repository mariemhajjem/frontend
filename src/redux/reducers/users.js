import * as types from "../types";

const initialState = {
  selectedUser: {},
  loading: false,
  displayed: false,
  displayUpdate: false,
  errors: false,
  list: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DISPLAYED_USER:
      return {
        ...state,
        displayed: action.value,
      };
    case types.SET_DISPLAY_UPDATE_USER:
      return {
        ...state,
        displayUpdate: action.value,
      };
    case types.REGISTER_CENTER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    case types.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.user || {},
      };
    case types.ADD_USER:
      return {
        ...state,
        list: [state.list[0].concat(action.user)],
      };
    // update del (ines ..)

    case types.UPDATE_USER:
      const updatedUsers = state.list[0].map((user) => {
        if (user._id === action.user._id) {
          return action.user;
        }
        return user;
      });
      return { ...state.list, list: [updatedUsers] };

    case types.DELETE_USER:
      const newList = state.list[0].filter((user) => user._id !== action.user);

      return { ...state.list, list: [newList] };

    case types.GET_ALL_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };

    case types.GET_USER_BY_CIN:
      return {
        ...state,
        selectedUser: action.user,
      };
    default:
      return state;
  }
};

export default users;
