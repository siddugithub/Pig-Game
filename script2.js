'use strict';
// const myName = 'JOnas';// global scope

// function first() { ///first scope
//   const age = 10;
//   if (age >= 10) {
//     const decade = 1;
//     second();
//   }

//   function second() { // second scope
//     const job = 'teacheer';
//     console.log(`${myName} is a ${age} year old ${job}!!!`);
//   }
// }
// first();

const a = 'Jonas';

function first() {
  const b = 'Hello';
  const c = 'Hiii';
  second();

  function second() {
    const e = 'xxxx';
    third(b, c); // Pass 'c' as an argument to third function
  }
}
first();

function third(c, b) {
  const d = 'Hey';
  console.log(d + c + b + a); // 'b' is also not in the scope of 'third', you need to pass it as an argument as well
}

// const a = 'Jonas';

// function first() {
//   const b = 'Hello';
//   return b;
// }

// function third() {
//   const d = 'Hey';
//   console.log(d + a);
// }

// // Call the first function and store the result in a variable
// const resultB = first();

// // Log the result of the first function
// console.log(resultB);

// // Call the third function
// third();
