import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DumbSign from "../DumbSign";
import { BrowserRouter } from "react-router-dom";

describe("Sign render", () => {
    const setup = () => {
        const submit = jest.fn();
        const getValue = jest.fn();
        const path = {
            login: "/login",
            register: "/register",
            uncorrect: "/asdqwdqwds"
        };
        const renderWithProps = path =>
            render(
                <BrowserRouter>
                    <DumbSign path={path} getValue={getValue} submit={submit} />
                </BrowserRouter>
            );
        return {
            renderWithProps,
            path
        };
    };
    it("DumbSign at the DOM", () => {
        const { renderWithProps } = setup();
        const renderSign = renderWithProps();
        expect(renderSign.getByLabelText("sign-section")).toBeInTheDocument();
    });
    describe('At the path "/login"', () => {
        it("Has a link to register.", () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.login);
            const link = renderSign.getByText("Зарегистрируйтесь");
            expect(link).toBeInTheDocument();
            expect(link.tagName).toBe("A");
            expect(link.getAttribute("href")).toBe("/register");
        });
        it('Has a span with text "Новый пользователь?"', () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.login);
            const spanText = renderSign.getByText("Новый пользователь?");
            expect(spanText).toBeInTheDocument();
            expect(spanText.tagName).toBe("SPAN");
        });
        it('Has a title with text "Войти"', () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.login);
            const title = renderSign.getByLabelText("sign-title");
            expect(title).toBeInTheDocument();
            expect(title.textContent).toBe("Войти");
            expect(title.tagName).toBe("H1");
        });
        it('Has a div-container with only one class "login"', () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.login);
            const title = renderSign.getByLabelText("sign-container");
            expect(title.classList.contains("login_registry")).toBeFalsy();
            expect(title.classList[1]).toBe("false");
        });
    });
    describe('At the path "/register"', () => {
        it("Has a link to login.", () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.register);
            const link = renderSign.getByText("Войти");
            expect(link).toBeInTheDocument();
            expect(link.tagName).toBe("A");
            expect(link.getAttribute("href")).toBe("/login");
        });
        it('Has a span with text "Уже зарегистрирован?"', () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.register);
            const spanText = renderSign.getByText("Уже зарегистрирован?");
            expect(spanText).toBeInTheDocument();
            expect(spanText.tagName).toBe("SPAN");
        });
        it('Has a title with text "Регистрация"', () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.register);
            const title = renderSign.getByLabelText("sign-title");
            expect(title).toBeInTheDocument();
            expect(title.textContent).toBe("Регистрация");
            expect(title.tagName).toBe("H1");
        });
        it('Has a div-container with class "login-registry"', () => {
            const { renderWithProps, path } = setup();
            const renderSign = renderWithProps(path.register);
            const title = renderSign.getByLabelText("sign-container");
            expect(title.classList.contains("login_registry")).toBeTruthy();
        });
    });
});
