import { fetchFailure, fetchSuccess, fetchLoginRequest } from "../actions";

export const fetchLogin = store => next => action => {
    if (action.type === fetchLoginRequest.toString()) {
        const url = "https://loft-taxi.glitch.me/auth";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.payload)
        })
            .then(responce => responce.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(fetchSuccess(data));
                } else {
                    throw data;
                }
            })
            .catch(error => {
                store.dispatch(fetchFailure(error));
            });
    }
    return next(action);
};
