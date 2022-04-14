import * as types from "../types";

const initialState = {
  selectedOpenDay: {},
  loading: false,
  displayed: false,
  displayUpdate: false,
  errors: false,
  list: [],
};

const openDays = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DISPLAYED_OPEN_DAY:
      return {
        ...state,
        displayed: action.value,
      }; 
    case types.SET_DISPLAY_UPDATE_OPEN_DAY:
      return {
        ...state,
        displayUpdate: action.value,
      };

    case types.GET_ALL_OPEN_DAYS:
      return { ...state, list: [...action.OpenDays], loading: false, errors: false };

    case types.ADD_OPEN_DAY:
      return {
        ...state,
        list: [...state.list, action.openDay], // or list: state.list.concat(action.center)
      };


    default:
      return state;
  }
};
export default openDays;
