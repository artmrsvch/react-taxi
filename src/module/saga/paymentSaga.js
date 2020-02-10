import { takeEvery, call, put } from "redux-saga/effects"
import fetchRequests from './fetchRequests'
import { cashCard } from '../localStorage'
import { fetchCardRequest, fetchCardSuccess, fetchFailure } from '../actions'

export function* paymentSaga() {
    yield takeEvery(fetchCardRequest, function* (action) {
        try {
            const result = yield call(fetchRequests, action, '/card');
            if (result.success) {
                cashCard(action.payload)
                yield put(fetchCardSuccess());
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
}