import React, { useState } from "react";
import FormCard from "./FormCard";
import ProfileCardAdd from "./ProfileCardAdd";
import { fetchCardRequest, fetchGetCardRequest } from "../../module/actions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";

function Profile() {
    const dispatch = useDispatch();
    const { tokenSession, isCardAdd, cardInfo } = useSelector(stateSelect => stateSelect)
    const [state, setState] = useState({ ...cardInfo, tokenSession });
    const [cardAddComplete, setcardAddComplete] = useState(false);

    const saveState = (name, value) => {
        setState({ ...state, [name]: value });
    };
    const submitFormCard = () => {
        setcardAddComplete(true, dispatch(fetchCardRequest(state)));

    };
    const requsetForDataCard = () => {
        setcardAddComplete(true, dispatch(fetchGetCardRequest(tokenSession)));
    }
    const loadingCardFromServer = () => {
        return (
            <div className="profile-headblock__subtitle">Уже идентифицированы?
                <button className="btn-onload" type='button' onClick={requsetForDataCard}> загрузить данные </button>
            </div>
        )
    }
    const viewPaymentForm = () => {
        return (isCardAdd && cardAddComplete) ? <ProfileCardAdd /> : <FormCard card={state} saveState={saveState} submitProfile={submitFormCard} />
    }
    return (
        <>
            <Header />
            <section aria-label="profile" className="profile">
                <div className={`profile-container ${cardAddComplete && isCardAdd ? "profile-container_complete" : null}`}>
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
