import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <label className="login-form__label">
                <div className="login-form__suptitle">{`${this.props.descript}`}</div>
                <input 
                    type={`${this.props.type}`} 
                    className={`login-form__inp ${this.props.setClass}`}/>
            </label>
        )
    }
}

export default Input