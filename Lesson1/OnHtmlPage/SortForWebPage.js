
// Файл вывода данных через html страницу

const express = require("express");
const app = express();

const host = '127.0.0.1';
const port = 5000;

var arr = [];
var sortedArr = [];

makeArr();    //заполнение массива
  
sortedArr = bubbleSort(arr);  //сортировка массива

//app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views'); // general config
app.engine('html', require('ejs').renderFile); // set the view engine to ejs
app.set('view engine', 'html');

app.get("/", function(request, response) 
{ 
   response.render('WebPage', 
  {
    title: 'Вывод массива случайных данных.',
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

  for (let i = 0; i < 15; i++) {
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

