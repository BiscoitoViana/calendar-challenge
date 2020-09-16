import React, { useState } from 'react'
import { string, func } from 'prop-types'

import './styles.css'

import { NewReminder } from 'components/Reminder/'

function CalendarHeader({ currentMonth, currentYear, handleMonthChange }) {
  const [isOpen, setIsOpen] = useState(false)
  function onNextMonthClick() {
    handleMonthChange('next')
  }

  function onPreviousMonthClick() {
    handleMonthChange('previous')
  }

  function toggleDialog() {
    setIsOpen(current => !current)
  }

  return (
    <>
      <div className="calendar-title-bar">
        <div className="calendar-header-info">
          <h1
            className="calendar-current-month"
            data-testid="calendarCurrentMonthLabel"
          >
            {currentMonth}
          </h1>
          <h3
            className="calendar-current-year"
            data-testid="calendarCurrentYearLabel"
          >
            {currentYear}
          </h3>
        </div>
        <div className="calendar-navigation">
          <button
            id="new-reminder-button"
            data-testid="calendarNewReminderButton"
            onClick={toggleDialog}
          >
            Create new reminder
          </button>
          <button
            data-testid="calendarPreviousMonthButton"
            onClick={onPreviousMonthClick}
          >
            Previous month
          </button>
          <button
            data-testid="calendarNextMonthButton"
            onClick={onNextMonthClick}
          >
            Next month
          </button>
        </div>
      </div>
      <div className="calendar-header">
        <ul className="calendar-header__weekdays">
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ul>
      </div>
      {isOpen && <NewReminder closeDialog={toggleDialog} />}
    </>
  )
}

CalendarHeader.propTypes = {
  currentMonth: string.isRequired,
  currentYear: string.isRequired,
  handleMonthChange: func.isRequired
}

export default CalendarHeader
