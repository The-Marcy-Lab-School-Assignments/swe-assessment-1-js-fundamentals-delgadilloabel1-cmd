# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.



## Section 1: Short Response

### Question 1
The code throws a **ReferenceError**.

## Explanation 

The error is a **ReferenceError** because the variable `currentStatus` is not accessible where `console.log` tries to use it.

The variable `currentStatus` is declared using `let` inside the `if` and `else` blocks. Variables declared with `let` (and `const`) are **block-scoped**, meaning they only exist within the curly braces (`{ }`) where they are defined.

Since `console.log(currentStatus)` is outside of those blocks, the variable is considered undeclared in the function's main scope, resulting in a ReferenceError.



## Fix the error 

To fix this, declare `currentStatus` in the parent function scope so it's available to the entire function, and then just assign its value within the rest of the code.

```javascript
const react = (isReuben) => {
  let currentStatus; 
  
  if (isReuben) {
    currentStatus = 'Everything is just fine';
  } else {
    currentStatus = 'Time to panic.';
  }
  
  console.log(currentStatus); 
}

react(true); 
```

### Question 2
**The following code:**
```javascript
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```
**This code will log:**
```javascript 
`Michael Jordan`
```
## Explanation

This output happens because objects in JavaScript are assigned by **reference**, not by value.

When you write `let theGOAT = bestPlayer;`, you're **not** making a copy of the object. You're just copying the **memory address** (the reference). Now, both `bestPlayer` and `theGOAT` are pointing at the **exact same object** in memory.

When you use `bestPlayer.name = "Michael Jordan";`, you change that one shared object. Since `theGOAT` is looking at the same spot, it sees the updated value, **'Michael Jordan'**.


### Question 3
**The following code:**
```javascript
const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```
**This code will log:**

1.  `Paul is the hardest working person in the room.`
2.  `Laisha is also the hardest working person in the room.`

### Explanation

This output occurs because JavaScript treats variables defined inside a function differently than variables defined outside of it.

