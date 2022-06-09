import React from 'react'
import {render, screen, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Dropdown  from '../Dropdown'

const user = userEvent.setup()

describe('Dropdown', () => {
    it('labels the dropdown button', () => {
        const textFixture = "Hamburgers"
        const { getByText } = render(<Dropdown buttonName={textFixture} />)

        const buttonText = getByText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
    it('the dropdown button can be reached with the keyboard', () => {
        render(<Dropdown buttonName="Settings" />)

        const dropdownButton = screen.getByRole('button')

        user.tab()
        expect(dropdownButton).toHaveFocus()
    })
    it('the dropdown button can be operated with the keyboard', async() => {
        render(<Dropdown buttonName="Smashing" />)

        const dropdownButton = screen.getByTestId('dropdown-btn')
        const dropdownWrapper = screen.getByTestId('dropdown-wrapper')

        await user.click(dropdownButton)
        expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')

        await user.type(dropdownWrapper, '{Esc}', {skipClick: true})
        expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')
    })
})