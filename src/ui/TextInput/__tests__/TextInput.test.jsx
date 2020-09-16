import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import TextInput from '../'

describe('Text input', () => {
  it('should render the label and maxlength value received as a prop', () => {
    const defaultProps = {
      label: 'Input Label',
      name: 'input-field',
      value: '',
      onChange: jest.fn(),
      maxLength: 30
    }
    const { getByTestId, getByText } = render(<TextInput {...defaultProps} />)

    expect(getByText('Input Label')).toBeTruthy()
    expect(getByTestId('RemainingCharactersCount')).toHaveTextContent(30)
  })

  it('should update the remaining characters counter label as the input values changes', () => {
    const typedText = 'lorem ipsum dolor sit amet'

    const defaultProps = {
      label: 'Input Label',
      name: 'input-field',
      value: typedText,
      onChange: jest.fn(),
      maxLength: 30,
      placeholder: 'placeholder text'
    }
    const { getByTestId, queryByPlaceholderText } = render(
      <TextInput {...defaultProps} />
    )

    const input = queryByPlaceholderText('placeholder text')

    const expectedCharacterLeftNumber =
      defaultProps.maxLength - typedText.length

    expect(getByTestId('RemainingCharactersCount')).toHaveTextContent(
      expectedCharacterLeftNumber
    )
  })
})
