import { createStore, compose, applyMiddleware } from "redux";
import { fetchRegister } from "./middlewares/fetchRegister";
import { fetchLogin } from "./middlewares/fetchLogin";
import { fetchCard } from "./middlewares/fetchCard";
import reducer from "./reducer";
const createAppStore = () => {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(fetchRegister, fetchLogin, fetchCard),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        )
    );
    return store;
};

export default createAppStore;
