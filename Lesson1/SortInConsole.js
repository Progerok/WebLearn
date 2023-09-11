
// Файл вывода данных в консоль


console.log("Программа запущена");

console.log("Выводим массив случайных чисел.");

const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(arr);   //вывод в консоль

console.log("Выводим отсортированный массив случайных чисел.");

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortedArr = bubbleSort(arr);
console.log(sortedArr);     //вывод в консоль
