import React from "react";
import { useDispatch } from "react-redux";
import { fetchRegisterRequest, fetchLoginRequest } from "../../module/actions";
import DumbSign from "./DumbSign";

function Sign({ match, history }) {
    const dispatch = useDispatch();

    const submit = (userObj, form) => {
        history.push("/");
        return form === "login"
            ? dispatch(fetchLoginRequest())
            : dispatch(fetchRegisterRequest(userObj));
    };

    return <DumbSign path={match.path} submit={submit} />;
}

export default Sign;
