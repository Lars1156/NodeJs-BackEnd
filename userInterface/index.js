const express = require('express')
const bodyParser = require('body-parser');
const {connection } = require('./connection');
const routerAPI = require ('./routes/api')
const restAPI = require('./routes/restaurantRoutes')



const app = express()

// Database Connection 
connection('mongodb://localhost:27017/Application').then(()=>{
    console.log("Database Connected Sucessfully");    
}).catch((error)=>{
    console.error('Database Connection Error!',error);
});
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', routerAPI);
app.use('/restaurantRoutes', restAPI)

app.listen(8088 , ()=>{
    console.log("Server is Running on Port 8088");
})