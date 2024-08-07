const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./connection');
const userRoutes = require('./routes/userRoutes')

const app = express();

// Database Coonectivty
connection('mongodb://localhost:27017/BookShop').then(()=>{
    console.log("Database Connected SucesssFully");   
}).catch((error)=>{
    console.log("Database is not connected", error);   
});

app.use('/api/users', userRoutes);
app.use(bodyParser.json())
app.use(express.json());

app.listen(5000 , ()=>{
    console.log("Server is listing on poert 5000");
    
})