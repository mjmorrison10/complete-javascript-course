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
    return "Tie";
  }
}

console.log(checkWinner(averageDolphinOne, averageKoalaOne));
console.log(checkWinner(averageDolphinTwo, averageKoalaTwo));
