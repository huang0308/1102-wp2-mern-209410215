
// CommonJS
// const express = require('express')

// ES6
import express from 'express'
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB_15 from './db/connect_15.js' ;

//middleware
import notFoundMiddleware_15 from './middleware/not-found_15.js';
import errorHandlerMiddleware_15 from './middleware/error-handler_15.js';

app.get('/', (req, res)=>{
   throw new Error('testing for error');
   res.send('Welcome Huang0308 209410215');
});

app.use(notFoundMiddleware_15);
app.use(errorHandlerMiddleware_15);

const port = process.env.PORT || 5000;

const start = async () => {
    try{
      await connectDB_15(process.env.MONGO_LOCAL_URL).then( () => {
         console.log('Connecting to MongoDB');
      });

      app.listen(port, ()=> console.log(`server is running on port ${port}`));
    }catch(err){
       console.log(err);
    }
}

start();

// app.listen(port, () => console.log(`Server is running on port ${port}`));