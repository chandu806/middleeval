

const express = require('express');
const app = express();
const cors = require('cors');
// const { loggers } = require('winston');
const logger=require('./Utility/logger')
app.use((request, response, next) => {
  let time = new Date();
  console.log(time +" "+ request.url);
  next();
})

app.use((request, response, next) => {
  logger.info('This is information log');
  logger.error('This is the error log');
  logger.warn('This is the warn log');
  next();
});

let whiteListOrigin = ['http://localhost:9008'];
let corsOption={
  origin: (origin, callback) => {
    if(whiteListOrigin.indexOf(origin) != -1){
      callback(null, true);
    }
    else{
      callback(new Error("Origin Not Allowed"));
    }
  }
}
// app.use(cors(corsOption));
app.get('/user',
cors(corsOption),
  (request, response, next) => {
        console.log("We are in USER route");
      // response.status(500).json({error: "Some error occured"});
      response.send("Success")
  })

app.get('/books',
(request, response, next) => {
  console.log("We are in mi");
  response.send("Success");
  response.json({
    "book1":"science",
    "book2":"Computer"
  })
})
app.get('/libraries',
(request, response, next) => {
  console.log("We are in mi");
  response.send("Success");
  response.json({
    "book1":"library1",
    "book2":"library2"
  })
})
app.get('/authors',
(request, response, next) => {
  console.log("We are in mi");
  response.send("Success");
  response.json({
    "Author1":"Dennisritch",
    "Author2":"james"
  })
})
app.post('/create-user',
(request, response, next) => {
  console.log("We are in Middleware two");
  response.status(500).json({error: "Some error occurred"})
})

app.delete('/delete-user',
(request, response, next) => {
  console.log("We are in Middleware two");
  response.status(500).json({error: "Some error occurred"})
})

  

app.post('/create-user', (request, response, next) => {
  console.log("We are in CREATE USER route");
  response.send("Request processed successfully");
})

module.exports = app;