import React, { useState } from "react";
import Sign from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";

const Status = React.createContext();

function App() {
    const [appstate, setAppstate] = useState({
        isLoggedIn: false
    });
    const { isLoggedIn } = appstate;
    const login = (user, history, token) => {
        console.log(user);
        setAppstate({ isLoggedIn: true }, history.push("./profile"));
    };

    const logout = () => () => {
        setAppstate({ isLoggedIn: false });
    };

    const renderHeader = logged => {
        return logged ? <Header /> : null;
    };

    return (
        <div className="app" id="appId">
            <Status.Provider value={{ login, logout, isLoggedIn }}>
                {renderHeader(isLoggedIn)}
                <Switch>
                    <Route path="/profile" component={isLoggedIn ? Profile : Sign}></Route>
                    <Route path="/map" component={isLoggedIn ? Map : Sign}></Route>
                    <Route path="/register" component={Sign}></Route>
                    <Route component={Sign}></Route>
                </Switch>
            </Status.Provider>
        </div>
    );
}
export { Status };
export default App;
