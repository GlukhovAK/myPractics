
 


// const user = ['Anton', 'Glukhov',  1988, 'developer', ['mama', 'papa'], 3, 5, 7];

// const types =[]; 

// for(let i = 0; i < user.length; i++) {
//    console.log(user[i], typeof user[i]);
//    // types[i] =typeof user[i]
//    types.push(typeof user[i])
// }

// console.log(types);


// const birthYears =[1988, 1992, 2000, 1982];
// const ages = [];
// for(let i = 0; i < birthYears.length; i++){
//    const age = 2022 - birthYears[i];
//    ages.push(age)
// }

// console.log(ages)

// const user = ['Anton', 'Glukhov',  1988, 'developer', ['mama', 'papa'], ];

// for(let i = user.length - 1; i >= 0; i-- ) {
//    console.log(i, user[i])
// }

// loop in loop

// for(let exercise = 1; exercise <= 3; exercise++){
  
//    for(let rep = 1; rep <= 5; rep++){
//       console.log(`ex ${exercise} repetishen  ${rep}`)
//    }
// }

// console.log('FOR LOOP')
// for(let rep = 1; rep <= 10; rep++ ) {
//    console.log(`push up repetition ${rep}`)
// }
// console.log('while loop')
// let rep = 1;

// while (rep <= 10) {
//    console.log(`push up repetition ${rep}`);
//    rep++;
  
// }

let diceNumber = Math.trunc(Math.random() * 6) +1; 

console.log(`dice number befor loop ${diceNumber}`)
while(diceNumber !== 6){
   console.log(diceNumber);
 diceNumber = Math.trunc(Math.random() * 6) +1
}