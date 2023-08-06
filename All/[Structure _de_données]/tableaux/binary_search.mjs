const nb = 88;
const nbsArray = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);
console.log("nb à deviner", numberToGuess);

//Binary search
let tentatives = 0;

let searchNumber = 50;

function binarySearch(nbsArray, numberToGuess) {
    let min = 0;
    let max = nbsArray.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let guess = nbsArray[mid];
        tentatives++;
        if (guess === numberToGuess) {
            return mid;
        } else if (guess > numberToGuess) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
}

const result = binarySearch(nbsArray, numberToGuess);
console.log("results: ", result);
console.log("tentatives: ", tentatives);
