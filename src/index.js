import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createStore from "./state/store";

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
