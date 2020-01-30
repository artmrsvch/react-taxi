import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
    fetchRegisterRequest,
    fetchSuccess,
    fetchFailure,
    fetchLoginRequest,
    logoutAction
} from "./actions";

const data = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: (_state, action) => action.payload,
        [fetchRegisterRequest]: (_state, action) => action.payload
    },
    []
);
const token = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: () => [],
        [fetchRegisterRequest]: () => [],
        [fetchSuccess]: (_state, action) => action.payload.token
    },
    []
);
const isLoading = handleActions(
    {
        [fetchLoginRequest]: () => true,
        [fetchRegisterRequest]: () => true,
        [fetchSuccess]: () => false,
        [fetchFailure]: () => false
    },
    false
);
const isLoggedIn = handleActions(
    {
        [logoutAction]: () => false,
        [fetchLoginRequest]: () => false,
        [fetchRegisterRequest]: () => false,
        [fetchSuccess]: () => true,
        [fetchFailure]: () => false
    },
    false
);

const error = handleActions(
    {
        [logoutAction]: () => null,
        [fetchSuccess]: () => null,
        [fetchFailure]: (_state, action) => action.payload.error
    },
    null
);
export default combineReducers({ data, isLoading, error, isLoggedIn, token });
