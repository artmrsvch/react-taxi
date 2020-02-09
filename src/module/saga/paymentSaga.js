import { takeEvery, call, put } from "redux-saga/effects"
import fetchRequests from './fetchRequests'
import { fetchCardRequest, fetchCardSuccess, fetchFailure } from '../actions'

export function* paymentSaga() {
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