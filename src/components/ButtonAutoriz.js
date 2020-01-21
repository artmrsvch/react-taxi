import React from 'react';

function ButtonAutoriz (props){
    return (
        <div className="login-btn">
            <button className="login-btn__submit" type="submit">{`${props.forms}`}</button>
        </div>
    )
}

export default ButtonAutoriz