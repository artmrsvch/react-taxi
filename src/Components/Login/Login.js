import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import FormLogin from '../Auxillary_components/FormLogin'
import FormRegistry from '../Auxillary_components/FormRegistry';
import {Status} from '../../App'

Sign.propTypes = {
    type: PropTypes.oneOf(["login", "signin"]).isRequired,
    handle: PropTypes.func.isRequired
}

function Sign(props) {
    const context = useContext(Status);
    const form = (props) => {
        /*Метод рендера формы (авторизации либо регистрации)*/

        if (props.type === 'login') {
            return <FormLogin submit={submit} />
        }
        return <FormRegistry submit={submit} />
    }

    const submit = (e, form) => {
        e.preventDefault();
        if (form.getAttribute('name') === 'login') {
            /*Валидация формы авторизации*/
            /*Если поля формы формы заполнены то резолвим метод авторизации*/
            if (form.elements.loginName.value !== '' && form.elements.loginPass.value !== '') {
                context.login(form);
            } else {
                alert('Поля должны быть заполнены')
            }  
        } else {
            /*Валидация формы регистрации*/

        }
    }

    const buttonForModal = (props) => {
        /*Метод возвращает кнопку с методом и значением в зависимости от типа формы*/

        let value;
        let handler;

        if (props.type === 'login') {
            value = 'Зарегистрируйтесь'
            handler = props.handle('signin')
        } else {
            value = 'Войти'
            handler = props.handle('login')
        }
            
        return <button className="login-descript__subtitle_prefix" onClick={handler}>
                    {value}
                </button>
    }

    return (
        <section className="section-login">
            <div className={`login ${props.type === 'login'?null:'login_registry'}`}>
                <div className="login-descript">
                    <h1 className="login-descript__title">{props.type === 'login'?'Войти':'Регистрация'}</h1>
                    <div className="login-descript__subtitle">
                        <span>{props.type === 'login'?'Новый пользователь? ':'Уже зарегистрирован? '}</span>
                        {buttonForModal(props)}
                    </div>   
                </div>
                {form(props)}
            </div>
        </section>
    )
}


export default Sign