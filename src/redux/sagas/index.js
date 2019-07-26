import { put, takeLatest, all } from 'redux-saga/effects';
import { HOST,FETCH_DATA,FETCH_DATA_I,FETCH_USER_DATA,FETCH_USER_DATA_I,LOADING_DATA_I,REMOVE_DATA, LOGIN_DATA,LOGIN_DATA_I, FETCH_DATA_FROM_KEY,SIGNUP_DATA, LOADING_DATA} from '../actions/types'
import { Actions } from 'react-native-router-flux';
function* loginData(action) {
  let resdata = null;
  let loggedInUser = null;
  yield fetch(HOST+'/api/auth/login',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
      },
      body:JSON.stringify(action.payload)
  })
  .then(res => res.json()) 
  .then(data =>  
    resdata = data
      )
  yield fetch(HOST+'/api/auth/me',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+resdata.access_token,
        'Accept':'application/json'
      }
  })
  .then(res => res.json()) 
  .then(data =>  
    loggedInUser = data
      )
  
  yield put({ type: LOGIN_DATA_I, payload: resdata, loggedInUser: loggedInUser })
  Actions.dashboard();
  //console.warn("gggg",loggedIndata);
}
function* fetchData(action) {
  let resdata = null;
  yield fetch(HOST+'/api/auth/user',{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+action.payload,
        'Accept':'application/json'
    }
})
.then(res => res.json())
.then(data =>  
      resdata = data
    )
      
  yield put({ type: FETCH_DATA_I, payload: resdata, })
  //console.warn(resdata,accesskey); 
}
function* fetchUserData(action) {
  let resdata = null;
  yield fetch(HOST+'/api/auth/user/'+action.payload.id,{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+action.payload.accesskey,
          'Accept':'application/json'
      }
  })
  .then(res => res.json())
  .then(data =>  
        resdata = data
  )   
  yield put({ type: FETCH_USER_DATA_I, payload: resdata, })
  Actions.userview();
}
function* loadingData(action){
  yield put({ type:LOADING_DATA_I})
}
function* actionWatcher() {
  yield takeLatest(LOGIN_DATA,loginData)
  yield takeLatest(FETCH_DATA,fetchData)
  yield takeLatest(FETCH_USER_DATA,fetchUserData)
  yield takeLatest(LOADING_DATA,loadingData)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}