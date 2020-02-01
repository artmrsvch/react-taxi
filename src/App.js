import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sign from "./Components/Sign";
import Profile from "./Components/Profile";
import Map from "./Components/Map";
import Header from "./Components/Header";
import Preloader from "./Components/Auxillary_components/Preloader";
import Error from "./Components/Auxillary_components/Error";
import { Route, Redirect, Switch } from "react-router-dom";
import { fetchRegisterRequest, fetchLoginRequest, fetchCardRequest, logoutAction } from "./state/actions";

const Status = React.createContext();

function App() {
    const dispatch = useDispatch();
    const { error, isLoggedIn, isLoading, cardInfo } = useSelector(state => state)
    console.log(cardInfo)
    const login = (user, type, history) => {
        history.push("/");
        type === "login" || type === "register"
            ? type === "login"
                ? dispatch(fetchLoginRequest(user))
                : dispatch(fetchRegisterRequest(user))
            : dispatch(fetchCardRequest(user))
    };
    const logout = () => () => dispatch(logoutAction());
    const renderHeader = logged => {
        return logged ? <Header /> : null;
    };
    if (isLoading) return <Preloader />;
    if (error) return <Error message={error} logout={logout} />;
    return (
        <div className="app" id="appId">
            <Status.Provider value={{ login, logout, isLoggedIn }}>
                {renderHeader(isLoggedIn)}
                <Switch>
                    <Route path="/profile" component={isLoggedIn ? Profile : Error} />
                    <Route path="/map" component={isLoggedIn ? Map : Error} />
                    <Route path="/register" component={Sign} />
                    <Route path="/login" component={Sign} />
                    <Redirect to={isLoggedIn ? "/map" : "/login"} />
                </Switch>
            </Status.Provider>
        </div>
    );
}

export { Status };
export default App;
