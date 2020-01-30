import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormLogin from "./Auxillary_components/FormLogin";
import FormRegistry from "./Auxillary_components/FormRegistry";
import { Status } from "../App";

function Sign({ match, history }) {
    const [state, setState] = useState();
    const context = useContext(Status);
    const getValue = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const form = () => {
        return match.path === "/register" ? (
            <FormRegistry getValue={getValue} submit={submit} />
        ) : (
            <FormLogin getValue={getValue} submit={submit} />
        );
    };

    const submit = (e, form) => {
        e.preventDefault();
        return form === "login"
            ? state.loginMail !== undefined && state.loginPass !== undefined
                ? context.login(
                      {
                          email: state.loginMail,
                          password: state.loginPass
                      },
                      "login",
                      history
                  )
                : alert("Поля должны быть заполнены")
            : context.login(
                  {
                      email: state.regMail,
                      password: state.regPass,
                      name: state.regName,
                      surname: state.regLastName
                  },
                  "register",
                  history
              );
    };

    const buttonForModal = () => {
        const value = match.path === "/register" ? "Войти" : "Зарегистрируйтесь";
        const path = match.path === "/register" ? "/login" : "/register";
        return (
            <Link aria-label="link-btn" className="login-descript__subtitle_prefix" to={path}>
                {value}
            </Link>
        );
    };

    return (
        <section className="section-login" aria-label="sign-section">
            <div className={`login ${match.path === "/register" ? "login_registry" : null}`}>
                <div className="login-descript">
                    <h1 className="login-descript__title">
                        {match.path === "/register" ? "Регистрация" : "Войти"}
                    </h1>
                    <div className="login-descript__subtitle">
                        <span>
                            {match.path === "/register"
                                ? "Уже зарегистрирован? "
                                : "Новый пользователь? "}
                        </span>
                        {buttonForModal()}
                    </div>
                </div>
                {form()}
            </div>
        </section>
    );
}

export default Sign;
