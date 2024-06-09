let str = "hello";
console.log(str[0]); // This would output "h"
console.log(str[1]); // This would output "e"

// function countBs(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "B") {
//       count++;
//     }
//   }
//   return count;
// }

// // Example usage:
// let sentence = "Big Brown Bears Bounce Beneath Beautiful Blue Skies";
// console.log(countBs(sentence));

// function countChar(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// // Example usage:
// let sentence = "She sells seashells by the seashore";
// console.log(countChar(sentence, "s"));

function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

// Using countChar to implement countBs
function countBs(string) {
  return countChar(string, "B");
}

// Example usage:
console.log(countBs("BBC"), "B"); // Output: 2
console.log(
  countBs("Big Brown Bears Bounce Beneath Beautiful Blue Skies"),
  "B"
);
console.log(countChar("kakkerlak", "k"), "k"); // Output: 4
console.log(countChar("She sells seashells by the seashore", "s"), "s"); // Output: 7 's' not counting 'S'
