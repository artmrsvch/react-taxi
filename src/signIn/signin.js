import React from 'react';
import './signin.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleClick: props.handle
        }
    }
    render() {
        return (
            <div className="default">
                <h1 className="title">Регистрация</h1>
                <form onSubmit={()=>this.state.handleClick('map')}>
                    <input type="email" placeholder="Введите email"/>
                    <div>
                        <input type="text" placeholder="Введите Имя"/>
                        <input type="text" placeholder="Введите Фвмилию"/>
                    </div>
                    <input type="password" placeholder="Введите Пароль"/>
                    <button className="Sign-btn" type="submit">Регистрация</button>
                </form>
            </div>
        )
    }
}

export default SignIn