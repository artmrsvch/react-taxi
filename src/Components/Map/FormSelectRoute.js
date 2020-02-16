import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";

function FormSelectRoute({ adressList, submit }) {
    const [state, setState] = useState({ adressTo: adressList, adressFrom: adressList });

    useEffect(() => {
        setState({ adressTo: adressList, adressFrom: adressList });
    }, [adressList]);

    /* Загрузка адресов в автокомплит */
    const adressListFrom = {
        options: state.adressFrom,
        getOptionLabel: option => option
    };
    const adressListTo = {
        options: state.adressTo,
        getOptionLabel: option => option
    };

    /* Добавление адреса в стейт при клике */
    const readyToSendRoute = (e, type) => {
        const route = e.target.textContent;
        type === "from"
            ? setState({ ...state, adressTo: excludeSelectAdress(route), address1: route })
            : setState({ ...state, adressFrom: excludeSelectAdress(route), address2: route });
    };
    const handleSubmit = e => {
        e.preventDefault();
        submit({ address1: state.address1, address2: state.address2 });
    };
    /* Исключение адреса из списка если он уже выбран */
    const excludeSelectAdress = route => {
        let tempArr = adressList.concat();
        tempArr.forEach((adress, index) => {
            route === adress && tempArr.splice(index, 1);
        });
        return tempArr;
    };
    /* Отключение кнопки сабмита если не выбран начальный и конечный адреса*/
    const btnDisabledBeforeSelect = (from, to) => {
        return from.length !== adressList.length && to.length !== adressList.length ? false : true;
    };

    return (
        <form aria-label="select-route-form" className="form-select" onSubmit={handleSubmit}>
            <div className="form-select__direction">
                <Autocomplete
                    {...adressListFrom}
                    debug
                    onChange={e => readyToSendRoute(e, "from")}
                    renderInput={params => (
                        <TextField {...params} label="Откуда" margin="normal" fullWidth />
                    )}
                />
            </div>
            <div className="form-select__direction">
                <Autocomplete
                    {...adressListTo}
                    debug
                    onChange={e => readyToSendRoute(e, "to")}
                    renderInput={params => (
                        <TextField {...params} label="Куда" margin="normal" fullWidth />
                    )}
                />
            </div>
            <div className="form-select__btn-wrap">
                <button
                    disabled={btnDisabledBeforeSelect(state.adressFrom, state.adressTo)}
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
