import {FETCH_DATA,REMOVE_DATA, SIGNUP_DATA, FETCH_DATA_FROM_KEY, ERROR_DATA, LOGIN_DATA_I, LOADING_DATA} from '../actions/types'
const initialState = {
    user:false,
    title:"Users",
    searchurl:"https://google.com/",
    data: [
        {
            "id": 1,
            "name": "Rahul Shakya",
            "email": "rahulshakya@hotmail.com",
            "prefix": "Mr.",
            "location": "Patan, Laliptur",
            "mobile": "9866429asd650",
            "status": "Online",
            "profilePic": "profilepic",
            "referred": 0
        }
    ],
    accessKey: "",
    error:false,
    loading:false,
    links:{

    },
    meta:{

    }
}
 
export const userReducer = (state = initialState, action) => {
    switch(action.type){
        
        case LOGIN_DATA_I:
            
            return {
                ...state,
                accessKey: action.payload.access_token,
                loading:false
            }
        case LOADING_DATA:
                return {
                    ...state,
                    loading: action.payload.loading,
                }
        default:
            return state;
    }
}