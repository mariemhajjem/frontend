import * as types from "../../../redux/types";
import * as api from "../../../services/RDV.service.js";

export const updateRDV = (appointId,appoint) => async (dispatch) => {
  try {
    await api.updateRDV(appointId,appoint);
    dispatch({
      type: types.UPDATE_RDV,
      updatedRDV: appoint,
    });
  } catch (e) {
    console.log(e);
  }
};
