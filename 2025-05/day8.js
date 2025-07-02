// Write a function uniqueValues(arr) that takes an array and returns a new array with only the unique values (no duplicates).

// The order of elements in the returned array should match the first occurrence in the original array.

// You can't use Set for this one (just to help build up logic).

function uniqueValues(arr){
    let unique = [];
    for (let val of arr){
        if (unique.includes(val)){}
        else {unique.push(val)};
    }

    return unique;
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueValues(['apple', 'banana', 'apple', 'orange', 'banana']));