import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setState: props.setState,
            handleClick: props.handle
        };
    }

    render() {
        return (
            <header className="App-header">
                <button className="App-logo">Loft Taxi</button>
                <div className="App-nav">
                    <button onClick={e => this.state.handleClick('login', e.target)} className="App-nav__item active">Залогиниться</button>
                    <button onClick={e => this.state.handleClick('map', e.target)} className="App-nav__item">Карта</button>
                    <button onClick={e => this.state.handleClick('profile', e.target)} className="App-nav__item">Профиль</button>
                    <button onClick={e => this.state.handleClick('logout', e.target)} className="App-nav__item">Выйти</button>
                </div>
            </header>
        )
    }
}

export default Header