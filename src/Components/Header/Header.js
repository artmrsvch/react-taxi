import React from "react";
import PropTypes from "prop-types";
import { Logo } from "loft-taxi-mui-theme";

function Header({ activePage, handleClick }) {
    const btn = [
        { type: "map", value: "Карта" },
        { type: "profile", value: "Профиль" },
        { type: "exit", value: "Выйти" }
    ];

    return (
        <header className="App-header">
            <Logo white="white" />
            <div className="App-nav">
                {btn.map(({ type, value }) => (
                    <button
                        key={type}
                        onClick={handleClick(type)}
                        className={`App-nav__item ${activePage === type ? "active" : null}`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </header>
    );
}
Header.propTypes = {
    activePage: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};
export default Header;
