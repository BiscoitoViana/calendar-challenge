import React from 'react'
import { render } from '@testing-library/react'
import CalendarHeader from '../'

describe('Calendar Header', () => {
  it('should render all the week days', () => {
    const monthMock = 'December'
    const yearMock = '2020'
    const monthChangeMock = jest.fn()
    const { getByText } = render(
      <CalendarHeader
        currentMonth={monthMock}
        currentYear={yearMock}
        handleMonthChange={monthChangeMock}
      />
    )
    const sunday = getByText('Sunday')
    const monday = getByText('Monday')
    const tuesday = getByText('Tuesday')
    const wednesday = getByText('Wednesday')
    const thursday = getByText('Thursday')
    const friday = getByText('Friday')
    const saturday = getByText('Saturday')

    expect(sunday).toBeInTheDocument()
    expect(monday).toBeInTheDocument()
    expect(tuesday).toBeInTheDocument()
    expect(wednesday).toBeInTheDocument()
    expect(thursday).toBeInTheDocument()
    expect(friday).toBeInTheDocument()
    expect(saturday).toBeInTheDocument()
  })

  it('should render the current month name and current year', () => {
    const monthMock = 'December'
    const yearMock = '2020'
    const monthChangeMock = jest.fn()
    const { getByTestId } = render(
      <CalendarHeader
        currentMonth={monthMock}
        currentYear={yearMock}
        handleMonthChange={monthChangeMock}
      />
    )

    const currentMonthLabel = getByTestId('calendarCurrentMonthLabel')
    const currentYearLabel = getByTestId('calendarCurrentYearLabel')

    expect(currentMonthLabel).toHaveTextContent(monthMock)
    expect(currentYearLabel).toHaveTextContent(yearMock)
  })

  it('should render the buttons to next and previous month', () => {
    const monthMock = 'December'
    const yearMock = '2020'
    const monthChangeMock = jest.fn()
    const { getByTestId } = render(
      <CalendarHeader
        currentMonth={monthMock}
        currentYear={yearMock}
        handleMonthChange={monthChangeMock}
      />
    )

    const previousMonthButton = getByTestId('calendarPreviousMonthButton')
    const nextMonthButton = getByTestId('calendarNextMonthButton')

    expect(previousMonthButton).toBeInTheDocument()
    expect(nextMonthButton).toBeInTheDocument()
  })
})
