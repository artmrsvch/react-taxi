import React, { useState } from "react";
import FormCard from './Auxillary_components/FormCard';
import { fetchCardRequest } from "../module/actions";
import { useDispatch } from "react-redux";

function Profile() {
    const [state, setState] = useState()
    const dispatch = useDispatch()

    const getFormInpValue = (name, value) => {
        setState({ ...state, [name]: value });
    }

    const submitFormCard = (e) => {
        e.preventDefault();
        dispatch(fetchCardRequest(state))
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
