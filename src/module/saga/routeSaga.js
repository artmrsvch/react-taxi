import { takeEvery, call, put } from "redux-saga/effects";
import { fetchRoute, fetchRouteSuccess, fetchFailure } from "../actions";

export function* routeSaga() {
    yield takeEvery(fetchRoute, function* ({ payload }) {
        try {
            const result = yield call(
                getRoute,
                payload.address1,
                payload.address2
            );
            if (result) {
                yield put(fetchRouteSuccess({ coords: result, status: true }));
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
