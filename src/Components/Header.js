import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "loft-taxi-mui-theme";
import { useDispatch } from "react-redux";
import { logoutAction } from "../module/actions";

function Header() {
    const dispatch = useDispatch()
    const btn = [
        { type: "/map", value: "Карта" },
        { type: "/profile", value: "Профиль" },
        { type: "/exit", value: "Выйти" }
    ];
    const handleLink = () => {
        dispatch(logoutAction())
    }
    return (
        <header aria-label="header" className="App-header">
            <Logo white="white" />
            <ul aria-label="btn-container" className="App-nav">
                {btn.map(({ type, value }) => (
                    <li className="App-nav__item" key={type}>
                        <Link
                            onClick={type === "/exit" ? handleLink : null}
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
