
// Файл вывода данных через html страницу

const express = require("express");
const app = express();

const host = '127.0.0.1';
const port = 5000;

const arr = [];

//app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'html');

app.get("/", function(request, response) 
{  
  makeArr();    //заполнение массива
  
  const sortedArr = bubbleSort(arr);  //сортировка массива
  
  //res.send(__dirname + '/views/'+'WebPage.html');//'+host+':'+port);

  console.log("Программа запущена");
  console.log("Выводим массив случайных чисел.");
  console.log(arr);   //вывод в консоль
  console.log("Выводим отсортированный массив случайных чисел.");
  console.log(sortedArr);    //вывод в консоль

  response.render('WebPage', 
  {
    title: 'Массив для сортировки',
    startdata: arr,
    sortdata: sortedArr,
  });    

});

app.listen(port, host, function () 
{
  console.log('Сервер тут: http://'+host+':'+port); 
});


function makeArr()
{
  arr.length = 0

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

