import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { parsLocal } from './localStorage'
import {
    fetchRegisterRequest,
    fetchSuccess,
    fetchFailure,
    fetchLoginRequest,
    fetchCardRequest,
    fetchCardSuccess,
    logoutAction
} from "./actions";

const initData = parsLocal();
const initLogged = () => initData.password && initData.email ? true : false;

const data = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: (_state, action) => action.payload,
        [fetchRegisterRequest]: (_state, action) => action.payload,
    },
    initData
);
const cardInfo = handleActions(
    {
        [fetchCardRequest]: (_state, action) => action.payload
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
    initLogged()
);
const isCardAdd = handleActions(
    {
        [fetchCardSuccess]: () => true,
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
export default combineReducers({ cardInfo, data, isCardAdd, isLoading, error, isLoggedIn, token });
