import React from 'react'
import { string, bool } from 'prop-types'

import './styles.css'

function CalendarDay({
  day,
  isToday,
  isSelected,
  isWeekend,
  isNotCurrentMonth,
  children
}) {
  let classNames = ['calendar-body__day']
  if (isToday) classNames.push('is-today')
  if (isSelected) classNames.push('is-selected')
  if (isWeekend) classNames.push('is-weekend')
  if (isNotCurrentMonth) classNames.push('is-not-current-month')

  return (
    <li className={classNames.join(' ')}>
      <span className="calendar-day__label">{day}</span>
      <div className="calendar-day__reminders">{children}</div>
    </li>
  )
}

CalendarDay.propTypes = {
  day: string.isRequired,
  isToday: bool,
  isSelected: bool,
  isWeekend: bool,
  isNotCurrentMonth: bool
}

CalendarDay.defaultProps = {
  isToday: false,
  isSelected: false,
  isWeekend: false,
  isNotCurrentMonth: false
}

export default CalendarDay
