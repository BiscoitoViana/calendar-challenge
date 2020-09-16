import React, { useState, useEffect } from 'react'
import moment from 'moment'

import './styles.css'

import { loadRemindersFromLocalStorage } from 'storage/reminders'

import CalendarDay from './components/CalendarDay'
import ReminderLabel from 'ui/ReminderLabel'

function CalendarBody({ dates, selectedDay }) {
  const [reminders, setReminders] = useState([])

  useEffect(() => {
    const storageInfo = loadRemindersFromLocalStorage()
    if (storageInfo) setReminders(JSON.parse(storageInfo))
  }, [])

  function sorting(a, b) {
    if (a.time < b.time) return -1
    if (a.time > b.time) return 1
    return 0
  }

  return (
    <div className="calendar-body">
      {dates.map(week => (
        <div key={week} className="calendar-body__week">
          {week.map((day, index) => (
            <CalendarDay
              key={day}
              day={day.format('D')}
              isSelected={selectedDay.isSame(day, 'day')}
              isToday={day.isSame(new Date(), 'day')}
              isWeekend={index === 0 || index === 6}
              isNotCurrentMonth={!selectedDay.isSame(day, 'month')}
            >
              {reminders &&
                reminders.sort(sorting).map(reminder => {
                  if (day.isSame(moment(reminder.date), 'day')) {
                    return <ReminderLabel key={reminder.id} {...reminder} />
                  }
                })}
            </CalendarDay>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalendarBody
