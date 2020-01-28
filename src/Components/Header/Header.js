import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "loft-taxi-mui-theme";
import { Status } from "../../App";

function Header() {
    const context = useContext(Status);
    const btn = [
        { type: "/map", value: "Карта" },
        { type: "/profile", value: "Профиль" },
        { type: "/exit", value: "Выйти" }
    ];
    return (
        <header aria-label="header" className="App-header">
            <Logo white="white" />
            <ul aria-label="btn-container" className="App-nav">
                {btn.map(({ type, value }) => (
                    <li className="App-nav__item" key={type}>
                        <Link
                            onClick={type === "/exit" ? context.logout() : null}
                            className="App-nav__link"
                            to={type}
                        >
                            {value}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;
