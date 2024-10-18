//To reverse the srings
function reverseString(str) {
    return str.split('').reverse().join('');
}

//To count the characters
function countCharacters(str) {
    return str.length;
}

// To capitalize words
function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// To find max and min
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

//To sum arrays
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

//To filter array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

//fuctorial calculation
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// To check the prime numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//Fibonaccy sequence

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);  
}


console.log(reverseString("how are you"));               // "olleh"
console.log(countCharacters("business operation"));       // 11
console.log(capitalizeWords("technical staffs"));       // "Hello World"

console.log(findMax([1, 5, 6, 9]));                // 9
console.log(findMin([24, 30, 36, 60]));                // 1
console.log(sumArray([1, 8, 3, 4]));               // 10
console.log(filterArray([1, 2, 3, 4], num => num > 2));  // [3, 4]

console.log(factorial(8));                         // 120
console.log(isPrime(7));                           // true
console.log(fibonacci(5));                         // [0, 1, 1, 2, 3]

