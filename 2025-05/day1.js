// Write a function hasUniqueChars(str) that returns true if a given string has all unique characters, and false otherwise.


function hasUniqueChars(str) {
    let array = "";
    for (let i = 0; i < str.length; i++) {
        if (array.includes(str[i])) {
            return false;
        }
        else{
            array += str[i];
        }
      }
      return true;
}

console.log(hasUniqueChars("abcdef"));   // true
console.log(hasUniqueChars("hello"));    // false
console.log(hasUniqueChars(""));         // true
console.log(hasUniqueChars("AaBbCc"));   // true (case-sensitive)