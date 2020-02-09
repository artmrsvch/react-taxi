import { fork } from "redux-saga/effects"
import { registrationSaga } from './registrationSaga'
import { authorizationSaga } from './authorizationSaga'
import { paymentSaga } from './paymentSaga'
import { addressListSaga } from './addressListSaga'

export function* handleRequest() {
    yield fork(registrationSaga);
    yield fork(authorizationSaga);
    yield fork(paymentSaga);
    yield fork(addressListSaga);
}