import * as types from "../types";

const initialState = {
  selectedCenter: {},
  loading: false,
  displayed: false,
  displayUpdate: false,
  errors: false,
  list: [],
};

const centers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_CENTER:
      return {
        ...state,
        selectedCenter: action.center || {},
      };
    case types.SET_DISPLAYED:
      return {
        ...state,
        displayed: action.value,
      };
    case types.SET_DISPLAY_UPDATE:
      return {
        ...state,
        displayUpdate: action.value,
      };
    case types.SET_DISPLAY_UPDATE_VAC:
      return {
        ...state,
        displayUpdateVac: action.value,
      };

    case types.FETCH_CENTERS_REQUEST:
      return { ...state, loading: true, errors: true };
    case types.FETCH_CENTERS_SUCCESS:
      return { ...state, list: [...action.list], loading: false, errors: true };
    case types.FETCH_CENTERS_FAILURE:
      return { ...state, errors: true, loading: false };
    case types.FETCH_CENTER_BY_ID:
      return {
        ...state,
        selectedCenter: action.center,
      };

    case types.ADD_CENTER:
      return {
        ...state,
        list: [...state.list, action.center], // or list: state.list.concat(action.center)
      };

    case types.UPDATE_CENTER:
      const updatedCenters = state.list.map((center) => {
        if (center.id === action.center._id) {
          return action.center;
        }
        return center;
      });
      return { ...state, list: updatedCenters };

    case types.DELETE_CENTER:
      const newCenters = state.list.filter(
        (center) => center.name !== action.center
      );
      return { ...state, list: newCenters };

    case types.ADD_VACCINE_TO_CENTER:
      const updatedCenterVaccine = state.list.map((center) => {
        if (center._id === action.center._id) { 
          return  {...action.center};
        }
        return center;
      });
      return { ...state, list: updatedCenterVaccine };
    default:
      return state;
  }
};
export default centers;
