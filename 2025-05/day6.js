// Write a function areAnagrams(str1, str2) that returns true if the two strings 
// are anagrams of each other (contain the same letters in any order, excluding spaces and
// ignoring case), and false otherwise.

function areAnagrams(str1, str2){
    let dict1 = {};
    let dict2 = {};

    str1 = str1.toLowerCase().replaceAll(' ', '');
    str2 = str2.toLowerCase().replaceAll(' ', '');

    for (let i = 0; i < str1.length; i++){
        dict1[str1[i]] ? dict1[str1[i]] += 1 : dict1[str1[i]] = 1;
    }

    for (let i = 0; i < str2.length; i++){
        dict2[str2[i]] ? dict2[str2[i]] += 1 : dict2[str2[i]] = 1;
    }

    return compareDictionaries(dict1, dict2);
}

function compareDictionaries(dict1, dict2) {
    if (dict1 == null || dict2 == null) return false;

    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);

    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
        if (dict1[keys1[i]] !== dict2[keys1[i]]){ return false };
    }

    return true;
}

console.log(areAnagrams("listen", "silent"));         // true
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("hello", "world"));           // false