export const cashLocal = (email, pass) => {
    localStorage.date = JSON.stringify({ email: email, password: pass })
}
export const parsLocal = () => {
    let user;
    localStorage.date ? user = JSON.parse(localStorage.date) : user = [];
    return user
}
