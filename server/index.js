//This program is a server that listens on port 3000 and prints hello world 

const express = require('express')    //require is a way of bringing other modules into ur project
                                        //this is the commonJS module system 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
.get('/newpaltz', (req, res) => {
  res.send('Hello New Paltz')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//=======================================================

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {        //This is the function that is called (served)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Going");

  res.end('YOU ASKED FOR ' + req.url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/