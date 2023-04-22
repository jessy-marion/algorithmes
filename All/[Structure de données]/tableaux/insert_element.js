class MyArray {
  constructor(input) {
    this.value = new Array(input);
  }
  addItemAtBeginning(item) {
    const arr = new Array(this.value.length + 1);
    arr[0] = item;

    for (let i = 0; i < this.value.length; i++) {
      arr[i + 1] = this.value[i];
    }
    this.value = arr;
  }
  addItemAtTheEnd(item) {
    const arr = new Array(this.value.length + 1);

    let i = 0;
    while (i < this.value.length) {
      arr[i] = this.value[i];
      i++;
    }
    arr[i] = item;
    this.value = arr;
  }
  addItemAtPosition(item, position) {
    if (position < 0 || position > this.value.length) {
      throw new Error("wrong input");
    } else {
      const arr = new Array(this.value.length + 1);

      //ma solution
      for (let i = 0; i < this.value.length + 1; i++) {
        if (i < position) {
          arr[i] = this.value[i];
        } else if (i === position) {
          arr[i] = item;
        } else {
          arr[i] = this.value[i - 1];
        }
      }

      //une des solutions
      /*let i = 0;
      let j = 0;
      while (i < this.value.length) {
        if (i === position) {
          arr[j] = item;
          j++;
        }
        arr[j] = this.value[i];
        i++;
        j++;
      }*/

      //opti
      this.value = arr;
    }
  }
}

const myArr = new MyArray("firstElement");
myArr.addItemAtBeginning("firstInputElement");
myArr.addItemAtBeginning("secondInputElement");
myArr.addItemAtTheEnd("firstInputItemAtTheEnd");
myArr.addItemAtTheEnd("secondInputItemAtTheEnd");
myArr.addItemAtPosition("positionItem", 4);

console.log(myArr);
