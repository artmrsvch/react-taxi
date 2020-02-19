import React from "react";
import PropTypes from "prop-types";

function InputCard({ meta, defClass, input }) {
    return (
        <>
            <div className={`inpCard ${defClass && "inpCard_long"}`}>
                <input
                    {...input}
                    maxLength={input.name === "cvc" ? 3 : null}
                    aria-label={input.name}
                    className="inpCard__input"
                    type={input.name === "cvc" ? "password" : "text"}
                />
            </div>
            {meta.error && meta.visited && !meta.active && (
                <div style={{ fontSize: "12px", color: "red" }}>{meta.error}</div>
            )}
        </>
    );
}

InputCard.propTypes = {
    defClass: PropTypes.bool.isRequired
};

export default InputCard;
