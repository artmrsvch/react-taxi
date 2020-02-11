import { takeEvery, call, put } from "redux-saga/effects";
import { getCardRequest, fetchRequests } from "./fetchRequests";
import { cashCard, cashCardAdd } from "../localStorage";
import { fetchCardRequest, fetchGetCardRequest, fetchCardSuccess, fetchFailure } from "../actions";

export function* paymentSaga() {
    yield takeEvery(fetchCardRequest, function*(action) {
        try {
            const result = yield call(fetchRequests, action, "/card");
            if (result.success) {
                /* Кэшируем данные карты */
                cashCard(action.payload);
                /* Кэшируем что карта была добавлена на сервер */
                cashCardAdd(true);
                yield put(fetchCardSuccess());
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
    yield takeEvery(fetchGetCardRequest, function*(action) {
        try {
            const result = yield call(getCardRequest, action.payload);
            if (result.id) {
                const { cardNumber, expiryDate, cardName, cvc } = result;
                /* Кэшируем данные карты с сервера */
                cashCard({ cardNumber, expiryDate, cardName, cvc, token: action.payload });
                yield put(fetchCardSuccess());
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error));
        }
    });
}
