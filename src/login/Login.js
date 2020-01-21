import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import FormLogin from '../components/FormLogin'
import FormRegistry from '../components/FormRegistry'


Sign.propTypes = {
    type: PropTypes.oneOf(["login", "signin"]).isRequired,
    handle: PropTypes.func.isRequired
}

function Sign(props) {

    const form = (props) => {
        if (props.type === 'login') {
            return <FormLogin handle={props.handle} />
        }
        return <FormRegistry handle={props.handle} />
    }
    
    return (
        <section className="section-login">
            <div className={`login ${props.type === 'login'?null:'login_registry'}`}>
                <div className="login-descript">
                    <h1 className="login-descript__title">{props.type === 'login'?'Войти':'Регистрация'}</h1>
                    <div className="login-descript__subtitle">
                        <span>{props.type === 'login'?'Новый пользователь? ':'Уже зарегистрирован? '}</span>
                        <button className="login-descript__subtitle_prefix">{props.type === 'login'?'Зарегистрируйтесь':'Войти'}</button>
                    </div>   
                </div>
                {form(props)}
            </div>
        </section>
    )
}


export default Sign