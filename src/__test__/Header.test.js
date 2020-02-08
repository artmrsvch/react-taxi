import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";

describe("Header", () => {
    const setup = () => {
        const mockStore = configureMockStore();
        const store = mockStore({});
        const header = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        return {
            header
        };
    };
    describe("Render components depending on props", () => {
        it("Header at the DOM", () => {
            const { header } = setup();

            expect(header.getByLabelText("header")).toBeTruthy();
        });
        it("Header have nav", () => {
            const { header } = setup();

            expect(header.getByText("Профиль")).toBeTruthy();
            expect(header.getByText("Карта")).toBeTruthy();
            expect(header.getByText("Выйти")).toBeTruthy();
        });
    });
});
