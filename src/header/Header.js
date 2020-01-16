import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setState: props.setState,
            handleClick: props.handle
        };
    }

    addActiveClass(props) {
        const appNav = document.querySelector('.App-nav');
        for (let child of appNav.children) {
            child.classList.remove('active')
            if (child.getAttribute('data-name') === props.setState) {
                child.classList.add('active');
            }
        }
    }
    componentDidMount() {
        this.addActiveClass(this.state)
    }
    componentDidUpdate() {
        this.addActiveClass(this.props)
    }

    render() {
        return (
            <header className="App-header">
                <button className="App-logo">Loft Taxi</button>
                <div className="App-nav">
                    <button 
                        onClick={e => this.state.handleClick('login', e.target)} 
                        className="App-nav__item"
                        data-name="login"
                        >Логин
                    </button>
                    <button 
                        onClick={e => this.state.handleClick('map', e.target)} 
                        className="App-nav__item"
                        data-name="map"
                        >Карта
                    </button>
                    <button 
                        onClick={e => this.state.handleClick('profile', e.target)} 
                        className="App-nav__item"
                        data-name="profile"
                        >Профиль
                    </button>
                    <button 
                        onClick={e => this.state.handleClick('signin', e.target)} 
                        className="App-nav__item"
                        data-name="signin"
                        >Регистрация
                    </button>
                </div>
            </header>
        )
    }
}

export default Header