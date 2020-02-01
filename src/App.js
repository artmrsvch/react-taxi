import React from "react";
import Sign from "./Components/Sign";
import Profile from "./Components/Profile";
import Map from "./Components/Map";
import Header from "./Components/Header";
import Preloader from "./Components/Auxillary_components/Preloader";
import Error from "./Components/Auxillary_components/Error";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
    const { error, isLoggedIn, isLoading } = useSelector(state => state);

    if (isLoading) return <Preloader />;
    if (error) return <Error message={error} />;

    return (
        <div className="app" id="appId">
            <Switch>
                <Route path="/profile" render={() => (isLoggedIn ? <><Header /> <Profile /></> : <Error route={true} />)} />
                <Route path="/map" render={() => (isLoggedIn ? <><Header /> <Map /></> : <Error route={true} />)} />
                <Route path="/register" component={Sign} />
                <Route path="/login" component={Sign} />
                <Redirect to={isLoggedIn ? "/map" : "/login"} />
            </Switch>
        </div>
    );
}

export default App;
