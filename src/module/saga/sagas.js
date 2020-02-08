import { takeEvery, call, put } from "redux-saga/effects"
import fetchRequests from './fetchRequests'
import { cashLocal } from '../localStorage'
import { fetchRegisterRequest, fetchSuccess, fetchLoginRequest, fetchCardRequest, fetchCardSuccess, fetchFailure } from '../actions'

export function* handleRequest() {
    yield takeEvery(fetchRegisterRequest, function* (action) {
        try {
            const result = yield call(fetchRequests, action, '/register');
            if (result.success) {
                yield put(fetchSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });

    yield takeEvery(fetchLoginRequest, function* (action) {
        try {
            const result = yield call(fetchRequests, action, '/auth');
            if (result.success) {
                cashLocal(action.payload.email, action.payload.password)
                yield put(fetchSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
    yield takeEvery(fetchCardRequest, function* (action) {
        try {
            const result = yield call(fetchRequests, action, '/card');
            if (result.success) {
                yield put(fetchCardSuccess());
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
}