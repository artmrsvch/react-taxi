import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRegisterRequest, fetchLoginRequest } from "../module/actions";
import DumbSign from './Auxillary_components/DumbSign'

function Sign({ match, history }) {
    const [state, setState] = useState();
    const dispatch = useDispatch()
    const getValue = (name, value) => setState({ ...state, [name]: value });

    const submit = (form) => {
        history.push('/')
        return form === "login"
            ? dispatch(fetchLoginRequest(({ email: state.email, password: state.password })))
            : dispatch(fetchRegisterRequest((
                {
                    email: state.email,
                    password: state.password,
                    name: state.regName,
                    surname: state.regLastName
                }
            )));
    };

    return <DumbSign path={match.path} getValue={getValue} submit={submit} />
}

export default Sign;
