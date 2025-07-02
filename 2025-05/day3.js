// Write a function isPalindrome(str) that returns true if the given string is a palindrome, and false otherwise.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length-1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
};

function isPalindrome(str) {
    let clean = removeNonAlphanumeric(str.toLowerCase().replaceAll(' ',''));
    let reversed = reverseString(clean);
    return (clean === reversed);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("hello"));