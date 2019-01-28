import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
 
import axios from 'axios'

function* getInitList() {
  const res = yield axios.get('http://localhost:3001/api/mark/a')
  const data = initListAction(res.data);
  yield put(data)
}

function* mySaga() {
  //yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;