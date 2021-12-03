'use strict';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[3]]: {
    open: '12',
    close: '22',
  },
  [weekdays[4]]: {
    open: '11',
    close: '23',
  },
  [weekdays[5]]: {
    open: '0', // Open 24 hours
    close: '24',
  },

  /*
  Old way
  thu: {
    open: '12',
    close: '22',
  },
  fri: {
    open: '11',
    close: '23',
  },
  sat: {
    open: '0', // Open 24 hours
    close: '24',
  }
  */
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal syntax
  openingHours,

  // Taking an object outside and putting it inside an object - old way
  // openingHours: openingHours,

  // openingHours: {
  //   thu: {
  //     open: '12',
  //     close: '22',
  //   },
  //   fri: {
  //     open: '11',
  //     close: '23',
  //   },
  //   sat: {
  //     open: '0', // Open 24 hours
  //     close: '24',
  //   },
  // },

  // order: function (starterIndex = 1, mainIndex = 0, time = '20:00', address) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 enhanced object literal syntax
  order(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////////////////////////////////////////////
// Destructuring Objects and Arrays ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 1,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// if [] is on the left side of =, it destructure the array

// const [x, y, z] = arr;
// console.log('arr:', arr);
// console.log('(x, y, z):', x, y, z);

// const [first, second] = restaurant.categories;
// console.log('restaurant.categories:', restaurant.categories);
// console.log(
// '(first, second):',
// first,
// second
// );

// In order to skip an element, use , , between elements
// const [first, , second] = restaurant.categories;
// console.log('(first, , second):', first, second);

// let [main, secondary] = restaurant.categories;
// Switching the variables around
// console.log('(BEFORE: main, secondary):', main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('(AFTER: main, secondary):', main, secondary);

// [main, secondary] = [secondary, main]; // ES6 syntax
// console.log('(AFTER: main, secondary):', main, secondary);

//Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log('(starter, mainCourse):', starter, mainCourse);

// nested destructuring
// const nested = [2, 4, [5, 6]];
// console.log('nested:', nested);
// const [i, , j] = nested;
// console.log('(i, , j):', i, j);

// const [, k, [, l]] = nested;
// console.log('( , k, [ , l]):', k, l);

// const [a, b, [c, d]] = nested;
// console.log('(a, b, c, d):', a, b, c, d);

// default values
// const [p, q, r] = [8, 9];
// console.log('(p, q, r):', p, q, r);
// Result - 8 9 undefined

// const [p = 1, q = 1, r = 'Not available'] = [8, 9];
// console.log('(p, q, r):', p, q, r);
// Result - 8 9 Not available

// const { name, openingHours, categories } = restaurant;
// console.log(
//   '(name, openingHours, categories):',
//   name,
//   openingHours,
//   categories
// );
// Result - Classico Italiano { openingHours: { thu: { open: '12', close: '22' }, fri: { open: '11', close: '23' }, sat: { open: '0', close: '24' } }, categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ] }

// Custom variable names for destructuring
// obj: new variable
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories,
//   tags,
// } = restaurant;
// console.log(
//   '(restaurantName, hours, categories, tags):',
//   restaurantName,
//   hours,
//   categories,
//   tags
// );
// Result - Classico Italiano { openingHours: { thu: { open: '12', close: '22' }, fri: { open: '11', close: '23' }, sat: { open: '0', close: '24' } }, categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ] }

// Default values

// const { menu = [], starterMenu = [] } = restaurant;
// console.log('(menu, starterMenu):', menu, starterMenu);
// Result - [], [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({a, b} = obj);
// console.log('(a, b):', a, b);
// Result - 23 7

// nested objects

// const {fri} = openingHours
// console.log(fri);
// Result - { open: '11', close: '23' }

// const {fri: {open, close}} = openingHours
// console.log('(open, close):', open, close);
// Result - 11 23

// const {fri: {open: o, close: c}} = hours;
// console.log('(o, c):', o, c);
// Result - 11 23

////////////////////////////////////////////////////////////////////////////////
// Spread Operator //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log('badNewArr:', badNewArr);
// Result - [ 1, 2, 7, 8, 9 ]

// const newArr = [1, 2, ...arr];
// console.log('newArr:', newArr);
// Result - [ 1, 2, 7, 8, 9 ]

// console.log("...newArr:", ...newArr);
// Result - 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log('newMenu:', newMenu);
// Result - [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Gnocci' ]

// Copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log('mainMenuCopy:', mainMenuCopy);
// Result - [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// Join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log('menu:', menu);
// Result - [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// Iterables: arrays, strings, maps, sets. NOT objects

// const str = "Hello";
// const letters = [...str];
// console.log(letters);
// Result - [ 'H', 'e', 'l', 'l', 'o' ]
// console.log(...str);
// Result - H e l l o

// console.log(`${...str}`);
// Result - Does not work

// Real world example
// const ingredients = ['pepperoni', 'cheese', 'sausage'];

// Old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// with spread operator
// restaurant.orderPasta(...ingredients);

// Spread operator with objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe"};
// console.log(newRestaurant);
// Result - {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy);
// Result - {foundedIn: 1998, name: 'Ristorante Roma', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

////////////////////////////////////////////////////////////////////////////////
// Rest Operator ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*

// Destructuring

// SPREAD, because on right side of assignment operator =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of assignment operator =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// Result - 1 2 [ 3, 4, 5 ]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Result - Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
// Result - {open: '0', close: '24'} {thu: {…}, fri: {…}}

// Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('sum', sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 5, 3, 2, 1, 6, 4, 3, 4, 5);

const x = [23, 5, 7];
add('x', ...x);

restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');
// Result - mushrooms
// Result - (3) ['onion', 'olive', 'spinach']

restaurant.orderPizza('Mushrooms');
// Result - mushrooms
// Result - []

*/

////////////////////////////////////////////////////////////////////////////////
// Short Circuiting ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* 
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
// Result - 3

console.log('' || 'Jonas');
// Result - Jonas

console.log(true || 0);
// Result - true

console.log(undefined || null);
// Result - null

console.log(undefined || 0 || '' || 'hello' || 23 || null);
// Result - hello
// First truthy value in the chain of OR operations

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);
// Result = 10
// No numGuests in restaurant object, so default value is used in ternary operator


