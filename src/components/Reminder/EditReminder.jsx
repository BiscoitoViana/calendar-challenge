import React, { useState } from 'react'
import { string, func } from 'prop-types'
import moment from 'moment'

import {
  saveChangesToReminderLocalStorage,
  deleteReminderFromLocalStorage,
  deleteAllRemindersFromDate
} from 'storage/reminders'

import ColorInput from 'ui/ColorInput'
import TextInput from 'ui/TextInput'

function EditReminder({
  id,
  description: initialDescription,
  date: initialDate,
  time: initialTime,
  city: initialCity,
  theme: initialTheme,
  closeDialog
}) {
  const [description, setDescription] = useState(initialDescription)
  const [date, setDate] = useState(
    moment(initialDate, 'YYYY-MM-DD').format('MM/DD/YYYY')
  )
  const [time, setTime] = useState(initialTime)
  const [city, setCity] = useState(initialCity)
  const [theme, setTheme] = useState(initialTheme)

  function deleteReminder() {
    deleteReminderFromLocalStorage(id)
    closeDialog()
    window.location.reload(false)
  }

  function deleteAllReminders() {
    deleteAllRemindersFromDate(initialDate)
    closeDialog()
    window.location.reload(false)
  }

  function saveChanges() {
    const item = {
      id: id,
      description: description,
      date: moment(date, 'MM-DD-YYYY').format('YYYY-MM-DD'),
      time: moment(time, 'HH:mm').format('HH:mm'),
      theme: theme,
      city: city
    }

    saveChangesToReminderLocalStorage(item)
    closeDialog()
    window.location.reload(false)
  }

  return (
    <>
      <div className="reminder__overlay"></div>
      <div className="reminder__lightbox">
        <header>
          <h3 className="reminder-lightbox__title">Edit reminder</h3>
          <button
            onClick={closeDialog}
            className="reminder-lightbox__close-button"
          >
            Close
          </button>
        </header>
        <TextInput
          name="reminder-description"
          label="Description"
          value={description}
          onChange={setDescription}
          maxLength={30}
        />

        <div className="reminder-lightbox__datetime-fields">
          <TextInput
            name="reminder-time"
            label="Time"
            placeholder="Ex.: 21:00"
            value={time}
            onChange={setTime}
            maxLength={5}
          />
          <TextInput
            name="reminder-day"
            label="Day"
            placeholder="Ex.: 12/31/2020"
            value={date}
            onChange={setDate}
            maxLength={10}
          />
        </div>

        <TextInput
          name="reminder-city"
          label="City"
          value={city}
          onChange={setCity}
          maxLength={30}
        />
        <ColorInput value={theme} onSelect={setTheme} />

        <div className="reminder-lightbox__buttons-list">
          <button
            className="reminder-lightbox__primary-button"
            onClick={saveChanges}
          >
            Save changes
          </button>
          <button
            className="reminder-lightbox__delete-button"
            onClick={deleteReminder}
          >
            Delete reminder
          </button>
          <button
            className="reminder-lightbox__delete-all-button"
            onClick={deleteAllReminders}
          >
            Delete all reminders from today
          </button>
        </div>
      </div>
    </>
  )
}

EditReminder.propTypes = {
  id: string.isRequired,
  description: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  city: string.isRequired,
  theme: string.isRequired,
  closeDialog: func.isRequired
}

export default EditReminder
