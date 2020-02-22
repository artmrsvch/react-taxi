import React from "react";
import { MCIcon } from "loft-taxi-mui-theme";
import InputCard from "./InputCard";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

function FormCard({ card, submitProfile }) {
    const thatSubmitForm = obj => {
        submitProfile(obj);
    };
    const formatValue = (value, name) => {
        let modifyValue = value;

        const formatCardNumber = val => {
            if (val === undefined) val = "";
            let cardCode = val.replace(/[^\d]/g, "").substring(0, 16);
            cardCode = cardCode !== "" ? cardCode.match(/.{1,4}/g).join(" ") : "";
            val = cardCode;
            return val;
        };
        const formatExpiryDate = val => {
            if (val === undefined) val = "";
            let cardCode = val.replace(/[^\d]/g, "").substring(0, 4);
            cardCode = cardCode !== "" ? cardCode.match(/.{1,2}/g).join("/") : "";
            val = cardCode;
            return val;
        };
        const formatCVC = val => {
            if (val === undefined) val = "";
            let cardCode = val.replace(/[^\d]/g, "");
            val = cardCode;
            return val;
        };
        if (name === "cardNumber") modifyValue = formatCardNumber(modifyValue);
        if (name === "expiryDate") modifyValue = formatExpiryDate(modifyValue);
        if (name === "cvc") modifyValue = formatCVC(modifyValue);

        return modifyValue;
    };
    const validateInput = values => {
        const errors = {};
        if (!values.cardNumber) {
            errors.cardNumber = "Required";
            return errors;
        }
        if (!values.expiryDate) {
            errors.expiryDate = "Required";
            return errors;
        }
        if (!values.cardName) {
            errors.cardName = "Required";
        }
        if (!values.cvc) {
            errors.cvc = "Required";
            return errors;
        }
        if (values.cardNumber.length < 19) {
            errors.cardNumber = "Must be at least 16 digits.";
        }
        if (values.expiryDate.length < 5) {
            errors.expiryDate = "Must be in mm/yy format";
        }
        if (values.cvc.length < 3) {
            errors.cvc = "Must be at least 3 digits.";
        }

        return errors;
    };

    const { cardNumber, expiryDate, cardName, cvc } = card;
    return (
        <Form
            onSubmit={thatSubmitForm}
            validate={validateInput}
            initialValues={{ cardNumber, expiryDate, cardName, cvc }}
            render={({ handleSubmit }) => (
                <form className="profile-form" aria-label="profile-form" onSubmit={handleSubmit}>
                    <div className="profile-form__card-inputs">
                        <div className="profile-cardblock profile-cardblock__numbers">
                            <MCIcon />
                            <label className="profile-label">
                                <span className="profile-label__suptitle">Номер карты:</span>
                                <Field
                                    format={formatValue}
                                    name="cardNumber"
                                    defClass={true}
                                    component={InputCard}
                                />
                            </label>
                            <label className="profile-label">
                                <span className="profile-label__suptitle">Срок действия:</span>
                                <Field
                                    format={formatValue}
                                    defClass={false}
                                    name="expiryDate"
                                    component={InputCard}
                                />
                            </label>
                        </div>
                        <div className="profile-cardblock profile-cardblock__info">
                            <label className="profile-label">
                                <span className="profile-label__suptitle">Имя владельца:</span>
                                <Field
                                    format={formatValue}
                                    defClass={true}
                                    name="cardName"
                                    component={InputCard}
                                />
                            </label>
                            <label className="profile-label">
                                <span className="profile-label__suptitle">CVC:</span>
                                <Field
                                    format={formatValue}
                                    defClass={false}
                                    name="cvc"
                                    component={InputCard}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="profile-wrapbtn">
                        <button className="profile-btn" type="submit">
                            Сохранить
                        </button>
                    </div>
                </form>
            )}
        />
    );
}

FormCard.propTypes = {
    submitProfile: PropTypes.func.isRequired,
    card: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default FormCard;
