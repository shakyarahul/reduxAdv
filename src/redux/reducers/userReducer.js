import {FETCH_DATA,FETCH_DATA_I,FETCH_USER_DATA_I,REMOVE_DATA, SIGNUP_DATA, FETCH_DATA_FROM_KEY, ERROR_DATA, LOGIN_DATA_I, LOADING_DATA} from '../actions/types'
import { Actions } from 'react-native-router-flux';
const initialState = {
    user:{},
    title:"Users",
    searchurl:"https://google.com/",
    data: [
    ],
    accessKey: "",
    error:false,
    loading:false,
    links:{

    },
    meta:{

    },
    loading:false,
    loggedInUser:null
}
 
export const userReducer = (state = initialState, action) => {
    switch(action.type){
        
        case LOGIN_DATA_I:
            //console.log("action",action);
            return {
                ...state,
                accessKey: action.payload.access_token,
                loggedInUser:action.loggedInUser,
                loading:false
            }
        case FETCH_DATA_I:
            return {
                ...state,
                data:action.payload.data,
                loading:false
            }   
        case FETCH_USER_DATA_I:
                return {
                    ...state,
                    user: action.payload.data,
                    loading:false
                }
        case LOADING_DATA:
                return {
                    ...state,
                    loading: true,
                }
        default:
            return state;
    }
}