import { SET_ERRORS,CLEAR_ERRORS } from '../types';

const initialState = {
    message :"",
    code:""
};

const setErrors = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS: 
            return {...state,message: action.payload.message,code:action.payload.code};
        case CLEAR_ERRORS: 
            return {...state,message: "",code:""};
        default:
            return state;
    }
}

export default setErrors


