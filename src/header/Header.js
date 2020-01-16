import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {setState: props.setState};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page, target) {
        for(let child of target.parentElement.children) {
            child.classList.remove('active')
        }
        target.classList.add('active')
        console.log(this)
        this.setState({
            setState: page
        }) 
    }

    componentDidMount() {
       
    }

    render() {
        return (
            <header className="App-header">
                <button className="App-logo">Loft Taxi</button>
                <div className="App-nav">
                    <button onClick={e => this.handleClick('login', e.target)} className="App-nav__item">Залогиниться</button>
                    <button onClick={e => this.handleClick('map', e.target)} className="App-nav__item">Карта</button>
                    <button onClick={e => this.handleClick('profile', e.target)} className="App-nav__item">Профиль</button>
                    <button onClick={e => this.handleClick('logout', e.target)} className="App-nav__item">Выйти</button>
                </div>
            </header>
        )
    }
}

export default Header