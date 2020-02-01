import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRegisterRequest, fetchLoginRequest } from "../module/actions";
import DumbSign from './Auxillary_components/DumbSign'

function Sign({ match, history }) {
    const [state, setState] = useState();
    const dispatch = useDispatch()
    const getValue = (name, value) => setState({ ...state, [name]: value });

    const submit = (e, form) => {
        e.preventDefault();
        history.push('/')
        return form === "login"
            ? dispatch(fetchLoginRequest(({ email: state.loginMail, password: state.loginPass })))
            : dispatch(fetchRegisterRequest((
                {
                    email: state.regMail,
                    password: state.regPass,
                    name: state.regName,
                    surname: state.regLastName
                }
            )));
    };
    return <DumbSign path={match.path} getValue={getValue} submit={submit} />;
}

export default Sign;
