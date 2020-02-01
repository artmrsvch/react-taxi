import { fetchFailure, fetchSuccess, fetchRegisterRequest } from "../actions";

export const fetchRegister = store => next => action => {
    if (action.type === fetchRegisterRequest.toString()) {
        const url = "https://loft-taxi.glitch.me/register";
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