**1. Inside the Function (\`shoutOut()\`)**

The \`shoutOut()\` function creates its own **local variable** named \`theHustler\`:

```javascript
const shoutOut = () => {
  const theHustler = 'Paul'; 
  // This is a new, local variable.
  
}
```

Since this variable is defined **within** this function, the function's \`console.log\` uses this local value, which is **'Paul'**. The local variable **hides** the global variable from the function.

**2. Global Scope**

The second \`console.log\` executes in the **global scope**, outside of the function.

```javascript
const theHustler = 'Laisha'; // This is the original global variable. 

console.log(`${theHustler} is also the hardest working person in the room.`);
```

The \`shoutOut\` function call did not change the global variable. Therefore, the global \`console.log\` uses the original value, **'Laisha'**.

### Question 4
### What Is the Purpose of Rest Parameters?

A **rest parameter**, as defined by MDN, is a cool feature that lets a function accept an **indefinite number of arguments** and then neatly wraps them all up into a single, standard **array**. This capability is super helpful when you're writing a function but you're **unsure of the input length**—like, you don't know if the user will pass in two numbers or ten. Because of this, using a rest parameter means you can write your code block to handle any number of inputs right from the start.

**Furthermore**, knowing you're working with a real array helps you figure out the rest of your code's syntax. For example, you can easily use array properties like `.length` or any other array methods inside the function.

---

### How Do We Write and Use Them?

A rest parameter is written using **three dots (`...`)**, which looks exactly like the **spread operator**. The key difference is where you put it! A rest parameter **must be the last parameter** and goes **inside the parentheses** of your function definition.

**To illustrate**, if you were defining a function, it might look like this:

```javascript
function myFunction(first, second, ...theRest) {
    // 'first' gets the first value passed in.
    // 'second' gets the second value passed in.
    // 'theRest' is an array of every other value.
}
```
### Example: Summing Any Number of Integers

**To show just how useful this is**, here is a function called `sum` that perfectly demonstrates rest parameters in action. This function takes **any** number of integers as arguments and returns their total sum. Since the rest parameter converts all those arguments into an array, we can simply loop through that array to add them up.

```javascript
Takes any number of integers and returns their sum.

function sum(...arguments) {
    let total = 0;
    
    // We iterate over the 'arguments' array to add up all the numbers.
    for (const arg of arguments) {
        total += arg;
    }
    
    return total; 
}
```

### Question 5
## What is Scope?

Scope, in programming, is like a set of **rules** that dictates where your variables and functions are **visible** and accessible in your code. According to MDN, it's the **current context of execution** where values and expressions can be "seen" or referenced. Essentially, it determines the "reach" or **lifetime** of your identifiers (like variables).


## An Analogy for Scope

You can think of scope like your **car keys and your car** .

You can only lock and unlock your car when you are **nearby** it or when the car is **visible** to the key's signal. If you try to press the lock button from inside your house when the car is miles away, nothing will happen! The key's "ability" (its scope) is limited to the **immediate vicinity** of the car.

In the same way, a variable defined inside a specific block of code (like a function) is only "visible" and usable *within* that block. Code outside that block can't "see" or access it.


## Demonstrating Scope


```javascript
// This is the **GLOBAL** world.
let Car = "Parked in the Driveway"; 

function checkCarAccess() {
  // This is the **LOCAL** world inside the function.
  let KeyFobSignal = "Active"; 

  console.log("--- INSIDE the Function (Local Scope) ---");
  console.log("Can I see the Car? " + Car);               // Global is visible locally.
  console.log("Can I see the KeyFobSignal? " + KeyFobSignal); // Local is visible locally.
}

checkCarAccess(); // Run the function to see the local world.

console.log("\n--- OUTSIDE the Function (Global Scope) ---");
console.log("Can I see the Car? " + Car);               // Global is still visible.
// console.log("Can I see the KeyFobSignal? " + KeyFobSignal); 
// If you uncomment this, the code will CRASH!
```
## Explanation of the Example

When you read the code, you see two successful console messages *inside* the function. This is because **local scope** (the function) can always see variables defined in the larger **global scope**.

However, look at the last part, which is running *outside* the function:

* **`Car` (Global Variable):** This variable can be accessed anywhere. It's like the car sitting in the driveway—everyone can see it.
* **`KeyFobSignal` (Local Variable):** This variable is defined *inside* the function. Once the function finishes running, this variable is immediately forgotten and ceases to exist. It is **out of scope**!

If you try to access a **local** variable from the **global** world, the code throws an error because that variable doesn't have the **scope** (visibility) to be seen outside its home function.
### Question 6
Modules solve the problem of having one giant, messy code file and help prevent conflicts:

* **Organization:** It keeps your project clean. Instead of one huge list, you have small, topic-specific files. It's like having a neat drawer for your socks, a different one for shirts, and a third for pants.
* **Reusability:** You write a great function once, and then you can import that tool into any other file that needs it, saving you time and effort.
* **Isolation:** Variables inside a module are private by default. This prevents them from accidentally interfering with variables in other modules (no "global mess").



## Modules in Action

Let's use a car. We'll put our car's controls in one file and use them in a main file.

#### 1. The Exporter (`car.js`)

This file is the module. It **exports** the features we want to share.

```javascript
// A variable to share
const carModel = "Tesla Model 3";

// A function to share
function lockCar(isLocked) {
  return `${carModel} is ${isLocked ? 'locked' : 'unlocked'}.`;
}

// We EXPORT the items with 'module.exports'.
module.exports = {
  model: carModel,
  lock: lockCar
};
```
## 2. The Importer (`driver.js`)

This file uses the **require** keyword to bring in the exported features.

```javascript
// We IMPORT everything exported from './car.js'.
const carModule = require('./car.js');

// Now we can use the imported function and variable
console.log("Starting the day with the " + carModule.model); 
let status = carModule.lock(true);
console.log(status);
```
#### Explanation

* **Export:** In `car.js`, the `module.exports` line tells the program, "These are the functions and variables you are allowed to take out of this file."
* **Import:** In `driver.js`, the `require('./car.js')` line grabs those exported items and packages them up into the `carModule` variable.
* **Result:** The `driver.js` file now has access to the `model` variable and the `lock` function without having to re-write that logic. The code is shared and organized!
### Question 7
## Function Results
The logic of a pure function relies on making and returning a copy. Therefore:

* The **`fruits`** array will still hold: `['apple', 'banana', 'cherry', 'date']`
* The **`fruitsMinusOne`** array will hold: `['apple', 'banana', 'cherry']`

## Why Copying the Array is Necessary
It is necessary to make a copy of the array (like using the spread syntax `[...arr]`) if you want the function to be **pure**.

The main reason is that array methods like **`pop()`** **mutate** (change) the array they are called on.

A **pure function** has one simple rule: it can't change anything outside of itself. If we didn't make a copy and just called `arr.pop()`, we'd be directly mutating the original `fruits` array. That would be a **side effect**, making the function **impure** (or what you called "improper"). Copying the array lets us modify the copy and return it without ever touching the original.

## Why We Want Pure Functions
We want to keep the function pure because it makes our code reliable and much easier to debug.

If a function mutates its input, it creates **hidden problems** that break code somewhere else down the line. We need to be able to trust that our original **`fruits`** array still holds all four values whenever we need them.

By using a pure function, you guarantee **predictability**. You know exactly what values the function will return based on the input, and you know the original input data will remain stable—that way, the rest of your program won't crash because one function unexpectedly changed a value that others were depending on.

### Question 8

