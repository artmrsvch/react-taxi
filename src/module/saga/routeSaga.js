import { takeEvery, call, put } from "redux-saga/effects";
import { fetchRoute, fetchRouteSuccess, fetchFailure } from "../actions";

export function* routeSaga() {
    yield takeEvery(fetchRoute, function*({ payload }) {
        try {
            console.log(payload);
            const result = yield call(
                getRoute,
                payload.adressRequest.address1,
                payload.adressRequest.address2
            );
            console.log("result", result);
            if (result) {
                yield put(fetchRouteSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
}

const getRoute = (address1, address2) => {
    const url = `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`;
    console.log("url", url);
    return fetch(url).then(responce => responce.json());
};
