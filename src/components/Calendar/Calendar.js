export function mountCalendar(selectedDate) {
  const firstDay = selectedDate.clone().startOf('month').startOf('week')
  const lastDay = selectedDate.clone().endOf('month').endOf('week')

  const date = firstDay.clone().subtract(1, 'day')
  const calendar = []
  while (date.isBefore(lastDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => date.add(1, 'day').clone())
    )
  }

  return calendar
}
