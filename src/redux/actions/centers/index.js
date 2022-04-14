import * as types from "../../../redux/types";
import * as api from "../../../services/centers.service";
export const setSelectedCenter = (center) => ({
  type: types.SET_SELECTED_CENTER,
  center,
});

export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED,
  value,
});

export const setDisplayUpdate = (value) => ({
  type: types.SET_DISPLAY_UPDATE,
  value,
});

export const setDisplayUpdateVac = (value) => ({
  type: types.SET_DISPLAY_UPDATE_VAC,
  value,
});

export const fetchCenters = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_CENTERS_REQUEST,
  });

  try {

    dispatch({
      type: types.FETCH_CENTERS_SUCCESS,
      list: await api.fetchCenters(),
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_CENTERS_FAILURE,
    });
  }
};

export const fetchCenterByName = (id) => async (dispatch) => {
  try {
    const center = await api.fetchCenterByName(id);
    dispatch({
      type: types.FETCH_CENTER_BY_ID,
      center,
    });
  }catch(err){
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const addCenter = (center) => async (dispatch) => {
  try {
    const newCenter = await api.addCenter(center);
    dispatch({
      type: types.ADD_CENTER,
      center: newCenter, 
    });
  } catch (err) {
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const updateCenter = (center) => async (dispatch) => {
  try {
    const updatedCenter = await api.updateCenter(center);
    dispatch({
      type: types.UPDATE_CENTER,
      center: updatedCenter,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data
    })
  }
};
export const deleteCenter = (name) => async (dispatch) => {
  try {
    await api.deleteCenter(name);
    dispatch({
      type: types.DELETE_CENTER,
      center: name,
    });
  }catch(err){
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data
    })
  }
};

export const addVaccineToCenter = (nameCenter, idVaccin, quantity) => async (
  dispatch
) => {
  try {const center = await api.updateCenterVaccine(nameCenter, idVaccin, quantity); //await call api
  dispatch({
    type: types.ADD_VACCINE_TO_CENTER,
    center: center,
  });
  }catch(err){
    dispatch({
      type: types.SET_ERRORS,
      payload: err.response.data
    })
  }
  //dispatch action ....
};
