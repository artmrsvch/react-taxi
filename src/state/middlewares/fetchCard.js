import { fetchCardSuccess, fetchCardRequest, fetchFailure } from "../actions";

export const fetchCard = store => next => action => {
    if (action.type === fetchCardRequest.toString()) {
        const url = "https://loft-taxi.glitch.me/card";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(action.payload)
        })
            .then(responce => responce.json())
            .then(data => {
                console.log('DATA', data)
                if (data.success) {
                    store.dispatch(fetchCardSuccess());
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
