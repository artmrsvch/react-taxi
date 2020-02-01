import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../module/actions";

export default function Error({ message = "Страница недоступна", route }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = () => {
        route ? history.push('/') : history.push('/login')
        dispatch(logoutAction())
    }
    const errorBtn = (route) => {
        return (
            <button className="btnError" onClick={handleClick}>
                {route ? 'Авторизоваться' : 'Вернуться'}
            </button>
        )
    };
    return (
        <div className="app app_error">
            <h1 className="titleError">{message}</h1>
            {errorBtn(route)}
        </div>
    );
}
