import { createAction } from "redux-actions";

export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST");
export const fetchLoginRequest = createAction("FETCH_LOGIN_REQUEST");
export const fetchCardRequest = createAction("FETCH_CARD_REQUEST");
export const logoutAction = createAction("LOGOUT_ACTION");
export const fetchSuccess = createAction("FETCH_SUCCESS");
export const fetchCardSuccess = createAction("FETCH_CARD_SUCCESS");
export const fetchFailure = createAction("FETCH_FAILURE");
export const fetchAdressList = createAction("FETCH_ADRESS_LIST");
export const fetchRoute = createAction("FETCH_ROUTE");
