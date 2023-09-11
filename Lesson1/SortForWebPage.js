
// Файл вывода данных через html страницу

//const express = require('express');
//const app = express();
const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;
const arr = [];



app.get("/", function(request, response){

  arr.length = 0

  makeArr();
  
  const sortedArr = bubbleSort(arr);
  
  console.log("Программа запущена");
  console.log("Выводим массив случайных чисел.");
  console.log(arr);   //вывод в консоль
  console.log("Выводим отсортированный массив случайных чисел.");
  console.log(sortedArr);    //вывод в консоль
    
});


app.listen(port, host, function () {
  console.log('Сервер тут: http://127.0.0.1:5000/');
});


function makeArr()
{
  for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
};


function bubbleSort(arr) 
{
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
};