const guests2 = restaurant.numGuests || 10

console.log(guests2);
// No numGuests in restaurant object, so default value is used in short-circuiting


console.log("----------And----------");

// AND operator short circuits when first value is falsy then immediately returns that falsy value without evaluating the second operand

console.log(0 && "Jonas");
// Result - 0


console.log(7 && "Jonas");
// Result - Jonas

// AND returns last value that's truthy

console.log("hello" && 23 && null && "jonas");
// Result - null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms','spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');

// OR operator will return the first truthy value or the last value if all of them are falsy
// AND operator will return the first falsy value or the last value if all of them are truthy

*/

////////////////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Result - 10

// Nullish vallues: null, undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// Result - 0

*/
///////////////////////////////////////////////////////////////////////////////
// Challenge #1: //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],

    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
console.log(game.players);

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log('gk:', gk, 'fp:', fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);


// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const { odds: {team1, x: draw, team2} } = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)


const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/

///////////////////////////////////////////////////////////////////////////////
// Looping Arrays For Of /////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  // for (const item of menu.entries()) {
    // console.log(`${item[0] + 1}: ${item[1]}`);
    console.log(`${i + 1}: ${el}`);
  }
  // console.log([...menu.entries()]);

  */

///////////////////////////////////////////////////////////////////////////////
// Optional Chaining //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);


const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  const open =  restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}


// Methods

console.log(restaurant.order?.(0,1) ?? "Method does not exist");

// Arrays

const users = [
  {name: "jones", email: "hello@jonas.io"}
]

console.log(users[0]?.name ?? "User does not exist");
// Result - jones
console.log(users[1]?.name ?? "User does not exist");
// Result - User does not exist
*/

///////////////////////////////////////////////////////////////////////////////
// Looping Objects, Object Keys, Values, and Entries //////////////////////////
///////////////////////////////////////////////////////////////////////////////

