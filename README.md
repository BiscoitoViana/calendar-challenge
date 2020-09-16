# Front-end Javascript Challenge - Calendar

This is a Front-end challenge to Jobsity. It is meant to test knowledge of front-end web technologies and the
ability to create front-end UI products with attention to details, cross-browser compatibility,
standards, and reusability.

It consists on a demo calendar application using [Create React App](https://github.com/facebook/create-react-app).

You can see it in action [here](https://biscoitoviana.github.io/calendar-challenge/)

## Available Scripts

In the project directory, you can run:

### `yarn`

It installs all the dependencies and makes it ready to run.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

## Mandatory feats

- [x] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.
- [x] Display reminders on the calendar view in the correct time order.
- [x] Allow the user to select color when creating a reminder and display it appropriately.
- [x] Ability to edit reminders – including changing text, city, day, time and color.
- [x] Add a weather service call from a free API such as Open Weather Map, and get the weather forecast (ex. Rain) for the date of the calendar reminder based on he city.
- [x] Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

## Bonus (optional) functionalities

- [x] The calendar supports multiple months.
- [x] It is possible to delete all reminders of the same day
- [x] The overflow of multiple reminders in the same day is working

### Considerations

This project is build using React. It also uses:

- Axios - For ajax requests
- ESLint and Prettier - For linting and enforce code style
- MommentJS - To handle dates and time
- PropTypes - To validate de types of props
- React Testing Libray - For Unit Testing
