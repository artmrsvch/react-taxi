import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { parsLocal, parsCard } from './localStorage'
import {
    fetchRegisterRequest,
    fetchSuccess,
    fetchFailure,
    fetchLoginRequest,
    fetchCardRequest,
    fetchCardSuccess,
    logoutAction
} from "./actions";

const { email, password, token } = parsLocal();
const initCard = parsCard();
const initCardAdd = () => Object.keys(initCard).length === 4 ? true : false;
const initLogged = () => password && email ? true : false;

const data = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: (_state, action) => action.payload,
        [fetchRegisterRequest]: (_state, action) => action.payload,
    },
    { email, password }
);
const cardInfo = handleActions(
    {
        [fetchCardRequest]: (_state, action) => action.payload
    },
    initCard
);
const tokenSession = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: () => [],
        [fetchRegisterRequest]: () => [],
        [fetchSuccess]: (_state, action) => action.payload.token
    },
    token ? token : []
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
    initCardAdd()
);

const error = handleActions(
    {
        [logoutAction]: () => null,
        [fetchSuccess]: () => null,
        [fetchFailure]: (_state = null, action) => action.payload.error
    },
    null
);
export default combineReducers({ cardInfo, data, isCardAdd, isLoading, error, isLoggedIn, tokenSession });
