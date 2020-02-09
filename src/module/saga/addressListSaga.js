import { takeEvery, call, put } from "redux-saga/effects"
import { fetchAdressList } from '../actions';

export function* addressListSaga() {
    yield takeEvery(fetchAdressList, function* (action) {
        try {
            const result = yield call(getAdressList);
            /*if (result.success) {
                yield put(fetchSuccess(result));
            } else {
                throw result;
            }*/
        } catch (error) {
            //yield put(fetchFailure(error));
        }
    });
}

const getAdressList = (action, method = 'GET') => {
    const url = `https://loft-taxi.glitch.me/addressList`;
    return fetch(url).then(responce => responce.json())
}