import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Components/Header/Header";

describe("Header", () => {
    const setup = () => {
        const handleClick = jest.fn();
        const activePage = {
            map: "map",
            profile: "profile",
            exit: "exit",
            defaultString: "wqweqwdsfsdff"
        };
        return {
            handleClick,
            activePage
        };
    };
    describe("Render components depending on props", () => {
        it("Header at the DOM", () => {
            const { handleClick, activePage } = setup();
            const header = render(
                <Header handleClick={handleClick} activePage={activePage.profile} />
            );
            expect(header.getByLabelText("header")).toBeTruthy();
        });
        it("ActivePage is Profile", () => {
            const { handleClick, activePage } = setup();
            const header = render(
                <Header handleClick={handleClick} activePage={activePage.profile} />
            );
            expect(header.getByText("Профиль")).toHaveClass("active");
        });
        it("ActivePage is Map", () => {
            const { handleClick, activePage } = setup();
            const header = render(<Header handleClick={handleClick} activePage={activePage.map} />);
            expect(header.getByText("Карта")).toHaveClass("active");
        });
        it("Page does not display with incorrect props", () => {
            const { handleClick, activePage } = setup();
            const header = render(
                <Header handleClick={handleClick} activePage={activePage.defaultString} />
            );
            const btnContainer = header.getByLabelText("btn-container");
            const findClass = () => {
                for (let child of btnContainer.children) {
                    if (child.classList.contains("active")) {
                        return true;
                    }
                }
                return false;
            };
            expect(findClass()).toBeFalsy();
        });
    });
    describe("Button test", () => {
        it("Click on the button calls handleClick", () => {
            const { handleClick, activePage } = setup();
            const header = render(
                <Header handleClick={handleClick} activePage={activePage.profile} />
            );
            const btnOne = header.getByText("Профиль");
            const btnTwo = header.getByText("Карта");
            const btnThree = header.getByText("Выйти");
            fireEvent.click(btnOne);
            fireEvent.click(btnTwo);
            fireEvent.click(btnThree);
            expect(handleClick).toHaveBeenCalledTimes(3);
        });
    });
});
