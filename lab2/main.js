const lab2 = require("./lab-two");
const _ = require("lodash");
const readlineSync = require("readline-sync");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

const monthsInNumbers = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  Augest: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const getYear = () => {
  while (true) {
    let year = readlineSync.question("What is the year? (e.g. 2020): ");
    if (year.includes(".") || year.length == 0) {
      console.log("Invalid input. Please try again.");
    } else {
      year = Number(year);
      if (Number.isInteger(year) && year > 0) {
        return year;
      }
      console.log("Invalid input. Please try again.");
    }
  }
};

const getMonth = () => {
  while (true) {
    const month = _.capitalize(
      readlineSync.question("What is the month? (e.g. January): ")
    );
    if (months.includes(month)) {
      return month;
    }
    console.log("Invalid input. Please try again.");
  }
};

const getDate = (year, month) => {
  while (true) {
    let date = readlineSync.question("What is the day? (e.g. 5): ");
    if (date.includes(".")) {
      console.log("Invalid input. Please try again.");
    } else {
      date = Number(date);
      if (
        date >= 1 &&
        date <= lab2.numberOfDays(year, monthsInNumbers[month]) &&
        Number.isInteger(date)
      ) {
        return date;
      }
      console.log("Invalid input. Please try again.");
    }
  }
};

const getDayOfTheWeekForUserDate = () => {
  const validYear = getYear();
  const validMonth = getMonth();
  const validDate = getDate(validYear, validMonth);
  console.log(lab2.getDayOfTheWeek(validYear, validMonth, validDate));
};

const askUserAboutGetDayOfTheWeek = () => {
  let condition = true;
  while (condition) {
    const dayOfTheWeek = _.toLower(
      readlineSync.question(
        "Would you like to know the day of the week for a specific date? (yes/no): "
      )
    );
    if (dayOfTheWeek == "yes") {
      getDayOfTheWeekForUserDate();
      condition = false;
    } else if (dayOfTheWeek == "no") {
      condition = false;
    } else {
      console.log("Invalid input. Please try again.");
    }
  }
};

const yesToFullCalendar = () => {
  while (condition) {
    let chosenYear = readlineSync.question("For which year? (e.g. 2022): ");
    if (chosenYear.includes(".") || chosenYear.length == 0) {
      console.log("Invalid input. Please try again.");
    } else {
      chosenYear = Number(chosenYear);
      if (Number.isInteger(chosenYear) && chosenYear > 0) {
        lab2.makeCalendar(chosenYear);
        condition = false;
      } else {
        console.log("Invalid input. Please try again.");
      }
    }
  }
};

let condition = true;
while (condition) {
  const fullCalendar = _.toLower(
    readlineSync.question("Would you like a full calendar year? (yes/no): ")
  );
  if (fullCalendar == "yes") {
    yesToFullCalendar();
    askUserAboutGetDayOfTheWeek();
  } else if (fullCalendar == "no") {
    askUserAboutGetDayOfTheWeek();
    condition = false;
  } else {
    console.log("Invalid input. Please try again.");
  }
}
