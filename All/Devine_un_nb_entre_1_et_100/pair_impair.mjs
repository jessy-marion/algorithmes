const nb = 88;
const nbsArray = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);
console.log("nb à deviner", numberToGuess);

//Pair Impair
let tentatives = 0;
function nbFinder(nbsArray, numberToGuess) {
    let filteredArray;
    if (numberToGuess % 2 === 0) {
        console.log(nbsArray);
        filteredArray = nbsArray.filter((nbPaires) => nbPaires % 2 === 0);
        console.log(filteredArray);
    } else {
        filteredArray = nbsArray.filter((nbImpaires) => nbImpaires % 2 === 1);
        console.log(filteredArray);
    }

    for (let i = 0; i < filteredArray.length; i++) {
        tentatives++;

        if (filteredArray[i] === numberToGuess) {
            return filteredArray[i];
        }
    }
}

const result = nbFinder(nbsArray, numberToGuess);
console.log("results: ", result);
console.log("tentatives: ", tentatives);
