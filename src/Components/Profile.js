import React, { useState } from "react";
import FormCard from "./Auxillary_components/FormCard";
import { fetchCardRequest } from "../module/actions";
import { useDispatch } from "react-redux";

function Profile({ card, token }) {
    const dispatch = useDispatch();
    const [state, setState] = useState({ ...card, token });
    const saveState = (name, value) => {
        setState({ ...state, [name]: value });
    };
    const submitFormCard = () => {
        dispatch(fetchCardRequest(state));
    };

    return (
        <section aria-label="profile" className="profile">
            <div className="profile-container">
                <div className="profile-headblock">
                    <h1 className="profile-headblock__title">Профиль</h1>
                    <h4 className="profile-headblock__subtitle">Способ оплаты</h4>
                </div>
                <FormCard card={state} saveState={saveState} submitProfile={submitFormCard} />
            </div>
        </section>
    );
}

export default Profile;
