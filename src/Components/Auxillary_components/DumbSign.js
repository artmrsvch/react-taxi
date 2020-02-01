import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "./FormLogin";
import FormRegistry from "./FormRegistry";

function DumbSign({ path, getValue, submit }) {
    const form = () => {
        return path === "/register" ? (
            <FormRegistry getValue={getValue} submit={submit} />
        ) : (
                <FormLogin getValue={getValue} submit={submit} />
            );
    };

    const buttonForModal = () => {
        const value = path === "/register" ? "Войти" : "Зарегистрируйтесь";
        const pathLink = path === "/register" ? "/login" : "/register";
        return (
            <Link aria-label="link-btn" className="login-descript__subtitle_prefix" to={pathLink}>
                {value}
            </Link>
        );
    };
    return (
        <section className="section-login" aria-label="sign-section">
            <div className={`login ${path === "/register" && "login_registry"}`}>
                <div className="login-descript">
                    <h1 className="login-descript__title">
                        {path === "/register" ? "Регистрация" : "Войти"}
                    </h1>
                    <div className="login-descript__subtitle">
                        <span>
                            {path === "/register"
                                ? "Уже зарегистрирован? "
                                : "Новый пользователь? "}
                        </span>
                        {buttonForModal()}
                    </div>
                </div>
                {form()}
            </div>
        </section>
    )
}
export default DumbSign