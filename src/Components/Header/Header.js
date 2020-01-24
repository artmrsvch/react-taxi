import React from "react";
import PropTypes from "prop-types";

function Header(props) {
    const btn = [
        { type: "map", value: "Карта" },
        { type: "profile", value: "Профиль" },
        { type: "exit", value: "Выйти" }
    ];

    return (
        <header className="App-header">
            <button className="App-logo">Loft Taxi</button>
            <div className="App-nav">
                {btn.map(({ type, value }) => (
                    <button
                        key={type}
                        onClick={props.handleClick(type)}
                        className={`App-nav__item ${props.activePage === type ? "active" : null}`}
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
