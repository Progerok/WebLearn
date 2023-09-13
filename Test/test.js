const express = require("express");

const app = express();
const port = 3000;
const host = '127.0.0.1';

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('Сервер тут: http://'+host+':'+port); 
});

app.get("/", (req, res) => 
{
  res.send("Hello World!");
});