import * as types from "../types";

const initialState = {
  selectedVaccine: {},
  loading: false,
  displayed: false,
  displayUpdate: false,
  errors: false,
  list: [],
};

const vaccines = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_VACCINE:
      return {
        ...state,
        selectedVaccine: action.vaccine || {},
      };

    case types.FETCH_VACCINES_REQUEST:
      return { ...state, loading: true, errors: true };
    case types.FETCH_VACCINES_SUCCESS:
      return { ...state, list: [...action.list], loading: false, errors: true };
    case types.FETCH_VACCINES_FAILURE:
      return { ...state, errors: true, loading: false };
    case types.FETCH_VACCINE_BY_ID:
      return {
        ...state,
        selectedVaccine: action.vaccine,
      };

    case types.ADD_VACCINE:
      return {
        ...state,
        list: [...state.list, action.vaccine], // or list: state.list.concat(action.center)
      };

    case types.SET_DISPLAYED_VACCINE:
      return {
        ...state,
        displayed: action.value,
      };
    case types.SET_DISPLAY_UPDATE_VACCINE:
      return {
        ...state,
        displayUpdate: action.value,
      };

    case types.UPDATE_VACCINE:
      const updatedVACCINES = state.list.map((vaccine) => {
        if (vaccine.id === action.vaccine._id) {
          return action.vaccine;
        }
        return vaccine;
      });
      return { ...state, list: updatedVACCINES };

    case types.DELETE_VACCINE:
      const newVaccines = state.list.filter(
        (vaccine) => vaccine.vaccine_type !== action.vaccine
      );
      return { ...state, list: newVaccines };
    default:
      return state;
  }
};
export default vaccines;
