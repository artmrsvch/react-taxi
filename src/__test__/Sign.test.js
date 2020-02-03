import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sign from "../Components/Sign";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";

describe("Sign render", () => {
    const setup = () => {
        const mockStore = configureMockStore();
        const store = mockStore({});
        const renderWithProps = (path) => render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sign match={path} />
                </Provider>
            </BrowserRouter>
        );
        return {
            renderWithProps
        };
    };
    it("Sign have Login-form", () => {
        const { renderWithProps } = setup();
        const match = { path: '/login' };
        const renderSign = renderWithProps(match);
        expect(renderSign.getByLabelText("login")).toBeTruthy();
    });
    it("Sign have Registry-form", () => {
        const { renderWithProps } = setup();
        const match = { path: '/register' };
        const renderSign = renderWithProps(match);
        expect(renderSign.getByLabelText("registry")).toBeTruthy();
    });
});
