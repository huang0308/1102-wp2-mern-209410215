import React,{useReducer,useContext} from 'react';

import reducer_15 from './reducer_15'

import { DISPLAY_ALERT,CLEAR_ALERT } from './action_15';

const initialState={
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',

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

    return(
        
        <AppContext_15.Provider value={{...state,displayAlert,clearAlert}}>
        {children}
        </AppContext_15.Provider>

    )

}

const useAppContext=()=>{
    return useContext(AppContext_15);
}

export{AppProvider_15,initialState,useAppContext}