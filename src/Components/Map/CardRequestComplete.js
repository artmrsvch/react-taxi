import React from "react";

function CardRequestComplete({ submit }) {
    const handleClick = () => {
        submit(false);
    };
    return (
        <div className="absent-card form-select">
            <h2 className="absent-card__title">Заказ размещён</h2>
            <p className="absent-card__descript">
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </p>
            <div className="absent-card__link-wrap">
                <button
                    onClick={handleClick}
                    className="absent-card__link route-wrap_btn"
                    type="button"
                >
                    Сделать новый заказ
                </button>
            </div>
        </div>
    );
}

export default CardRequestComplete;
