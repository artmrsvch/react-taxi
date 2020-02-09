import React from "react";
import PropTypes from "prop-types";

function FormSelectRoute({ adressList }) {
    let inpFrom;
    let inpTo;
    let listFrom;
    let listTo;
    const handleClick = (type) => () => {
        const changeNode = (node, close) => {
            close.style.display = 'none'
            node.style.display === 'block' ? node.style.display = 'none' : node.style.display = 'block'
        }
        type === 'from' ? changeNode(listFrom, listTo) : changeNode(listTo, listFrom)
    }
    const clickItem = (e) => {
        const target = e.target;
        target.parentNode.classList.contains('route-list__adress1') ? inpFrom.value = target.textContent : inpTo.value = target.textContent
        listFrom.style.display = 'none'
        listTo.style.display = 'none'
    }
    return (
        <form className="form-select">
            <div className="form-select__direction" >
                <div onClick={handleClick('from')} className="route-block">
                    <input ref={el => inpFrom = el} name="address1" className="route-block__inp" placeholder="Откуда" />
                    <div className="route-block__btns">
                        <div className="route-block__hover">
                            <button className="hover-btn" type="button"></button>
                        </div>
                    </div>
                </div>
                <ul ref={el => listFrom = el} className="route-list route-list__adress1">
                    {adressList.map((route, index) => (
                        <li onClick={clickItem} key={index} className="route-list__item">{route}</li>
                    ))}
                </ul>
            </div>
            <div className="form-select__direction" >
                <div onClick={handleClick('to')} className="route-block">
                    <input ref={el => inpTo = el} name="address2" className="route-block__inp" placeholder="Куда" />
                    <div className="route-block__btns">
                        <div className="route-block__hover">
                            <button className="hover-btn" type="button"></button>
                        </div>
                    </div>
                </div>
                <ul ref={el => listTo = el} className="route-list route-list__adress2">
                    {adressList.map((route, index) => (
                        <li onClick={clickItem} key={index} className="route-list__item">{route}</li>
                    ))}
                </ul>
            </div>
            <div className="form-select__btn-wrap">
                <button className="route-wrap_btn" type="button">Вызвать такси</button>
            </div>
        </form>
    )
}

export default FormSelectRoute