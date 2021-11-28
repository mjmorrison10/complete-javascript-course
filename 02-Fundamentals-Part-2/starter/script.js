"use strict";

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1 ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const dolphinScore = [
  [44, 23, 71],
  [85, 54, 41],
];

const koalaScore = [
  [65, 54, 49],
  [23, 34, 27],
];

const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;

let averageDolphinOne = calcAverage(
  dolphinScore[0][0],
  dolphinScore[0][1],
  dolphinScore[0][2]
);
let averageDolphinTwo = calcAverage(
  dolphinScore[1][0],
  dolphinScore[1][1],
  dolphinScore[1][2]
);

let averageKoalaOne = calcAverage(
  koalaScore[0][0],
  koalaScore[0][1],
  koalaScore[0][2]
);
let averageKoalaTwo = calcAverage(
  koalaScore[1][0],
  koalaScore[1][1],
  koalaScore[1][2]
);

function checkWinner(averageDolphin, averageKoala) {
  if (averageDolphin > averageKoala && averageDolphin >= averageKoala * 2) {
    return `Dolphins wins (${averageDolphin} vs. ${averageKoala})`;
  } else if (
    averageDolphin < averageKoala &&
    averageKoala >= averageDolphin * 2
  ) {
    return `Koala wins (${averageKoala} vs. ${averageDolphin})`;
  } else if (
    averageDolphin >= averageKoala * 2 ||
    averageKoala <= averageDolphin * 2
  ) {
    return `One team requires double the amount of points! Dolphin has ${averageDolphin}. Koala has ${averageKoala}.`;
  } else {
    return "No winner!";
  }
}

console.log(checkWinner(averageDolphinOne, averageKoalaOne));

console.log(checkWinner(averageDolphinTwo, averageKoalaTwo));

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2 ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const bill = [125, 555, 44];

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3 ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi.toFixed(
      2
    )}) is higher than ${john.firstName} ${
      john.lastName
    }'s BMI (${john.bmi.toFixed(2)})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${john.bmi.toFixed(
      2
    )}) is higher than ${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.bmi.toFixed(2)})`
  );
}

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4 ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

let sum = 0;

for (let i = 0; i < bills.length; i++) {
  sum += totals[i];
}

console.log(`The sum of the bills is ${sum}`);

const average = sum / bills.length;

console.log(`The average of the bills is ${average}`);

