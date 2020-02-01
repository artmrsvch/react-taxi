import React, { useContext, useState } from "react";
import FormCard from './Auxillary_components/FormCard';

import { Status } from "../App";

function Profile({ history }) {
    const [state, setState] = useState()

    const getFormInpValue = (name, value) => {
        setState({ ...state, [name]: value });
    }
    const context = useContext(Status);

    const submitFormCard = (e) => {
        e.preventDefault();
        context.login(state, 'card', history)
    }

    return (
        <section aria-label="profile" className="profile">
            <div className="profile-container">
                <div className="profile-headblock">
                    <h1 className="profile-headblock__title">Профиль</h1>
                    <h4 className="profile-headblock__subtitle">Способ оплаты</h4>
                </div>
                <FormCard savestate={getFormInpValue} />
                <div className="profile-wrapbtn">
                    <button onClick={submitFormCard} className="profile-btn" type="button">Сохранить</button>
                </div>
            </div>
        </section>
    );
}

export default Profile;
