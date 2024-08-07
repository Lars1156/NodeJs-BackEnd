const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(express.json());

app.listen(5000 , ()=>{
    console.log("Server is listing on poert 5000");
    
})