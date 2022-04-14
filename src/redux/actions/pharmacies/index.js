import * as types from "../../types"
import * as api from "../../../services/pharmacies.service"
export const setSelectedPharmacy = (pharmacy) => ({
  type: types.SET_SELECTED_PHARMACY,
  pharmacy
})

export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED_PHARMACY,
  value
})

export const setDisplayUpdate = (value) => ({
  type: types.SET_DISPLAY_UPDATE,
  value
})

export const fetchPharmacies = () => async (dispatch) => {
   dispatch({
     type: types.FETCH_PHARMACIES_REQUEST,
     
   })
   
      try {
         dispatch({
           type: types.FETCH_PHARMACIES_SUCCESS,
           list: await api.fetchPharmacies(),
         })
      } catch (e) {
       dispatch({
         type: types.FETCH_PHARMACIES_FAILURE,
       })
      }
}

export const fetchPharmacyByName = (id) => async (dispatch) => {
  const pharmacy = await api.fetchPharmacyByName(id)
  dispatch ( {
    type: types.FETCH_PHARMACY_BY_ID,
    pharmacy,
  })
}

export const addPharmacy = (pharmacy) => async (dispatch) => {
  const newPharmacy = await api.addPharmacy(pharmacy)
  console.log(newPharmacy)
  newPharmacy? 
  dispatch({
    type: types.ADD_PHARMACY,
    pharmacy: newPharmacy,
  }) : console.log("Error ")
}

export const updatePharmacy = (pharmacy) => async (dispatch) => {
  try{
  const updatedPharmacy = await api.updatePharmacy(pharmacy) 
  dispatch ( {
    type: types.UPDATE_PHARMACY,
    pharmacy: updatedPharmacy,
  })
  }catch(e){
    console.log(e)
  }
  
}
export const deletePharmacy = (name) => async (dispatch) => {
  await api.deletePharmacy(name)
  dispatch ( {
    type: types.DELETE_PHARMACY,
    pharmacy: name
  })
}



