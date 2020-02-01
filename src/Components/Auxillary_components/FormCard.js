import React from "react";
import { MCIcon } from "loft-taxi-mui-theme";
import InputCard from './InputCard';


function FormCard({ savestate }) {
    return (
        <form className="profile-form">
            <div className="profile-cardblock profile-cardblock__numbers">
                <MCIcon />
                <label className="profile-label">
                    <span className="profile-label__suptitle">Номер карты:</span>
                    <InputCard defClass={true} type="cardNumber" saveState={savestate} />
                </label>
                <label className="profile-label">
                    <span className="profile-label__suptitle">Срок действия:</span>
                    <InputCard defClass={false} type="expiryDate" saveState={savestate} />
                </label>
            </div>
            <div className="profile-cardblock profile-cardblock__info">
                <label className="profile-label">
                    <span className="profile-label__suptitle">Имя владельца:</span>
                    <InputCard defClass={true} type="cardName" saveState={savestate} />
                </label>
                <label className="profile-label">
                    <span className="profile-label__suptitle">CVC:</span>
                    <InputCard defClass={false} type="cvc" saveState={savestate} />
                </label>
            </div>
        </form>
    )
}

export default FormCard;