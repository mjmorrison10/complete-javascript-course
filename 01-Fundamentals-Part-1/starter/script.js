////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const marksWeightDataOne = 78;
const marksHeightDataOne = 1.69;
const johnsWeightDataOne = 92;
const johnsHeightDataOne = 1.95;

const marksWeightDataTwo = 95;
const marksHeightDataTwo = 1.88;
const johnsWeightDataTwo = 85;
const johnsHeightDataTwo = 1.76;

const marksBMIDataOne = marksWeightDataOne / marksHeightDataOne ** 2;
const johnsBMIDataOne = johnsWeightDataOne / johnsHeightDataOne ** 2;
const marksHigherBMIDataOne = marksBMIDataOne > johnsBMIDataOne;

// console.log(`Mark's BMI for Data One is ${marksBMIDataOne}
// John's BMI for Data one is ${johnsBMIDataOne}
// If true, the winner is Mark - ${marksHigherBMIDataOne}`);

const marksBMIDataTwo = marksWeightDataTwo / marksHeightDataTwo ** 2;
const johnsBMIDataTwo = johnsWeightDataTwo / johnsHeightDataTwo ** 2;
const marksHigherBMIDataTwo = marksBMIDataTwo > johnsBMIDataTwo;

// console.log(`Mark's BMI for Data One is ${marksBMIDataTwo}
// John's BMI for Data one is ${johnsBMIDataTwo}
// If true, the winner is Mark - ${marksHigherBMIDataTwo}`);
// End of Coding Challenge #1

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let whoHasHigherBMIDataOne;

if (marksHigherBMIDataOne) {
  whoHasHigherBMIDataOne = `Mark's BMI of ${marksBMIDataOne.toFixed(
    2
  )} has a higher BMI than John at ${johnsBMIDataOne.toFixed(2)}`;
} else {
  whoHasHigherBMIDataOne = `John's BMI of ${johnsBMIDataOne.toFixed(
    2
  )} has a higher BMI than Mark at ${marksBMIDataOne.toFixed(2)}`;
}

// console.log(whoHasHigherBMIDataOne);

let whoHasHigherBMIDataTwo;

if (marksHigherBMIDataTwo) {
  whoHasHigherBMIDataTwo = `Mark's BMI of ${marksBMIDataTwo.toFixed(
    2
  )} has a higher BMI than John at ${johnsBMIDataTwo.toFixed(2)}`;
} else {
  whoHasHigherBMIDataTwo = `John's BMI of ${johnsBMIDataTwo.toFixed(
    2
  )} has a higher BMI than Mark at ${marksBMIDataTwo.toFixed(2)}`;
}

// console.log(whoHasHigherBMIDataTwo);

// End of Coding Challenge #2

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const dolphinsScore = [96, 108, 89];

const koalasScore = [88, 91, 110];

// dolphinsScore = [96, 50, 89];
// koalasScore = [100, 99, 99];

const averageDolphinScore =
  (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2]) /
  dolphinsScore.length;

const averageKoalaScore =
  (koalasScore[0] + koalasScore[1] + koalasScore[2]) / koalasScore.length;

console.log(`The average score of the Dolphins is ${averageDolphinScore}`);

console.log(`The average score of the Koalas is ${averageKoalaScore}`);

// averageDolphinScore = 10;
// averageKoalaScore = 5;

if (
  averageDolphinScore == averageKoalaScore &&
  (dolphinsScore[0] > 99 ||
    dolphinsScore[1] > 99 ||
    dolphinsScore[2] > 99 ||
    koalasScore[0] > 99 ||
    koalasScore[1] > 99 ||
    koalasScore[2] > 99)
) {
  console.log(`Both teams tie!`);
} else if (
  averageDolphinScore > averageKoalaScore &&
  (dolphinsScore[0] > 99 || dolphinsScore[1] > 99 || dolphinsScore[2] > 99)
) {
  console.log(
    `The Dolphins have a higher average score of ${averageDolphinScore.toFixed(
      2
    )}`
  );
} else if (
  averageKoalaScore > averageDolphinScore &&
  (koalasScore[0] > 99 || koalasScore[1] > 99 || koalasScore[2] > 99)
) {
  console.log(
    `The Koalas have a higher average score of ${averageKoalaScore.toFixed(2)}`
  );
} else {
  console.log(`The winning team requires a minimum score of 100.`);
}

// End of Coding Challenge #3

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const bill = [274, 40, 430];

const value = 0;

const tip =
  bill[value] >= 50 && bill[value] <= 300
    ? console.log(
        `The bill was ${bill[value]}, the tip was ${
          bill[value] * 0.15
        }, and the total value is ${(bill[value] * 1.15).toFixed(2)}`
      )
    : console.log(
        `The bill was ${bill[value]}, the tip was ${
          bill[value] * 0.2
        }, and the total value is ${(bill[value] * 1.2).toFixed(2)}`
      );

// End of Coding Challenge #4