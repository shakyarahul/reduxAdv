import { put, takeLatest, all } from 'redux-saga/effects';
import { HOST,FETCH_DATA,REMOVE_DATA, LOGIN_DATA,LOGIN_DATA_I, FETCH_DATA_FROM_KEY,SIGNUP_DATA, LOADING_DATA} from '../actions/types'
function* loginData(datas) {
  let resdata = null;
  console.warn(datas.payload);
  yield fetch(HOST+'/api/auth/login',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
      },
      body:JSON.stringify(datas.payload)
  })
  .then(res => res.json())
  .then(data =>  
    resdata = data
      )
      
  yield put({ type: LOGIN_DATA_I, payload: resdata, })
  console.warn(resdata);
}
function* actionWatcher() {
     yield takeLatest(LOGIN_DATA,loginData)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}