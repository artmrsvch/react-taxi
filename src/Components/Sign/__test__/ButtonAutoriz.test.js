import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonAutoriz from "../ButtonAutoriz";

describe("Btn render", () => {
    it('In the form "Войти" has the text "Войти" and aria-label "loginBtn".', () => {
        const btn = render(<ButtonAutoriz forms="Войти" />);
        expect(btn.getByText("Войти")).toBeInTheDocument();
        expect(btn.getByLabelText("loginBtn")).toBeInTheDocument();
    });
    it('In the form "Зарегистрироваться" has the text "Зарегистрироваться" and aria-label "registerBtn".', () => {
        const btn = render(<ButtonAutoriz forms="Зарегистрироваться" />);
        expect(btn.getByText("Зарегистрироваться")).toBeInTheDocument();
        expect(btn.getByLabelText("registerBtn")).toBeInTheDocument();
    });
});
