import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { NewReminder } from '../'

describe('New reminder dialog', () => {
  it('should render the close button and call the close dialog function when clicked', () => {
    const closeDialogMock = jest.fn()
    const { getByTestId } = render(
      <NewReminder closeDialog={closeDialogMock} />
    )

    const closeDialogButton = getByTestId('NewReminderCloseDialogButton')
    fireEvent.click(closeDialogButton)

    expect(closeDialogButton).toBeInTheDocument()
    expect(closeDialogMock).toBeCalledTimes(1)
  })

  it('should render the create reminder button', () => {
    const closeDialogMock = jest.fn()
    const { getByTestId } = render(
      <NewReminder closeDialog={closeDialogMock} />
    )

    const createReminderButton = getByTestId('CreateNewReminderButton')

    expect(createReminderButton).toBeInTheDocument()
  })
})
