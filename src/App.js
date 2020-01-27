import React, { useState } from "react";
import "./App.scss";
import Sign from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";

const Status = React.createContext();

function App() {
    const [appstate, setAppstate] = useState({
        page: "login",
        isLoggedIn: false
    });
    const { isLoggedIn, page } = appstate;
    const login = (form, user) => {
        /*Метод получает форму при сабмите*/
        console.log(user);
        if (form === "login") {
            /*Если это форма авторизации, то меняем статус авторизации и рендерим профиль*/
            setAppstate({ isLoggedIn: !isLoggedIn, page: "profile" });
        }
    };

    const logout = page => {
        /*Метод меняет статус авторизации (разлогинивает) и рендерит страницу с логином*/

        setAppstate({ isLoggedIn: isLoggedIn, page: "login" });
    };

    const renderDynamicPage = page => {
        /*Метод отрисовки страниц*/

        const dynamicPage = {
            profile: () => <Profile />,
            login: () => <Sign type="login" handleClick={handleClick} />,
            map: () => <Map />,
            signin: () => <Sign type="signin" handleClick={handleClick} />,
            test: () => "defaultString"
        };

        return dynamicPage[page]();
    };
    const renderHeader = page => {
        /* Метод отрисовывает хедер если юзер авторизован */
        return page === "login" || page === "signin" ? null : (
            <Header activePage={page} handleClick={handleClick} />
        );
    };
    const test = val => val + 6;
    const handleClick = page => () => {
        /*Метод запускает рендер страниц*/
        page !== "exit" ? setAppstate({ page }) : logout(page);
    };

    return (
        <div className="app" id="appId">
            <Status.Provider
                value={{
                    login,
                    logout,
                    isLoggedIn
                }}
            >
                {renderHeader(page)}
                {renderDynamicPage(page)}
            </Status.Provider>
        </div>
    );
}
export { Status };
export default App;
