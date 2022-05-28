import React,{useReducer,useContext} from 'react';

import reducer_15 from './reducer_15'
import axios from 'axios';

import { DISPLAY_ALERT,CLEAR_ALERT } from './action_15';

const initialState={
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'', 
    user:'',
    token:''
}

const AppContext_15 = React.createContext();

const AppProvider_15= ({children})=>{

    const[state,dispatch]=useReducer(reducer_15,initialState);

    const displayAlert=()=>{
        dispatch({type:DISPLAY_ALERT});
        clearAlert();
    }
    const clearAlert=()=>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000);
    }

    const registerUser = async ({ currentUser, endPoint, alertText}) => {
        const { data } = await axios.post(`/api/v1/auth_15/${endPoint}`);
        console.log('registerUser data',data)
    }

    return(
        
        <AppContext_15.Provider value={{...state,displayAlert,clearAlert,registerUser}}>
        {children}
        </AppContext_15.Provider>

    )

}

const useAppContext=()=>{
    return useContext(AppContext_15);
}

export{AppProvider_15,initialState,useAppContext}