const express = require('express')    //Commonjs way of importing library is require
const usersController = require('./controllers/users');

const app = express()
const port = 3000

app
  .get('*', (req, res, next) => {
  console.log("a request came in");
  next();
  })
  .get('/', (req, res) => {     //Registering these functions to handle specific situations. 
  res.send('Hello World!')
  })
  .get('/newpaltz', (req, res) => {
  res.send('Hello New Paltz!')    
  })
  .use('/users', usersController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




//Express creates a pipeline like a factory line. There is a conveyor belt with a package moving along it.
//There are lots of robots ready to place things in the package depending on the order. 
//The box is like the return value and the order is the request to the server. 

//The req parameter has info about the request like where it came from. res is the response. 
//There are a few terminal functions of res, and one of them is send. That sends the response. 

//next() moves control flow to the next function in line

//get with * will activate on any request (wildcard)

//Model figures out where the data is coming from, controller knows about requests coming in
//Often there will be a controller for each model. 

//get() means listen for a get request, use() means listen for any request
//we import usersController from our users.js file and attach it to the pipeline