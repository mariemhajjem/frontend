import * as types from "../types"

const initialState = {
  selectedPharmacy: {},
  loading: false,
  displayed:false,
  displayUpdate:false,
  errors: false,
  list: [],
}

const pharmacies = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_PHARMACY:
      return {
        ...state,
        selectedPharmacy: action.pharmacy || {},
      }
    case types.SET_DISPLAYED_PHARMACY:
      return {
        ...state,
        displayed: action.value,
      } 
    case types.SET_DISPLAY_UPDATE: 
      return {
        ...state,
        displayUpdate: action.value,
      }  
    case types.FETCH_PHARMACIES_REQUEST:
      return { ...state, loading: true, errors: true }
    case types.FETCH_PHARMACIES_SUCCESS: 
       return { ...state, list: [...action.list], loading: false, errors:true }
    case types.FETCH_PHARMACIES_FAILURE:
      return { ...state, errors: true, loading: false }
    case types.FETCH_PHARMACY_BY_ID:
      return {
        ...state,
        selectedPharmacy: action.pharmacy,
      }

    case types.ADD_PHARMACY: 
      return {
        ...state,
        list: [...state.list, action.pharmacy], // or list: state.list.concat(action.pharmacy)
      }

    case types.UPDATE_PHARMACY:
      const updatedPharmacies = state.list.map((pharmacy) => {
        if (pharmacy.id === action.pharmacy._id) {
          return action.pharmacy
        }
        return pharmacy
      })
      return { ...state, list: updatedPharmacies }

    case types.DELETE_PHARMACY:
      const newPharmacies = state.list.filter((pharmacy) => pharmacy.name !== action.pharmacy)
      console.log(newPharmacies)
      return { ...state, list: newPharmacies }
    default:
      return state
  }
}
export default pharmacies
