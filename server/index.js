const express = require('express');    //Commonjs way of importing library is require
const path = require('path');

require('dotenv').config();   //We don't need to create an object; we just call method directly from require

console.log(`The best class at New Paltz is ${process.env.BEST_CLASS}`);  //interpolated string

const usersController = require('./controllers/users'); 

const app = express();
const port = process.env.PORT || 3000;    //We now pull variables like port from the .env file using dotenv library which allows us to set environmental variables
                                          //unless PORT is undefined then the OR operator goes to the 3000 value


app
  //First we handle requests for files that do exist, then at the end we handle those for files that don't exist
  
  .get('*', (req, res, next) => {     //Example: Registering these functions to handle specific situations. 
  console.log("a request came in");
  next();
  })

  .use('/', express.static(path.join(__dirname, '../docs')) )     //static() returns a subpipeline just like a router
  .use('/users', usersController)

    //If you've gotten to this point in the pipeline, no matter what is being requested we serve index.html file
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

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