import { 
    CLEAR_ALERT, 
    DISPLAY_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_ERROR, 
    LOGIN_USER_BEGIN, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_ERROR,
    LOGOUT_USER,
} from "./action_15";

import { initialState } from "./appContext_15";

const reducer_15 = (state, action) => {
   
    if(action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert: true,
            alertText: 'please provide all values',
            alertType: 'danger'
        }
    }

    if(action.type === CLEAR_ALERT){
        return{
            ...state,
            showAlert:false,
            alertText:'',
            alertType:''
        }
    }

    if( action.type === REGISTER_USER_BEGIN ){
        return { ...state, isLoading: true };
    }

    if( action.type === REGISTER_USER_SUCCESS ){
        return { 
                ...state, 
                isLoading: false,
                showAlert: true,
                alertText: action.payload.alertText,
                alertType:'success',
                user: action.payload.user,
                token: action.payload.token,
                location: action.payload.location,
                 };
    }

    if( action.type === REGISTER_USER_ERROR ){
        return { 
            ...state,
            isLoading: false,
            showAlert: true,
            alertType:'danger',
            alertText: action.payload.msg,
         };
    }

    if( action.type === LOGIN_USER_BEGIN ){
        return { ...state, isLoading: true };
    }

    if( action.type === LOGIN_USER_SUCCESS ){
        return { 
                ...state, 
                isLoading: false,
                showAlert: true,
                alertText: action.payload.alertText,
                alertType:'success',
                user: action.payload.user,
                token: action.payload.token,
                location: action.payload.location,
                 };
    }

    if( action.type === LOGIN_USER_ERROR ){
        return { 
            ...state,
            isLoading: false,
            showAlert: true,
            alertType:'danger',
            alertText: action.payload.msg,
         };
    }

    if (action.type === LOGOUT_USER){
        return{
            ...initialState, 
            isLoading: false,
            
        };
    }
    throw new Error(`no such action: ${action.type}`);
}

export default reducer_15