import React from "react";
import { Link } from "react-router-dom";

function AbsentCardData() {
    return (
        <div className="absent-card form-select">
            <h2 className="absent-card__title">Заполните платежные данные</h2>
            <p className="absent-card__descript">
                Укажите информацию о банковской карте, чтобы сделать заказ.
            </p>
            <div className="absent-card__link-wrap">
                <Link className="absent-card__link route-wrap_btn" to="/profile">
                    Перейти в профиль
                </Link>
            </div>
        </div>
    );
}

export default AbsentCardData;
