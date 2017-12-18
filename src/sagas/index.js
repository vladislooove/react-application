import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api';

function* mySaga() {
    yield takeEvery("USER_LOGIN_REQUESTED", logInSaga);
    yield takeLatest("USERS_LIST_FETCH_REQUESTED", getUsersListSaga);
    yield takeLatest("USER_FETCH_REQUESTED", getUserSaga); 
    yield takeEvery("USER_DELETE_REQUESTED", deleteUserSaga);    
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

function* getUserSaga(action) {
    try {
        console.log(action.payload)
        const response = yield call(Api.getUser, action.payload.id)
        yield put({ type: "USER_FETCH_SUCCESSED", payload: response.data.data });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* deleteUserSaga(action) {
    try {
        const response = yield call(Api.deleteUser, action.payload.id)
        yield put({ type: "USER_DELETE_SUCCESSED" });
    } catch (e) {
        yield put({ type: "USER_DELETE_FAILED", message: e.message });
    }
}

export default mySaga;
