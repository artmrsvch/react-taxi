import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    activePage: PropTypes.string.isRequired,
    handle: PropTypes.func.isRequired
}

function Header(props) {
    const btn = [{type: 'login', value: 'Логин'}, {type: 'map', value: 'Карта'}, {type: 'profile', value: 'Профиль'}, {type: 'signin', value: 'Регистрация'}];

    return (
        <header className="App-header">
            <button className="App-logo">Loft Taxi</button>
            <div className="App-nav">
                {btn.map(page => 
                    <button 
                        key={page.type}
                        onClick={props.handle(page.type)} 
                        className={`App-nav__item ${props.activePage === page.type ? 'active' : null}`}
                        >{page.value}
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header