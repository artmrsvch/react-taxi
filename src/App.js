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
    const login = form => {
        /*Метод получает форму при сабмите*/

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
            signin: () => <Sign type="signin" handleClick={handleClick} />
        };

        return dynamicPage[page]();
    };
    const renderHeader = page => {
        /* Метод отрисовывает хедер если юзер авторизован */
        if (page === "login" || page === "signin") {
            return null;
        } else {
            return <Header activePage={page} handleClick={handleClick} />;
        }
    };
    const handleClick = page => () => {
        /*Метод запускает рендер страниц*/
        page !== "exit" ? setAppstate({ page }) : logout(page);
    };

    return (
        <div className="App">
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
