import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";
import FormLogin from "../Auxillary_components/FormLogin";
import FormRegistry from "../Auxillary_components/FormRegistry";
import { Status } from "../../App";

function Sign({ type, handleClick }) {
    const [state, setState] = useState();
    const context = useContext(Status);
    const getValue = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const form = () => {
        return type === "login" ? (
            <FormLogin getValue={getValue} submit={submit} />
        ) : (
            <FormRegistry getValue={getValue} submit={submit} />
        );
    };

    const submit = (e, form) => {
        e.preventDefault();

        return form === "login"
            ? state.loginName !== undefined && state.loginPass !== undefined
                ? context.login(form, state)
                : alert("Поля должны быть заполнены")
            : context.login(form, state);
    };

    const buttonForModal = () => {
        const value = type === "login" ? "Зарегистрируйтесь" : "Войти";
        const handler = type === "login" ? handleClick("signin") : handleClick("login");
        return (
            <button className="login-descript__subtitle_prefix" onClick={handler}>
                {value}
            </button>
        );
    };

    return (
        <section className="section-login">
            <div className={`login ${type === "login" ? null : "login_registry"}`}>
                <div className="login-descript">
                    <h1 className="login-descript__title">
                        {type === "login" ? "Войти" : "Регистрация"}
                    </h1>
                    <div className="login-descript__subtitle">
                        <span>
                            {type === "login" ? "Новый пользователь? " : "Уже зарегистрирован? "}
                        </span>
                        {buttonForModal()}
                    </div>
                </div>
                {form()}
            </div>
        </section>
    );
}

Sign.propTypes = {
    type: PropTypes.oneOf(["login", "signin"]).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Sign;
