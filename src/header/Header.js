import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <button className="App-logo">Loft Taxi</button>
                <div className="App-nav">
                    <button 
                        onClick={e => this.props.handle('login', e.target)} 
                        className={`App-nav__item ${this.props.activePage === 'login' ? 'active' : null}`}
                        >Логин
                    </button>
                    <button 
                        onClick={e => this.props.handle('map', e.target)} 
                        className={`App-nav__item ${this.props.activePage === 'map' ? 'active' : null}`}
                        >Карта
                    </button>
                    <button 
                        onClick={e => this.props.handle('profile', e.target)} 
                        className={`App-nav__item ${this.props.activePage === 'profile' ? 'active' : null}`}
                        >Профиль
                    </button>
                    <button 
                        onClick={e => this.props.handle('signin', e.target)} 
                        className={`App-nav__item ${this.props.activePage === 'signin' ? 'active' : null}`}
                        >Регистрация
                    </button>
                </div>
            </header>
        )
    }
}

export default Header