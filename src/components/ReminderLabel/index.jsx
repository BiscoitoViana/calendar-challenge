import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { string } from 'prop-types'

import './styles.css'

import { API_KEY } from 'api'

import EditReminder from 'components/Reminder/EditReminder'
import Loading from 'ui/Loading'

function ReminderLabel({ id, description, date, time, city, theme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getWeatherInfo() {
      if (city) {
        setLoading(true)
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
          const response = await axios.get(url)
          const { data } = response
          const { weather } = data
          setWeather(weather[0].description)
        } catch (e) {
          console.error(e.message)
        }
        setLoading(false)
      }
    }
    getWeatherInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {city && loading ? <Loading /> : null}
        {weather && (
          <span>
            {weather} in {city}
          </span>
        )}
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
  city: string,
  theme: string.isRequired
}

ReminderLabel.defaultProps = {
  city: ''
}

export default ReminderLabel
