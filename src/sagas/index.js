import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api';

function* mySaga() {
    yield takeEvery("USER_LOGIN_REQUESTED", logInSaga);
    yield takeEvery('USERS_LIST_FETCH_REQUESTED', getUsersListSaga)
}

function* logInSaga(action) {
    try {
        const response = yield call(Api.logIn, action.payload)
        yield put({ type: "USER_LOGIN_SUCCESSED" });
    } catch (e) {
        yield put({ type: "USER_LOGIN_FAILED", message: e.message });
    }
}

function* getUsersListSaga(action) {
    try {
        const response = yield call(Api.getUsersList, action.payload.page)
        yield put({ 
            type: "USERS_LIST_FETCH_SUCCESSED", 
            payload: {
                page: response.data.page + 1,
                list: response.data.data
            } 
        });
    } catch (e) {
        yield put({ type: "USERS_LIST_FETCH_FAILED", message: e.message });
    }
}

export default mySaga;
