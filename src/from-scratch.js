/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (petBreed === undefined || petName === undefined) {
    console.log(`Missing information. Please provide a valid pet.`)
  } else if (petBreed === "dog") {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === "cat") {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === "turtle") {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === "snake") {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log(`What an...interesting pet.`)
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  }
  // Your code here
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const shoutedLetter = letter.toUpperCase() + '!';
    console.log(shoutedLetter);
  }
};

// // ============================================
// // Question 4: letterCaseCounts
// // ============================================

const letterCaseCounts = (str) => {
  let counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      counts.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }
  return counts
}

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  if (gnomes.length === 0) {
    return []
  }
  return gnomes
    .filter(gnome => gnome.stolenDecorations.length > 1)
    .map(gnome => gnome.name);

  // Your code here
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
