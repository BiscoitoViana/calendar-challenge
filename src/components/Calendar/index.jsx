import React, { useState, useEffect } from 'react'

import moment from 'moment'

import CalendarHeader from './components/CalendarHeader'
import CalendarBody from './components/CalendarBody'

import { mountCalendar } from './Calendar'

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(moment())
  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    setCalendar(mountCalendar(selectedDay))
  }, [selectedDay])

  function handleMonthChange(value) {
    switch (value) {
      case 'next':
        setSelectedDay(selectedDay.clone().add(1, 'month'))
        break
      case 'previous':
        setSelectedDay(selectedDay.clone().subtract(1, 'month'))
        break
      default:
        break
    }
  }

  return (
    <>
      <CalendarHeader
        currentMonth={selectedDay.format('MMMM')}
        currentYear={selectedDay.format('YYYY')}
        handleMonthChange={handleMonthChange}
      />
      <CalendarBody dates={calendar} selectedDay={selectedDay} />
    </>
  )
}

export default Calendar
