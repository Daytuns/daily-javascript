// Write a function longestWord(sentence) that takes a string (sentence) and returns the longest word ignoring punctuation.
// If two or more words are the same length, return the first one.

function longestWord(str){
    let words = str.split(" ");
    let dictionary = {};

    for (let word of words){
        word = removeNonAlphanumeric(word);
        dictionary[word] = word.length;
    }
    
    return getKeyWithMaxCount(dictionary);
};

function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
};

function getKeyWithMaxCount(obj) {
    let maxKey = Object.keys(obj)[0];
    let maxValue = obj[maxKey];

    for (const key in obj) {
        if (obj[key] > maxValue) {
            maxKey = key;
            maxValue = obj[key];
        }
    }

    return maxKey;
};

console.log(longestWord("The quick brown fox jumps over the lazy dog."));
console.log(longestWord("Hello, my name is Dayton.")); 
console.log(longestWord("To be, or not to be: that is the question!"));  