import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormLogin from "../FormLogin";
import { BrowserRouter } from "react-router-dom";

describe("FormLogin render", () => {
    const setup = () => {
        const submit = jest.fn();
        const getValue = jest.fn();
        const renderForm = render(
            <BrowserRouter>
                <FormLogin getValue={getValue} submit={submit} />
            </BrowserRouter>
        );
        return {
            renderForm,
            submit,
            getValue
        };
    };
    it("form-login at the DOM", () => {
        const { renderForm } = setup();
        const formLogin = renderForm.getByLabelText("login");
        expect(formLogin).toBeInTheDocument();
    });
    it("form-login have email and password inputs", () => {
        const { renderForm } = setup();
        const formLogin = renderForm.getByLabelText("login");
        expect(formLogin.elements.email).toBeInTheDocument();
        expect(formLogin.elements.password).toBeInTheDocument();
    });
    it("when form submitting, called props.submit", () => {
        const { renderForm, submit } = setup();
        const formLogin = renderForm.getByLabelText("login");
        fireEvent.submit(formLogin);
        expect(submit).toHaveBeenCalled();
    });
    it("when entring text, called props.getValue", () => {
        const { renderForm, getValue } = setup();
        const formLogin = renderForm.getByLabelText("login");
        fireEvent.change(formLogin.elements.password, { target: { value: "55" } });
        fireEvent.change(formLogin.elements.email, { target: { value: "gmail" } });
        expect(getValue).toHaveBeenCalledWith("password", "55");
        expect(getValue).toHaveBeenCalledWith("email", "gmail");
    });
});
