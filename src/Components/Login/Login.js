import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormLogin from "../Auxillary_components/FormLogin";
import FormRegistry from "../Auxillary_components/FormRegistry";
import { Status } from "../../App";

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
    const inquiry = async user => {
        const url =
            match.path === "/register"
                ? "https://loft-taxi.glitch.me/register"
                : "https://loft-taxi.glitch.me/auth";
        try {
            const responce = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const compl = await responce.json();
            if (compl.success) {
                context.login(user, history, compl.token);
            } else {
                throw new Error(compl.error);
            }
        } catch (e) {
            console.error(e);
        }
    };
    const submit = async (e, form) => {
        e.preventDefault();
        return form === "login"
            ? state.loginMail !== undefined && state.loginPass !== undefined
                ? inquiry({
                      email: state.loginMail,
                      password: state.loginPass
                  })
                : alert("Поля должны быть заполнены")
            : inquiry({
                  email: state.regMail,
                  password: state.regPass,
                  name: state.regName,
                  surname: state.regLastName
              });
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
