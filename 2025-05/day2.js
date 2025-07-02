// Write a function reverseString(str) that takes a string as input and returns the string reversed.

function reverseString(str){
    let reversed = '';
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("JavaScript"));