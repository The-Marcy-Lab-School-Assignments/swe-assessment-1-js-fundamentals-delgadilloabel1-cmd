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

### Question 6



### Question 7


### Question 8

