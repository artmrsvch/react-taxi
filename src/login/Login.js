import React from 'react';
import './login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleClick: props.handle
        }
    }
    render() {
        return (
            <div className="Login">
                <h1 className="title">Login</h1>
                <form className="Login-form" onSubmit={()=>this.state.handleClick('map')}>
                    <div className="Login-form__inp-block">
                        <input type="text" className="Login-inputs__userName" placeholder="Введите логин"/>
                        <input type="text" className="Login-inputs__userPass" placeholder="Введите пароль"/>
                    </div>
                    <button className="Login-btn" type="submit">Отправить</button>
                </form>
            </div>
        )
    }
}

export default Login