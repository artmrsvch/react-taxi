import { takeEvery, call, put } from "redux-saga/effects"
import fetchRequests from './fetchRequests'
import { cashLocal } from '../localStorage'
import { fetchSuccess, fetchLoginRequest, fetchFailure } from '../actions'

export function* authorizationSaga() {
    yield takeEvery(fetchLoginRequest, function* (action) {
        try {
            const result = yield call(fetchRequests, action, '/auth');
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