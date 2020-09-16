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

  it('should not allow the creation of a reminder without description', () => {
    const closeDialogMock = jest.fn()
    const { getByTestId, queryByText } = render(
      <NewReminder closeDialog={closeDialogMock} />
    )

    expect(
      queryByText('Description field is mandatory')
    ).not.toBeInTheDocument()

    const createReminderButton = getByTestId('CreateNewReminderButton')
    fireEvent.click(createReminderButton)

    expect(queryByText('Description field is mandatory')).toBeInTheDocument()
  })

  it('should not allow the creation of a reminder without a valid date', () => {
    const closeDialogMock = jest.fn()
    const { getByTestId, queryByText } = render(
      <NewReminder closeDialog={closeDialogMock} />
    )

    expect(queryByText('Please provide a valid date')).not.toBeInTheDocument()

    const createReminderButton = getByTestId('CreateNewReminderButton')
    fireEvent.click(createReminderButton)

    expect(queryByText('Please provide a valid date')).toBeInTheDocument()
  })

  it('should not allow the creation of a reminder without a valid time', () => {
    const closeDialogMock = jest.fn()
    const { getByTestId, queryByText } = render(
      <NewReminder closeDialog={closeDialogMock} />
    )

    expect(queryByText('Please provide a valid time')).not.toBeInTheDocument()

    const createReminderButton = getByTestId('CreateNewReminderButton')
    fireEvent.click(createReminderButton)

    expect(queryByText('Please provide a valid time')).toBeInTheDocument()
  })
})
