import { takeEvery, call, put } from "redux-saga/effects"
import fetchRequests from './fetchRequests'
import { cashLocal } from '../localStorage'
import { fetchRegisterRequest, fetchSuccess, fetchFailure } from '../actions';


export function* registrationSaga() {
    yield takeEvery(fetchRegisterRequest, function* (action) {
        try {
            const result = yield call(fetchRequests, action, '/register');
            if (result.success) {
                cashLocal(action.payload.email, action.payload.password, result.token)
                yield put(fetchSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
}