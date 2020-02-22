export const cashLocal = (email, password, token) => {
    localStorage.date = JSON.stringify({ email, password, token });
};
export const cashCard = card => {
    localStorage.card = JSON.stringify(card);
};
export const cashCardAdd = card => {
    localStorage.cardAdded = JSON.stringify(card);
};
export const parsLocal = () => {
    let user;
    localStorage.date ? (user = JSON.parse(localStorage.date)) : (user = []);
    return user;
};
export const parsCard = () => {
    let card;
    localStorage.card ? (card = JSON.parse(localStorage.card)) : (card = "");
    return card;
};
export const parsCardActive = () => {
    let cardActive;
    localStorage.cardAdded
        ? (cardActive = JSON.parse(localStorage.cardAdded))
        : (cardActive = false);
    return cardActive;
};
