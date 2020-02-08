import React from "react";
import { MCIcon } from "loft-taxi-mui-theme";
import InputCard from './InputCard';
import PropTypes from "prop-types";


function FormCard({ saveState }) {
    return (
        <form className="profile-form">
            <div className="profile-cardblock profile-cardblock__numbers">
                <MCIcon />
                <label className="profile-label">
                    <span className="profile-label__suptitle">Номер карты:</span>
                    <InputCard defClass={true} type="cardNumber" saveState={saveState} />
                </label>
                <label className="profile-label">
                    <span className="profile-label__suptitle">Срок действия:</span>
                    <InputCard defClass={false} type="expiryDate" saveState={saveState} />
                </label>
            </div>
            <div className="profile-cardblock profile-cardblock__info">
                <label className="profile-label">
                    <span className="profile-label__suptitle">Имя владельца:</span>
                    <InputCard defClass={true} type="cardName" saveState={saveState} />
                </label>
                <label className="profile-label">
                    <span className="profile-label__suptitle">CVC:</span>
                    <InputCard defClass={false} type="cvc" saveState={saveState} />
                </label>
            </div>
        </form>
    )
}

FormCard.propTypes = {
    saveState: PropTypes.func.isRequired,
};

export default FormCard;