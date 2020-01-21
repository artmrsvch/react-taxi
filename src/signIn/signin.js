import React from 'react';
import './signin.scss';

class SignIn extends React.Component {
    render() {
        return (
            <div className="default">
                <h1 className="title">Регистрация</h1>
                <form onSubmit={this.props.handle('map')}>
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