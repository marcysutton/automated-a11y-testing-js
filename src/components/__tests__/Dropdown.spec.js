import React from 'react'
import {render, screen, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Dropdown  from '../Dropdown'

describe('Dropdown', () => {
    it('labels the dropdown button', () => {
        const textFixture = "Hamburgers"
        const { getByText } = render(<Dropdown buttonName={textFixture} />)

        const buttonText = getByText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
})