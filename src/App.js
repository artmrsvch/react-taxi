import React, { useEffect } from "react";
import { Sign, Profile, Map, Preloader, Error } from './Components/index'
import { useSelector, useDispatch } from "react-redux";
import { fetchAdressList } from "./module/actions";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
    const { isCardAdd, error, isLoggedIn, isLoading, adressList } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        /* Если карта добавлена, авторизованы, но нет списка адрессов - бежим на сервер */
        if (isCardAdd && isLoggedIn && adressList.length === 0) {
            dispatch(fetchAdressList());
        }
    }, [isLoggedIn, isCardAdd, adressList, dispatch]);

    if (isLoading) return <Preloader />;
    if (error) return <Error message={error} />;

    return (
        <div className="app" id="appId">
            <Switch>
                <Route path="/profile" render={() => isLoggedIn ? <Profile /> : <Error route={true} />} />
                <Route path="/map" render={() => isLoggedIn ? <Map /> : <Error route={true} />} />
                <Route path="/register" component={Sign} />
                <Route path="/login" component={Sign} />
                <Redirect to={isLoggedIn ? "/map" : "/login"} />
            </Switch>
        </div>
    );
}

export default App;
