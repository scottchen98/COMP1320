const monthCode = {
  Jan: 1,
  Feb: 4,
  Mar: 4,
  Apr: 0,
  May: 2,
  Jun: 5,
  Jul: 0,
  Aug: 3,
  Sep: 6,
  Oct: 1,
  Nov: 4,
  Dec: 6,
};

const dayCode = {
  0: "Saturday",
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
};

const monthInLetters = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "Augest",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

// helper functions
const firstTwoDigits = (num) => {
  const firstTwoString = String(num).slice(0, 2);
  const firstTwoNumber = Number(firstTwoString);
  return firstTwoNumber;
};

const lastTwoDigits = (num) => {
  const lastTwoString = String(num).slice(-2);
  const lastTwoNumber = Number(lastTwoString);
  return lastTwoNumber;
};

const divideByTwelve = (num) => {
  return Math.floor(num / 12);
};

const remainderDividedByTwelve = (num) => {
  return num % 12;
};

const divideByFour = (num) => {
  return Math.floor(num / 4);
};

const remainderDividedBySeven = (num) => {
  return num % 7;
};

const isLeapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

const checkLeapYear = (year, month, num) => {
  if (isLeapYear(year)) {
    if (month == "January" || month == "February") {
      return num - 1;
    }
    return num;
  }
  return num;
};

const checkCenturies = (firstTwoDigitsOfYear, num) => {
  if (firstTwoDigitsOfYear == 16 || firstTwoDigitsOfYear == 20) {
    return num + 6;
  } else if (firstTwoDigitsOfYear == 17 || firstTwoDigitsOfYear == 21) {
    return num + 4;
  } else if (firstTwoDigitsOfYear == 18) {
    return num + 2;
  }
  return num;
};

const numberOfDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// main functions
const getDayOfTheWeek = (year, month, date) => {
  const firstThreeLettersOfMonth = month.substring(0, 3);
  const firstTwoDigitsOfYear = firstTwoDigits(year);
  const lastTwoDigitsOfYear = lastTwoDigits(year);
  const numberOfTwelves = divideByTwelve(lastTwoDigitsOfYear);
  const remainder = remainderDividedByTwelve(lastTwoDigitsOfYear);
  const numberOfFours = divideByFour(remainder);
  let total =
    numberOfTwelves +
    remainder +
    numberOfFours +
    date +
    monthCode[firstThreeLettersOfMonth];

  total = checkLeapYear(year, month, total);
  total = checkCenturies(firstTwoDigitsOfYear, total);

  const modOfTotal = remainderDividedBySeven(total);
  return dayCode[modOfTotal];
};

const makeCalendar = (year) => {
  for (let month = 1; month < 13; month++) {
    for (let date = 1; date <= numberOfDays(year, month); date++) {
      const day = getDayOfTheWeek(year, monthInLetters[month], date);
      console.log(`${month}-${date}-${year} is a ${day}`);
    }
  }
};

module.exports = { getDayOfTheWeek, makeCalendar, numberOfDays };
