import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormRegistry from "../FormRegistry";
import { BrowserRouter } from "react-router-dom";

describe("FormRegistry render", () => {
    const setup = () => {
        const submit = jest.fn();
        const getValue = jest.fn();
        const renderForm = render(
            <BrowserRouter>
                <FormRegistry getValue={getValue} submit={submit} />
            </BrowserRouter>
        );
        return {
            renderForm,
            submit,
            getValue
        };
    };
    it("form-registry at the DOM", () => {
        const { renderForm } = setup();
        const FormRegistry = renderForm.getByLabelText("registry");
        expect(FormRegistry).toBeInTheDocument();
    });
    it("form-registry have email and password inputs", () => {
        const { renderForm } = setup();
        const FormRegistry = renderForm.getByLabelText("registry");
        expect(FormRegistry.elements.email).toBeInTheDocument();
        expect(FormRegistry.elements.password).toBeInTheDocument();
        expect(FormRegistry.elements.regName).toBeInTheDocument();
        expect(FormRegistry.elements.regLastName).toBeInTheDocument();
    });
    it("when form submitting, called props.submit", () => {
        const { renderForm, submit } = setup();
        const FormRegistry = renderForm.getByLabelText("registry");
        fireEvent.submit(FormRegistry);
        expect(submit).toHaveBeenCalled();
    });
    it("when entring text, called props.getValue", () => {
        const { renderForm, getValue } = setup();
        const FormRegistry = renderForm.getByLabelText("registry");
        fireEvent.change(FormRegistry.elements.password, { target: { value: "55" } });
        fireEvent.change(FormRegistry.elements.email, { target: { value: "gmail" } });
        fireEvent.change(FormRegistry.elements.regName, { target: { value: "name" } });
        fireEvent.change(FormRegistry.elements.regLastName, { target: { value: "lastname" } });
        expect(getValue).toHaveBeenCalledWith("password", "55");
        expect(getValue).toHaveBeenCalledWith("email", "gmail");
        expect(getValue).toHaveBeenCalledWith("regName", "name");
        expect(getValue).toHaveBeenCalledWith("regLastName", "lastname");
        expect(getValue).toHaveBeenCalledTimes(4);
    });
});
