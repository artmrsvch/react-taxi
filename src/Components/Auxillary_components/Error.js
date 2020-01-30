import React from "react";
import { Link } from "react-router-dom";

export default function Error({ message = "Страница не найдена", logout }) {
    const errorBtn = () => {
        return logout ? (
            <button className="btnError" onClick={logout()}>
                Вернуться
            </button>
        ) : (
            <Link to="/" className="btnError">
                Авторизоваться
            </Link>
        );
    };
    return (
        <div className="app app_preloader">
            <h1 className="titleError">{message}</h1>
            {errorBtn()}
        </div>
    );
}
