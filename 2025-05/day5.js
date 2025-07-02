// Write a function mostFrequentChar(str) that takes a string and returns the character that appears the most (excluding spaces).

function mostFrequentChar(str) {
    str = str.replaceAll(' ','');
    let dictionary = {};
    for (let i = 0; i < str.length; i++) {
        dictionary[str[i]] ? dictionary[str[i]] += 1 : dictionary[str[i]] = 1;
    }
    
    return getKeyWithMaxCount(dictionary);
}

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
}

console.log(mostFrequentChar("javascript"));
console.log(mostFrequentChar("this is cool"));
console.log(mostFrequentChar("hello"));