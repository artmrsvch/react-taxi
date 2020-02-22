import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputCard from '../InputCard'
import { BrowserRouter } from "react-router-dom";

describe('test render InputCard', () => {
    const setup = () => {
        const saveState = jest.fn()
        const renderInputWithProps = (type, defClass, saveState, value) => {
            return render(
                <BrowserRouter>
                    <InputCard value={value} saveState={saveState} defClass={defClass} type={type} />
                </BrowserRouter>
            )
        }
        return {
            renderInputWithProps,
            saveState
        };
    }
    it('expect render with props', () => {
        const { renderInputWithProps, saveState } = setup()
        const unit = renderInputWithProps('cardName', true, saveState, 'REACT_ANGULAROVICH')
        const inp = unit.getByLabelText('cardName')
        expect(inp).toBeInTheDocument()
        expect(inp.value).toEqual('REACT_ANGULAROVICH')
        expect(inp.parentNode.classList.contains('inpCard_long')).toBeTruthy()
    })
    it('dont have class _long with defClass=false', () => {
        const { renderInputWithProps, saveState } = setup()
        const unit = renderInputWithProps('cardName', false, saveState, 'PUPKINA_ZALUPKINA')
        const inp = unit.getByLabelText('cardName')
        expect(inp.parentNode.classList.contains('inpCard_long')).toBeFalsy()
    })
    it('have input-type "password" and max-length 3, with props-type "cvc"', () => {
        const { renderInputWithProps, saveState } = setup()
        const unit = renderInputWithProps('cvc', false, saveState, '223')
        const inp = unit.getByLabelText('cvc')
        expect(inp.getAttribute('type')).toEqual('password')
        expect(inp.getAttribute('maxLength')).toEqual("3")
    })
    it('input changes trigger a callBack function', () => {
        const { renderInputWithProps, saveState } = setup()
        const unit = renderInputWithProps('cardName', false, saveState, 'PUPKINA_ZALUPKINA')
        const inp = unit.getByLabelText('cardName')
        fireEvent.change(inp, { target: { value: '3' } })
        fireEvent.change(inp, { target: { value: '334' } })
        fireEvent.change(inp, { target: { value: '3346' } })
        expect(saveState).toHaveBeenCalledTimes(3)
        expect(saveState).toHaveBeenCalledWith("cardName", '3346')
    })

})