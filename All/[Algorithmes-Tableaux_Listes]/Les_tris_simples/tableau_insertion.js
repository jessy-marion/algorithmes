const arr = [12, 92, 25, 2, 76, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let actualValue = array[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > actualValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = actualValue;
  }
}

insertionSort(arr);
console.log(arr);
