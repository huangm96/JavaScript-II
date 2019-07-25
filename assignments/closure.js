// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
console.log(`\nclosure`); 
console.log(`\nChallenge 1`); 
function house(){
 const item1 ="sofa";
 const item2 ="table";
 function room(){
   console.log(item1 +" "+item2);
   console.log("bed");
   console.log("computer");
 }
 room();
};
house();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
console.log(`\nChallenge 2`); 
const counter = ()=>{
  // Return a function that when invoked increments and returns a counter variable.
  let count =0;
  return function(){
     return count += 1;
  };
};

const newCounter = counter();
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2


 console.log(`\nChallenge 3`); 
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count =0;
  return{
  increment:()=>{
     return count += 1;
  },
  decrement:()=>{
    return count -= 1;
 }
};
};

const newCounter2 = counterFactory();
 console.log(newCounter2.increment()); // 1
 console.log(newCounter2.increment());// 2
 console.log(newCounter2.decrement()); //1