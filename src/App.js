import React from "react";
import { connect } from "react-redux";
import Sign from "./Components/Sign";
import Profile from "./Components/Profile";
import Map from "./Components/Map";
import Header from "./Components/Header";
import Preloader from "./Components/Auxillary_components/Preloader";
import Error from "./Components/Auxillary_components/Error";
import { Route, Redirect, Switch } from "react-router-dom";
import { fetchRegisterRequest, fetchLoginRequest, logoutAction } from "./state/actions";

const Status = React.createContext();

function App({
    error,
    isLoggedIn,
    isLoading,
    fetchRegisterRequest,
    fetchLoginRequest,
    logoutAction
}) {
    const login = (user, type, history) => {
        history.push("/");
        type === "login" ? fetchLoginRequest(user) : fetchRegisterRequest(user);
    };
    const logout = () => () => logoutAction();
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
const mapStateToProps = state => state;
const mapDispatchToProps = { fetchRegisterRequest, fetchLoginRequest, logoutAction };
export { Status };
export default connect(mapStateToProps, mapDispatchToProps)(App);
