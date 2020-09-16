const STORAGE_KEY = 'CalendarChallenge_Reminders'

export const loadRemindersFromLocalStorage = () => {
  const storageValue = localStorage.getItem(STORAGE_KEY)

  return storageValue
}

export const saveNewReminderToLocalStorage = value => {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const remindersArray = storageValue ? JSON.parse(storageValue) : []
  remindersArray.push(value)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(remindersArray))
}

export const deleteReminderFromLocalStorage = id => {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const remindersArray = JSON.parse(storageValue).filter(item => item.id !== id)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(remindersArray))
}

export const deleteAllRemindersFromDate = date => {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const remindersArray = JSON.parse(storageValue).filter(
    item => item.date !== date
  )

  localStorage.setItem(STORAGE_KEY, JSON.stringify(remindersArray))
}

export const saveChangesToReminderLocalStorage = reminder => {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const remindersArray = JSON.parse(storageValue).filter(
    item => item.id !== reminder.id
  )

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...remindersArray, reminder])
  )
}
