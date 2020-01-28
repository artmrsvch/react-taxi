import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("App", () => {
    describe("Render components at App", () => {
        const setup = () => {
            const utils = render(<App />);
            const inputLogin = utils.getByLabelText("loginName");
            const inputPass = utils.getByLabelText("loginPass");
            return {
                utils,
                inputLogin,
                inputPass
            };
        };

        it("App at the DOM", () => {
            const { utils } = setup();
            expect(utils).toBeTruthy();
        });

        it("Render FormLogin", () => {
            const { utils } = setup();
            expect(utils.getByLabelText("login")).toBeInTheDocument();
        });
        it("Button is login-submit", () => {
            const { utils } = setup();
            expect(utils.getByLabelText("loginBtn").tagName).toBe("BUTTON");
        });
    });
});
