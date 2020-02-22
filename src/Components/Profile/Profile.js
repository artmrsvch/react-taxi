import React, { useState } from "react";
import FormCard from "./FormCard";
import ProfileCardAdd from "./ProfileCardAdd";
import { fetchCardRequest, fetchGetCardRequest } from "../../module/actions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";

function Profile() {
    const dispatch = useDispatch();
    const { tokenSession, isCardAdd, cardInfo } = useSelector(stateSelect => stateSelect);
    const [cardAddComplete, setcardAddComplete] = useState(false);

    const submitFormCard = cardObj => {
        const finishObj = { ...cardObj, token: tokenSession };
        setcardAddComplete(true, dispatch(fetchCardRequest(finishObj)));
    };
    const requestForDataCard = () => {
        setcardAddComplete(true, dispatch(fetchGetCardRequest(tokenSession)));
    };
    const loadingCardFromServer = () => {
        return (
            <div className="profile-headblock__subtitle">
                Уже идентифицированы?
                <button className="btn-onload" type="button" onClick={requestForDataCard}>
                    {" "}
                    загрузить данные{" "}
                </button>
            </div>
        );
    };
    const viewPaymentForm = () => {
        return isCardAdd && cardAddComplete ? (
            <ProfileCardAdd />
        ) : (
            <FormCard card={cardInfo} submitProfile={submitFormCard} />
        );
    };
    return (
        <>
            <Header />
            <section aria-label="profile" className="profile">
                <div
                    className={`profile-container ${
                        cardAddComplete && isCardAdd ? "profile-container_complete" : null
                    }`}
                >
                    <div className="profile-headblock">
                        <h1 className="profile-headblock__title">Профиль</h1>
                        <h4 className="profile-headblock__subtitle">Способ оплаты</h4>
                    </div>
                    {!isCardAdd && loadingCardFromServer()}
                    {viewPaymentForm()}
                </div>
            </section>
        </>
    );
}

export default Profile;
