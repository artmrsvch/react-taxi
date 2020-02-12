import { takeEvery, call, put } from "redux-saga/effects";
import { fetchAdressList, fetchGetAdressSucces, fetchFailure } from "../actions";

export function* addressListSaga() {
    yield takeEvery(fetchAdressList, function*() {
        try {
            const result = yield call(getAdressList);
            if (result.addresses) {
                yield put(fetchGetAdressSucces(result.addresses));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
}

const getAdressList = () => {
    const url = `https://loft-taxi.glitch.me/addressList`;
    return fetch(url).then(responce => responce.json());
};
