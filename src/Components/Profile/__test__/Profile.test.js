import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Profile } from '../../indexComponents'
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fetchCardRequest } from "../../../module/actions";

jest.mock('react-redux');

describe("Profile render", () => {
    const setup = (isCardAdd, cardInfo) => {
        useSelector.mockImplementation(cb =>
            cb({
                tokenSession: 'recsrhD6vTuINgMcB',
                isCardAdd,
                cardInfo
            })
        );
        const profile = render(
            <BrowserRouter>
                <Profile />
            </BrowserRouter>
        );

        return {
            profile,
        };
    };
    const card = () => {
        const cardInfo = {
            cardNumber: "1233 3333 3333 3333",
            expiryDate: "44/23",
            cardName: "sadas_Sadas",
            cvc: "332",
            token: "recsrhD6vTuINgMcB"
        }
        return {
            cardInfo
        };
    }

    describe("render with added card", () => {
        it('inputs have cards-data value', () => {
            const { cardInfo } = card()
            const { profile } = setup(true, cardInfo)
            const formDataElement = profile.getByLabelText("profile-form").elements;
            expect(formDataElement.cardNumber.value).toEqual(cardInfo.cardNumber)
            expect(formDataElement.expiryDate.value).toEqual(cardInfo.expiryDate)
            expect(formDataElement.cardName.value).toEqual(cardInfo.cardName)
            expect(formDataElement.cvc.value).toEqual(cardInfo.cvc)
        })
        it('there is HAVE button to download cards-data from the server', () => {
            const { cardInfo } = card()
            const { profile } = setup(true, cardInfo)
            expect(profile.queryByText("Уже идентифицированы?")).toBeNull()
        })
        it('correct dispatch with cardInfo', () => {
            const { profile } = setup(true, '')
            const dispatch = jest.fn();
            useDispatch.mockReturnValue(dispatch);
            const formData = profile.getByLabelText("profile-form")
            const formDataElement = profile.getByLabelText("profile-form").elements;

            fireEvent.change(formDataElement.cardNumber, { target: { value: '5555 5555 5555 5555' } });
            fireEvent.change(formDataElement.expiryDate, { target: { value: '12/25' } });
            fireEvent.change(formDataElement.cardName, { target: { value: 'REACT_ANGULAROVICH' } });
            fireEvent.change(formDataElement.cvc, { target: { value: '666' } });
            fireEvent.submit(formData)

            expect(dispatch).toHaveBeenCalledWith(fetchCardRequest({
                cardNumber: '5555 5555 5555 5555',
                expiryDate: '12/25',
                cardName: 'REACT_ANGULAROVICH',
                cvc: '666',
                tokenSession: "recsrhD6vTuINgMcB"
            }));
        })
        it('complete form after submit', () => {
            const { cardInfo } = card()
            const { profile } = setup(true, cardInfo)
            const formData = profile.getByLabelText("profile-form")
            fireEvent.submit(formData)
            expect(profile.getByText('Перейти на карту')).toBeTruthy()
        })
    })
    describe("render with NOT added card", () => {
        it('inputs have empty value', () => {
            const { profile } = setup(false)
            const formDataElement = profile.getByLabelText("profile-form").elements;
            expect(formDataElement.cardNumber.value.length).toEqual(0)
            expect(formDataElement.expiryDate.value.length).toEqual(0)
            expect(formDataElement.cardName.value.length).toEqual(0)
            expect(formDataElement.cvc.value.length).toEqual(0)
        })
        it('there is no button to download cards-data from the server', () => {
            const { profile } = setup(false, '')
            expect(profile.queryByText("Уже идентифицированы?")).toBeInTheDocument()
        })

    })
})