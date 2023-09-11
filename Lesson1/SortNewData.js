const http = require('http')
const hostname = '127.0.0.1'
const port = 5000

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

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end()

})

server.listen(port, hostname, () => {
  console.log(`Ссылка на сервер в браузере: http://${hostname}:${port}/`)
})