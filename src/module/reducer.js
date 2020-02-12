import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { parsLocal, parsCard, parsCardActive } from "./localStorage";
import {
    fetchRegisterRequest,
    fetchSuccess,
    fetchFailure,
    fetchRouteSuccess,
    fetchLoginRequest,
    fetchCardRequest,
    fetchCardSuccess,
    fetchGetCardRequest,
    fetchGetAdressSucces,
    logoutAction
} from "./actions";

const { email, password, token } = parsLocal();
const initCard = parsCard();
/* Если в кэше есть данные карты и там 5 необходимых ключей - карта добавлена в профиль */
const initCardAdd = () => initCard !== "" && (Object.keys(initCard).length === 5 ? true : false);
/* Если в кэше есть логин и пароль - авторизируем */
const initLogged = () => (password && email ? true : false);
/* Если авторизованы, карта была добавлена, но не отображена в профиле - бежим на сервер */
const initCardActive = () => (isLoggedIn && parsCardActive() && !isCardAdd ? true : false);

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
        [fetchGetCardRequest]: (_state, action) => action.payload
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
        [fetchRouteSuccess]: (_state, action) => action.payload
    },
    []
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
        [fetchCardSuccess]: () => true
    },
    initCardAdd()
);
/* Нужна для GET запроса на сервер если карта была добавлена но в кэше пусто) */
const isCardActive = handleActions(
    {
        [fetchCardSuccess]: () => true
    },
    initCardActive()
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
    isCardActive,
    isLoading,
    selectRoute,
    error,
    isLoggedIn,
    adressList,
    tokenSession
});