/*
// Property NAMES
const properties = Object.keys(openingHours)
console.log(properties);
// Result -  (3) ['Thu', 'Fri', 'Sat']

let openStr = `We are open on ${properties.length} days: `

for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += `${day},`
}

console.log(openStr);
// Result - We are open on 3 days: Thu,Fri,Sat,

// Property VALUES

const values = Object.values(openingHours)
console.log(values);
// Result -  (3) [{…}, {…}, {…}]


// Entire object
const entries = Object.entries(openingHours)
console.log(entries);
// Result -  (3) [Array(2), Array(2), Array(2)]

//  [key, value]
for(const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

*/

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2 ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],

    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
console.log(game.odds);
const oddsValues = Object.values(game.odds)
console.log("oddsValues: ", oddsValues);
const oddsKeys = Object.keys(game.odds)
console.log("oddsKeys: ", oddsKeys);
const oddsEntries = Object.entries(game.odds)
console.log("oddsEntries: ", oddsEntries);

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)



let average = 0;
for (let odd of oddsValues) {
  average += odd / oddsValues.length;
}

console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

for (const [team, odds] of oddsEntries) {
  // console.log("team:", team);
  // console.log("odds:", odds);

  const str = team === "x" ? "draw" : `victory ${game[team]}`
  console.log(`Odd of ${str} ${odds}`);
}



const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

*/

///////////////////////////////////////////////////////////////////////////////
// Sets ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
// Result - Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas'));
// Result - Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(new Set());
// Result - Set(0) {size: 0}

console.log(ordersSet.size);
// Result - 3

console.log(ordersSet.has('Pizza'));
// Result - True
console.log(ordersSet.has('Bread'));
// Result - False

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

ordersSet.delete('Risotto');

console.log(ordersSet);
// Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

console.log(ordersSet[0]);
// undefined

// ordersSet.clear();
// console.log(ordersSet);
// Set(0) {size: 0}

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffSet = new Set(staff);
console.log(staffSet);
// Set(3) {'Waiter', 'Chef', 'Manager'}

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// (3) ['Waiter', 'Chef', 'Manager'] // Turns into an array

console.log(new Set(staff.size));
// Set(0) {size: 0}

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']));
// Set(3) {'Waiter', 'Chef', 'Manager'}

console.log(new Set('michaelmorrison').size);
// 11 // The size of the set is the number of unique characters in the string

*/
///////////////////////////////////////////////////////////////////////////////
// Maps ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest.set(2, 'Lisbon, Portugal'));
// ap(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(rest.get('name'));
// Classico Italiano

console.log(rest.get(true));
// We are open!

let time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// We are open!

time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// We are close!

console.log(rest.has('categories'));
// true

rest.delete(2);

console.log(rest);
// Map(7) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}

rest.set([1, 2], 'Test');

console.log(rest);
// 7: {Array(2) => "Test"}
// key: (2) [1, 2]
// value: "Test"

console.log(rest.get([1, 2]));
// undefined

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// Test

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
// 9: {h1 => "Heading"}
// key: h1
// value: "Heading"
// size: 10
*/
///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3 ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. ///////////////////////////////////////////////////////////////////////
let events = new Set([...gameEvents.values()]);

events = Array.from(events);

console.log(events);

// 2. ///////////////////////////////////////////////////////////////////////

gameEvents.delete(64);

console.log(gameEvents);

// 3. ///////////////////////////////////////////////////////////////////////

const timeScored = Array.from(gameEvents.keys());
console.log(timeScored);

// let gameTimeLength = timeScored[timeScored.length - 1]

let gameTimeLength = timeScored[timeScored.length - 1] < 90 ? 90 : timeScored[timeScored.length - 1];

console.log("This", gameTimeLength);

// const average = gameTimeLength / timeScored.length;
const average = gameTimeLength / timeScored.length;
// const average =
console.log(average);

console.log(`
An event happened, on average, every ${average.toFixed(2)} minutes
`);

// 4. ///////////////////////////////////////////////////////////////////////

for (const [timeIndex, eventIndex] of gameEvents) {
  // const halfStr = timeIndex < 45 ? 'FIRST HALF' : 'SECOND HALF';
  const halfStr = timeIndex < (gameTimeLength / 2) ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${halfStr}] ${timeIndex} - ${eventIndex}`);
}
