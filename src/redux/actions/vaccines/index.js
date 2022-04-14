import * as types from "../../types";
import * as api from "../../../services/vaccines.service";

export const setSelectedVaccine = (vaccine) => ({
  type: types.SET_SELECTED_VACCINE,
  vaccine,
});

export const fetchVaccines = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_VACCINES_REQUEST,
  });

  try {
    dispatch({
      type: types.FETCH_VACCINES_SUCCESS,
      list: await api.fetchVaccines(),
    });
  } catch (err) {
    dispatch({
     // type: types.FETCH_VACCINES_FAILURE, // add this line and remove the other two if error back 
      type: types.SET_ERRORS, 
      payload: err.response?.data, 
    });
  }
};

export const getVaccineById = (id) => async (dispatch) => {
  const vaccine = await api.getVaccineById(id);
  dispatch({
    type: types.FETCH_VACCINE_BY_ID,
    vaccine,
  });
};

export const addVaccine = (vaccine) => async (dispatch) => {
  try {
    const newVaccine = await api.addVaccine(vaccine);
    dispatch({
      type: types.ADD_VACCINE,
      vaccine: newVaccine,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const updateVaccine = (vaccine) => async (dispatch) => {
  try {
    const updatedVaccine = await api.updateVaccine(vaccine);
    dispatch({
      type: types.UPDATE_VACCINE,
      vaccine: updatedVaccine,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const deleteVaccine = (vaccine_type) => async (dispatch) => {
  await api.deleteVaccine(vaccine_type);
  dispatch({
    type: types.DELETE_VACCINE,
    vaccine: vaccine_type,
  });
};

export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED_VACCINE,
  value,
});

export const setDisplayUpdate = (value) => ({
  type: types.SET_DISPLAY_UPDATE_VACCINE,
  value,
});
