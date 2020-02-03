import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
    describe("Render components at App", () => {
        const setup = () => {
            const mockStore = configureMockStore();
            const store = mockStore({});
            const utils = render(
                <BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>
            );
            const inputLogin = utils.getByLabelText("email");
            const inputPass = utils.getByLabelText("password");
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

        it("Render Login page", () => {
            const { utils } = setup();
            expect(utils.getByLabelText("login")).toBeInTheDocument();
        });
        it("Button is login-submit", () => {
            const { utils } = setup();
            expect(utils.getByLabelText("loginBtn").tagName).toBe("BUTTON");
        });
    });
});
