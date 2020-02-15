import React from "react";
import { Link } from 'react-router-dom'
function ProfileCardAdd() {
    return (
        <>
            <div>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
            <Link className="absent-card__link card-add__btn" to="/map">Перейти на карту</Link>
        </>
    )
}

export default ProfileCardAdd