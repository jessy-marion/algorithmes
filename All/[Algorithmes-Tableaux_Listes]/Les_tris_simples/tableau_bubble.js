const arr = [1, 2, 3, 4];

function bubbleSort(array) {
  let len = array.length;
  let swap;
  do {
    swap = false;
    for (let i = 1; i < len; i++) {
      if (array[i] < array[i - 1]) {
        const tmp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = tmp;
        swap = true;
      }
    }
    len--;
  } while (swap);
}

bubbleSort(arr);
console.log(arr);
