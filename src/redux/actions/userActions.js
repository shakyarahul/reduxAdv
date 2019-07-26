import { HOST,FETCH_DATA,FETCH_USER_DATA,LOADING_DATA_I,REMOVE_DATA, LOGIN_DATA, FETCH_DATA_FROM_KEY,SIGNUP_DATA, LOADING_DATA} from '../actions/types'
export const loginDatas = (credentials) =>({
    type:LOGIN_DATA,
    payload:credentials,
});
export const fetchDatas = (accesskey) =>({
    type:FETCH_DATA,
    payload:accesskey,
});
export const fetchUserData = (accesskey,id) =>({
    type:FETCH_USER_DATA,
    payload:{
        accesskey,
        id
    }
});
export const loadingData = () =>({
    type:LOADING_DATA,
});