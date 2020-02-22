import React from "react";
import { render } from "@testing-library/react";
import ProfileCardAdd from '../ProfileCardAdd'
import { BrowserRouter } from "react-router-dom";

describe('test render ProfileCardAdd', () => {
    const setup = () => {
        const component = render(< BrowserRouter ><ProfileCardAdd /></ BrowserRouter>)

        return {
            component,
        };
    }
    it('to be in the document', () => {
        const { component } = setup()
        expect(component.getByText('Перейти на карту')).toBeInTheDocument()
    })
    it('expect href /map', () => {
        const { component } = setup()
        const btn = component.getByText('Перейти на карту')
        expect(btn.getAttribute('href')).toBe('/map')
    })
})