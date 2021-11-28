// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr1, arr2) {
  const arr = arr1.concat(arr2);
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + "ºC in " + (i + 1) + " days ... ";
  }
  console.log("..." + str);

  // console.log(`${arr[i]}ºC in ${i + 1} days ...`);
};

printForecast(data1, data2);
