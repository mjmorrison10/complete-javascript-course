// Coding Challenge #1

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

console.log(`Mark's BMI for Data One is ${marksBMIDataOne}
John's BMI for Data one is ${johnsBMIDataOne}
If true, the winner is Mark - ${marksHigherBMIDataOne}`);

const marksBMIDataTwo = marksWeightDataTwo / marksHeightDataTwo ** 2;
const johnsBMIDataTwo = johnsWeightDataTwo / johnsHeightDataTwo ** 2;
const marksHigherBMIDataTwo = marksBMIDataTwo > johnsBMIDataTwo;

console.log(`Mark's BMI for Data One is ${marksBMIDataTwo}
John's BMI for Data one is ${johnsBMIDataTwo}
If true, the winner is Mark - ${marksHigherBMIDataTwo}`);
// End of Coding Challenge #1

// Coding Challenge #2

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

console.log(whoHasHigherBMIDataOne);

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

console.log(whoHasHigherBMIDataTwo);

// End of Coding Challenge #2

// Coding Challenge #3




// Video 25

 


    
