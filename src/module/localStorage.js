const cashLocal = (email, pass) => {
    localStorage.date = JSON.stringify({ email: email, password: pass })
}

export default cashLocal