# Experian test

This project is a technical test for Experian. For live test navigate to `https://edwinpeligro85.github.io/test-experian/`.

# Getting started

1. Go to project folder and install dependencies:

```sh
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```sh
npm start
```

# Main routes

Locations of the requested points in the test.

| Task                | Description                           |
| ------------------- | ------------------------------------- |
| `/account-overview` | Template requested in the first poin` |
| `/home` | Post module                           |

# Solution to problem #1

```
console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));

function divisors(num) {
  let divisors = [];

  for (var i = 2; i < num; i++) {
    if (!prime(num, i)) {
      divisors.push(i);
    }
  }

  return divisors.length > 0 ? divisors : num + ' es primo';
}

function prime(num, divisor) {
  if (num % divisor === 0) return false;

  return num !== 1;
}
```

# Solution to problem #2

```
const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));

console.log('================================');

const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const available2 = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe2, available2));

function cakes(recipe, available) {
  let hasAviables = true;
  let numberPreparedRecipes = 0;

  while (hasAviables) {
    let numberIngredientsUsed = 0;
    for (const key in recipe) {
      const ingredient = recipe[key];

      if (available[key] && available[key] >= ingredient) {
        available[key] -= ingredient;
        numberIngredientsUsed += 1;
      } else {
        hasAviables = false;
      }

      if (Object.keys(recipe).length == numberIngredientsUsed) {
        numberPreparedRecipes += 1;
      }
    }
  }

  return numberPreparedRecipes;
}
```
