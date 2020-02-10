import React from "react";
import { MCIcon } from "loft-taxi-mui-theme";
import InputCard from './InputCard';
import PropTypes from "prop-types";


function FormCard({ saveState, card }) {
    const { cardNumber, expiryDate, cardName, cvc } = card
    return (
        <form className="profile-form">
            <div className="profile-cardblock profile-cardblock__numbers">
                <MCIcon />
                <label className="profile-label">
                    <span className="profile-label__suptitle">Номер карты:</span>
                    <InputCard value={cardNumber} defClass={true} type="cardNumber" saveState={saveState} />
                </label>
                <label className="profile-label">
                    <span className="profile-label__suptitle">Срок действия:</span>
                    <InputCard value={expiryDate} defClass={false} type="expiryDate" saveState={saveState} />
                </label>
            </div>
            <div className="profile-cardblock profile-cardblock__info">
                <label className="profile-label">
                    <span className="profile-label__suptitle">Имя владельца:</span>
                    <InputCard value={cardName} defClass={true} type="cardName" saveState={saveState} />
                </label>
                <label className="profile-label">
                    <span className="profile-label__suptitle">CVC:</span>
                    <InputCard value={cvc} defClass={false} type="cvc" saveState={saveState} />
                </label>
            </div>
        </form>
    )
}

FormCard.propTypes = {
    saveState: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired,
};

export default FormCard;