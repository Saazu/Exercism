//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const ORDER = ['first', 'second', 'third', 'fourth', 'fifth', 'last'];

const getNthSpecificDay = (year, month, dateMoniker, day) => {
  let date;
  for (let i = 1; i < 8; i++) {
    if ((new Date(year, month - 1, i)).getDay() === DAYS.indexOf(day)) {
      date = i;
      break;
    }
  }

  return new Date(year, month - 1, date + (7 * ORDER.indexOf(dateMoniker)));
}

const teenthDay = (year, month, day) => {
  let date;
  for (let i = 13; i < (13 + DAYS.length); i++) {
    if ((new Date(year, month - 1, i)).getDay() === DAYS.indexOf(day)) {
      date = i;
      break;
    }
  }
  return new Date(year, month - 1, date);
}

const numberOfDaysInMonth = (month, year) => {
  return new Date(month, year, 0).getDate();
}

const getLastOfDay = (year, month, day) => {
  let date;
  const numberOfDays = numberOfDaysInMonth(year, month);
  for (let i = numberOfDays; i >= numberOfDays - 7; i--) {
    if ((new Date(year, month - 1, i)).getDay() === DAYS.indexOf(day)) {
      date = i;
      break;
    }
  }

  return new Date(year, month - 1, date);
}

export const meetup = (year, month, dateMoniker, day) => {
  switch (dateMoniker) {
    case 'teenth':
      return teenthDay(year, month, day);
    case 'last':
      return getLastOfDay(year, month, day);
    default:
      return getNthSpecificDay(year, month, dateMoniker, day);
  }

};