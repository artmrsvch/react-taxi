import { createStore, compose, applyMiddleware } from "redux";
import { fetchRegister } from "./middlewares/fetchRegister";
import { fetchLogin } from "./middlewares/fetchLogin";
import reducer from "./reducer";
const createAppStore = () => {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(fetchRegister, fetchLogin),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        )
    );
    return store;
};

export default createAppStore;
