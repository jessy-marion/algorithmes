const nb = 88;
const nbsArray = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);
console.log("nb à deviner", numberToGuess);

//algorithme fonctionnel mais mauvais

let tentatives = 0;

function simpleSearch(nbsArray, numberToGuess) {
    for (let i = 0; i <= nbsArray.length; i++) {
        tentatives++;
        if (nbsArray[i] === numberToGuess) {
            return i;
        }
    }
}

const result = simpleSearch(nbsArray, numberToGuess);
console.log("results: ", result);
console.log("tentatives: ", tentatives);