const arr = [22, 1, 7, 33, 12];

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      // si l'element suivant du tableau est plus petit alors il prendra la nouvelle référence minJ
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      const tmp = array[i];
      console.log(tmp);
      array[i] = array[minIndex];
      array[minIndex] = tmp;
    }
  }
}

selectionSort(arr);

console.log(arr);
