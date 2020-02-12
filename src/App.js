import React, { useEffect } from "react";
import Sign from "./Components/Sign";
import Profile from "./Components/Profile";
import Map from "./Components/Map";
import Header from "./Components/Header";
import Preloader from "./Components/Auxillary_components/Preloader";
import Error from "./Components/Auxillary_components/Error";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetCardRequest, fetchAdressList } from "./module/actions";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
    const {
        tokenSession,
        isCardAdd,
        cardInfo,
        error,
        isLoggedIn,
        isLoading,
        adressList,
        isCardActive,
        selectRoute
    } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        /* Если карта добавлена на сервере но нет в кэше - бежим на сервер */
        isCardActive && dispatch(fetchGetCardRequest(tokenSession));
        /* Если карта добавлена, авторизованы, но нет списка адрессов - бежим на сервер */
        if (isCardAdd && isLoggedIn && adressList.length === 0) {
            dispatch(fetchAdressList());
        }
    }, [isLoggedIn, isCardAdd, adressList]);

    if (isLoading) return <Preloader />;
    if (error) return <Error message={error} />;

    return (
        <div className="app" id="appId">
            <Switch>
                <Route
                    path="/profile"
                    render={() =>
                        isLoggedIn ? (
                            <>
                                <Header /> <Profile card={cardInfo} token={tokenSession} />
                            </>
                        ) : (
                            <Error route={true} />
                        )
                    }
                />
                <Route
                    path="/map"
                    render={() =>
                        isLoggedIn ? (
                            <>
                                <Header />{" "}
                                <Map
                                    route={selectRoute}
                                    adressList={adressList}
                                    isCardAdd={isCardAdd}
                                />
                            </>
                        ) : (
                            <Error route={true} />
                        )
                    }
                />
                <Route path="/register" component={Sign} />
                <Route path="/login" component={Sign} />
                <Redirect to={isLoggedIn ? "/map" : "/login"} />
            </Switch>
        </div>
    );
}

export default App;
