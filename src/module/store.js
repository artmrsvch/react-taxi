import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer";
import { handleRequest } from "./saga/sagas"

const sagaMiddleware = createSagaMiddleware()

const createAppStore = () => {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        )
    );

    sagaMiddleware.run(handleRequest)

    return store;
};



export default createAppStore;
