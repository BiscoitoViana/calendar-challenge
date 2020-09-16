import React, { useState } from 'react'
import { string } from 'prop-types'

import './styles.css'

import EditReminder from 'components/Reminder/EditReminder'

function ReminderLabel({ id, description, date, time, city, theme }) {
  const [isOpen, setIsOpen] = useState(false)

  function openEditCurrentReminder(event) {
    event.stopPropagation()
    setIsOpen(true)
  }

  function closeEditCurrentReminder() {
    setIsOpen(false)
  }

  return (
    <>
      <div
        onClick={openEditCurrentReminder}
        className={`reminder-label theme--${theme}`}
      >
        {description}
      </div>
      {isOpen && (
        <EditReminder
          id={id}
          description={description}
          date={date}
          time={time}
          city={city}
          theme={theme}
          closeDialog={closeEditCurrentReminder}
        />
      )}
    </>
  )
}

ReminderLabel.propTypes = {
  id: string.isRequired,
  description: string.isRequired,
  date: string.isRequired,
  city: string.isRequired,
  theme: string.isRequired
}

export default ReminderLabel
