const fs = require("fs");
const process = require("process");
const lab3 = require("./mathHelpers");

const processInput = (xOne, yOne, xTwo, yTwo, dirName) => {
  fs.mkdir(dirName, (err) => {
    if (err == null) {
      const message = `(${xOne},${yOne},${xTwo},${yTwo})\nThe distance between your two points: (${xOne},${yOne}), (${xTwo},${yTwo}) is `;
      fs.writeFile(`${dirName}/points.txt`, message, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Content saved");
          const distanceInString = String(
            lab3.distance(xOne, yOne, xTwo, yTwo)
          );
          fs.appendFile(`${dirName}/points.txt`, distanceInString, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(message + distanceInString);
            }
          });
        }
      });
      // Check if it's a file-already-exists error
    } else if (err.code === "EEXIST") {
      console.log(
        `Folder "${dirName}" already exists. Creating a new folder for you called temp_${dirName}.`
      );
      processInput(xOne, yOne, xTwo, yTwo, `temp_${dirName}`);
      // If it's some other type of error, just console.log the error
    } else {
      console.log(err);
    }
  });
};

// Object destructuring: each key represents the index of the user input we want to extract
let { 2: inputOne, 3: inputTwo, 4: inputThree, 5: inputFour } = process.argv;

if (
  isNaN(Number(inputOne)) ||
  isNaN(Number(inputTwo)) ||
  isNaN(Number(inputThree)) ||
  isNaN(Number(inputFour))
) {
  console.log("Invalid input.");
} else {
  inputOne = parseInt(inputOne);
  inputTwo = parseInt(inputTwo);
  inputThree = parseInt(inputThree);
  inputFour = parseInt(inputFour);
  processInput(inputOne, inputTwo, inputThree, inputFour, "dataPoints");
}
