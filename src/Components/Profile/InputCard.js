import React from "react";
import PropTypes from "prop-types";


function InputCard({ defClass, type, saveState, value }) {
    let inpRef;
    const handleClick = () => () => {
        inpRef.value = '';
    }
    const getChange = (e) => {
        saveState(e.target.name, e.target.value)
    }
    const setHandler = (e) => {
        return type === 'cardNumber' || type === 'expiryDate'
            ? type === 'cardNumber' ? validCard(e) : validDate(e)
            : getChange(e);
    }
    const validCard = (e) => {
        let cardCode = inpRef.value.replace(/[^\d]/g, '').substring(0, 16);
        cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        inpRef.value = cardCode;
        getChange(e)
    }
    const validDate = (e) => {
        let cardCode = inpRef.value.replace(/[^\d]/g, '').substring(0, 4);
        cardCode = cardCode !== '' ? cardCode.match(/.{1,2}/g).join('/') : '';
        inpRef.value = cardCode;
        getChange(e)
    }
    return (
        <div className={`inpCard ${defClass && 'inpCard_long'}`}>
            <input
                value={value}
                maxLength={type === "cvc" ? 3 : null}
                name={type}
                onChange={setHandler}
                className="inpCard__input"
                ref={el => inpRef = el}
                type={type === "cvc" ? "password" : 'text'} />
            <div className="inpCard__wrapBtn">
                <button onClick={handleClick} className="inpCard__btn" type="button"></button>
            </div>
        </div>
    )
}

InputCard.propTypes = {
    saveState: PropTypes.func.isRequired,
    defClass: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
};

export default InputCard;