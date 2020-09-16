import moment from 'moment'

export function dateIsValid(value) {
  if (!value) return false
  const date = moment(value, 'MM/DD/YYYY')
  if (!date.isValid()) return false
  return true
}

export function timeIsValid(value) {
  if (!value) return false
  const time = moment(value, 'HH:mm')
  if (!time.isValid()) return false
  return true
}
