import { HOST,FETCH_DATA,REMOVE_DATA, LOGIN_DATA, FETCH_DATA_FROM_KEY,SIGNUP_DATA, LOADING_DATA} from '../actions/types'
export const loginDatas = (credentials) =>({
    type:LOGIN_DATA,
    payload:credentials,
});