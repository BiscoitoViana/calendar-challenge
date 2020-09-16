import React, { useState } from 'react'
import { func } from 'prop-types'
import moment from 'moment'

import { saveNewReminderToLocalStorage } from 'storage/reminders'

import ColorInput from 'ui/ColorInput'
import TextInput from 'ui/TextInput'

import './styles.css'

function NewReminder({ closeDialog }) {
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [city, setCity] = useState('')
  const [theme, setTheme] = useState('blue')

  function saveNewReminder() {
    const item = {
      id: Date.now().toString(),
      description: description,
      date: moment(date, 'MM-DD-YYYY').format('YYYY-MM-DD'),
      time: moment(time, 'HH:mm').format('HH:mm'),
      theme: theme,
      city: city
    }
    saveNewReminderToLocalStorage(item)
    closeDialog()
    window.location.reload(false)
  }

  return (
    <>
      <div className="reminder__overlay"></div>
      <div className="reminder__lightbox">
        <header>
          <h3 className="reminder-lightbox__title">New reminder</h3>
          <button
            data-testid="NewReminderCloseDialogButton"
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
        <button
          className="reminder-lightbox__primary-button"
          onClick={saveNewReminder}
          data-testid="CreateNewReminderButton"
        >
          Create reminder
        </button>
      </div>
    </>
  )
}

NewReminder.propTypes = {
  closeDialog: func.isRequired
}

export default NewReminder
