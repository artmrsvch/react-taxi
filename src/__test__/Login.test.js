import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sign from "../Components/Login/Login";

describe("Sign render", () => {
    const setup = () => {
        const handleClick = jest.fn();
        const type = {
            login: "login",
            signin: "signin",
            incorrect: "sdddasdw"
        };
        return {
            handleClick,
            type
        };
    };
    it("Sign have Login-form", () => {
        const { handleClick, type } = setup();
        const sign = render(<Sign handleClick={handleClick} type={type.login} />);
        expect(sign.getByLabelText("login")).toBeTruthy();
    });
    it("Sign have Registry-form", () => {
        const { handleClick, type } = setup();
        const sign = render(<Sign handleClick={handleClick} type={type.signin} />);
        expect(sign.getByLabelText("registry")).toBeTruthy();
    });
    it("Sign with Registry-form, calls handleClick on click", () => {
        const { handleClick, type } = setup();
        const sign = render(<Sign handleClick={handleClick} type={type.signin} />);
        const btn = sign.getByLabelText("link-btn");
        expect(btn.textContent).toBe("Войти");
        fireEvent.click(btn);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it("Sign with Login-form, calls handleClick on click", () => {
        const { handleClick, type } = setup();
        const sign = render(<Sign handleClick={handleClick} type={type.login} />);
        const btn = sign.getByLabelText("link-btn");
        expect(btn.textContent).toBe("Зарегистрируйтесь");
        fireEvent.click(btn);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
