const fetchRequests = (action, path, method = 'POST') => {
    const url = `https://loft-taxi.glitch.me${path}`;
    return fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(action.payload)
    }).then(responce => responce.json())
}

export default fetchRequests;