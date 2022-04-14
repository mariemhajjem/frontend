import * as types from "../types";

const initialState = {
  currentRDV : null,
  updatedRDV : null
};

const updateRDV = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_RDV:
      return {
        ...state,
        updatedRDV: action.payload,
      };
    default:
      return state;
  }
};

export default updateRDV;