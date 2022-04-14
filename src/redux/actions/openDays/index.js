import * as types from "../../../redux/types";
import * as api from "../../../services/openday.service";



export const AddOpenDay = (openday) => async (dispatch) => {
  try {
    const newOpenDay = await api.AddOpenDay(openday);
    dispatch({
      type: types.ADD_OPEN_DAY,
      openDay: newOpenDay,
    });
  } catch (e) {
    console.log(e);
  }
};


export const fetchOpenDays = () => async (dispatch) => {
  
  const list = await api.fetchOpenDay();
  dispatch({
    type: types.GET_ALL_OPEN_DAYS,
    OpenDays: list,
  });
};

export const setSelectedOpenDay = (openday) => ({
  type: types.SET_SELECTED_OPEN_DAY,
  openday,
});

export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED_OPEN_DAY,
  value,
});

export const setDisplayUpdate = (value) => ({
  type: types.SET_DISPLAY_UPDATE_OPEN_DAY,
  value,
});

export const updateOpenDay = (openday) => async (dispatch) => {
  try {
    const updatedOpenDay = await api.updateOpenDay(openday);
    dispatch({
      type: types.UPDATE_OPEN_DAY,
      openDay: updatedOpenDay,
    });
  } catch (e) {
    console.log(e);
  }
};


