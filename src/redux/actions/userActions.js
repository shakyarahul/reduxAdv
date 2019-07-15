import { HOST,FETCH_DATA,REMOVE_DATA, LOGIN_DATA, FETCH_DATA_FROM_KEY,SIGNUP_DATA, LOADING_DATA} from '../actions/types'
export const loginDatas = (datas) =>async dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    await fetch(HOST+'/api/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(datas)
    })
    .then(res => res.json())
    .then(data =>  
        dispatch({
            type: LOGIN_DATA,
            payload: {
                data:data.access_token && data.access_token,
                message:data.message && data.message
            }
        })
    )
    
    //return 0;
}