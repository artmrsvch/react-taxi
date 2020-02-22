import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "../Input";
import { BrowserRouter } from "react-router-dom";

describe("FormLogin render", () => {
    const setup = () => {
        const getValue = jest.fn();
        const settings = {
            descript: "рандомСтринг",
            name: "inputName",
            form: {
                reg: "registr",
                log: "login"
            },
            type: "text",
            setClass: "defaultClass"
        };
        const renderInput = (descript, name, form, type, setClass) => {
            return render(
                <BrowserRouter>
                    <Input
                        getValue={getValue}
                        setClass={setClass}
                        type={type}
                        form={form}
                        name={name}
                        descript={descript}
                    />
                </BrowserRouter>
            );
        };
        return {
            renderInput,
            settings,
            getValue
        };
    };
    it("expext required fields ", () => {
        const { renderInput, settings } = setup();
        const { descript, name, form, type, setClass } = settings;
        const inputContainer = renderInput(descript, name, form.reg, type, setClass);
        const thatInput = inputContainer.getByLabelText(name);
        const prev = thatInput.previousElementSibling.textContent;
        expect(thatInput).toBeInTheDocument();
        expect(thatInput.getAttribute("type")).toEqual(type);
        expect(thatInput.getAttribute("name")).toEqual(name);
        expect(thatInput.classList.contains(setClass)).toBeTruthy();
        expect(prev).toBe(descript);
    });
    it("expext className 'login-form__label_flex' form = registry", () => {
        const { renderInput, settings } = setup();
        const { descript, name, form, type, setClass } = settings;
        const inputContainer = renderInput(descript, name, form.reg, type, setClass);
        const thatInput = inputContainer.getByLabelText(name);
        const parentHasClass = thatInput.parentElement.classList.contains("login-form__label_flex");
        expect(parentHasClass).toBeTruthy();
    });
    it("expext call function 'getValue' if arises event onChange", () => {
        const { renderInput, settings, getValue } = setup();
        const { descript, name, form, type, setClass } = settings;
        const inputContainer = renderInput(descript, name, form.reg, type, setClass);
        const thatInput = inputContainer.getByLabelText(name);
        fireEvent.change(thatInput, { target: { value: "random" } });
        expect(getValue).toHaveBeenCalledWith(name, "random");
    });
});
