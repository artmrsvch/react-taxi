import { createAction } from "redux-actions";

export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST");
export const fetchLoginRequest = createAction("FETCH_LOGIN_REQUEST");
export const logoutAction = createAction("LOGOUT_ACTION");
export const fetchSuccess = createAction("FETCH_SUCCESS");
export const fetchFailure = createAction("FETCH_FAILURE");
