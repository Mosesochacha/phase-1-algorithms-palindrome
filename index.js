function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
// We can also save on a few variable declarations by using method chaining in our reverseString function:

function reverseString(word) {
  return word.split("").reverse().join("");
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
