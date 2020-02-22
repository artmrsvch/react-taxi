import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormCard from '../FormCard'
import { BrowserRouter } from "react-router-dom";

describe('FormCard render', () => {
    const setup = () => {
        const saveState = jest.fn()
        const submitProfile = jest.fn()
        const card = {
            cardNumber: "1233 3333 3333 3333",
            expiryDate: "44/23",
            cardName: "PUPKINA_ZALUPKINA",
            cvc: "332"
        }
        const renderFormWithProps = (card, submitProfile, saveState) => {
            return render(
                <BrowserRouter>
                    <FormCard saveState={saveState} card={card} submitProfile={submitProfile} />
                </BrowserRouter>
            )
        }
        return {
            renderFormWithProps,
            saveState,
            submitProfile,
            card
        };
    }
    it('to be in the document with correct props', () => {
        const { renderFormWithProps, saveState, submitProfile, card } = setup()
        const unit = renderFormWithProps(card, submitProfile, saveState)
        const form = unit.getByLabelText('profile-form')
        expect(form).toBeInTheDocument()
    })
    it('inputs have value equal cards-data', () => {
        const { renderFormWithProps, saveState, submitProfile, card } = setup()
        const unit = renderFormWithProps(card, submitProfile, saveState)
        const formElem = unit.getByLabelText('profile-form').elements
        expect(formElem.cardNumber.value).toEqual('1233 3333 3333 3333')
        expect(formElem.expiryDate.value).toEqual("44/23")
        expect(formElem.cardName.value).toEqual("PUPKINA_ZALUPKINA")
        expect(formElem.cvc.value).toEqual("332")
    })
    it('inputs onChange called saveState function', () => {
        const { renderFormWithProps, saveState, submitProfile, card } = setup()
        const unit = renderFormWithProps(card, submitProfile, saveState)
        const formElem = unit.getByLabelText('profile-form').elements

        fireEvent.change(formElem.cardNumber, { target: { value: '8800 5553 5355 88' } })
        fireEvent.change(formElem.cardNumber, { target: { value: '8800 5553 5355 8800' } })

        expect(saveState).toHaveBeenCalledTimes(2)
        expect(saveState).toHaveBeenCalledWith("cardNumber", '8800 5553 5355 8800')

    })
    it('form submit called saveState submitProfile', () => {
        const { renderFormWithProps, saveState, submitProfile, card } = setup()
        const unit = renderFormWithProps(card, submitProfile, saveState)
        const form = unit.getByLabelText('profile-form')

        fireEvent.submit(form)

        expect(submitProfile).toHaveBeenCalledTimes(1)
    })
})