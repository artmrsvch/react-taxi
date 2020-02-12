import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";

function FormSelectRoute({ adressList, submit }) {
    const [state, setState] = useState({ adressTo: adressList, adressFrom: adressList });

    useEffect(() => {
        setState({ adressTo: adressList, adressFrom: adressList });
    }, [adressList]);
    const listFrom = {
        options: state.adressFrom,
        getOptionLabel: option => option
    };
    const listTo = {
        options: state.adressTo,
        getOptionLabel: option => option
    };

    const handle = (e, type) => {
        const route = e.target.textContent;
        type === "from"
            ? setState({ ...state, adressTo: validAdress(route), address1: route })
            : setState({ ...state, adressFrom: validAdress(route), address2: route });
    };
    const handleSubmit = e => {
        e.preventDefault();
        submit(true, { address1: state.address1, address2: state.address2 });
    };
    const validAdress = route => {
        let tempArr = adressList.concat();
        tempArr.forEach((adress, index) => {
            route === adress && tempArr.splice(index, 1);
        });
        return tempArr;
    };
    const validBtnDisabled = (from, to) => {
        return from.length !== adressList.length && to.length !== adressList.length ? false : true;
    };

    return (
        <form className="form-select" onSubmit={handleSubmit}>
            <div className="form-select__direction">
                <Autocomplete
                    {...listFrom}
                    debug
                    onChange={e => handle(e, "from")}
                    renderInput={params => (
                        <TextField {...params} label="Откуда" margin="normal" fullWidth />
                    )}
                />
            </div>
            <div className="form-select__direction">
                <Autocomplete
                    {...listTo}
                    debug
                    onChange={e => handle(e, "to")}
                    renderInput={params => (
                        <TextField {...params} label="Куда" margin="normal" fullWidth />
                    )}
                />
            </div>
            <div className="form-select__btn-wrap">
                <button
                    disabled={validBtnDisabled(state.adressFrom, state.adressTo)}
                    className="route-wrap_btn"
                    type="submit"
                >
                    Вызвать такси
                </button>
            </div>
        </form>
    );
}

FormSelectRoute.propTypes = {
    adressList: PropTypes.array.isRequired
};

export default FormSelectRoute;
