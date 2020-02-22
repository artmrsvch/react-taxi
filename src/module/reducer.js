import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { parsLocal, parsCard } from "./localStorage";
import {
    fetchRegisterRequest,
    fetchSuccess,
    fetchFailure,
    fetchRouteSuccess,
    fetchLoginRequest,
    fetchCardRequest,
    fetchCardSuccess,
    fetchGetCardSuccess,
    fetchGetAdressSucces,
    logoutAction,
    routeReset
} from "./actions";

const { email, password, token } = parsLocal();
const initCard = parsCard();
/* Если в кэше есть данные карты и там 5 необходимых ключей - карта добавлена в профиль */
const initCardAdd = () => initCard !== "" && (Object.keys(initCard).length === 5 ? true : false);
/* Если в кэше есть логин и пароль - авторизируем */
const initLogged = () => (password && email ? true : false);

/* Хранит данные авторизации */
const data = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: (_state, action) => action.payload,
        [fetchRegisterRequest]: (_state, action) => action.payload
    },
    { email, password }
);
/* Хранит данные карты */
const cardInfo = handleActions(
    {
        [fetchCardRequest]: (_state, action) => action.payload,
        [fetchGetCardSuccess]: (_state, action) => action.payload
    },
    initCard
);
/* Cписок адрессов */
const adressList = handleActions(
    {
        [fetchGetAdressSucces]: (_state, action) => action.payload
    },
    []
);
/* Выбранный маршрут */
const selectRoute = handleActions(
    {
        [fetchRouteSuccess]: (_state, action) => action.payload,
        [routeReset]: (_state, action) => action.payload,
    },
    { status: false, coords: null }
);
/* Хранит токен */
const tokenSession = handleActions(
    {
        [logoutAction]: () => [],
        [fetchLoginRequest]: () => [],
        [fetchRegisterRequest]: () => [],
        [fetchSuccess]: (_state, action) => action.payload.token
    },
    token ? token : []
);
/* Отображает процесс ответа сервера. Если true, то прогружает компонент прелоадера */
const isLoading = handleActions(
    {
        [fetchLoginRequest]: () => true,
        [fetchRegisterRequest]: () => true,
        [fetchSuccess]: () => false,
        [fetchFailure]: () => false
    },
    false
);
/* Состояние авторизации авторизации */
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
/* Добалена ли данные карты на сервер */
const isCardAdd = handleActions(
    {
        [fetchCardSuccess]: () => true,
        [fetchGetCardSuccess]: () => true
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
export default combineReducers({
    cardInfo,
    data,
    isCardAdd,
    isLoading,
    selectRoute,
    error,
    isLoggedIn,
    adressList,
    tokenSession
});
