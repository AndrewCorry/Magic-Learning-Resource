const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')

const port = 4004

const app = express();
app.use(express.json()); 
app.use(cors());


app.get('/api/allusers', ctrl.getUsers)
app.post('/api/register', ctrl.register)
app.post('/api/users', ctrl.login)


app.listen(port, () =>{
    console.log(`Port ${port} is working`)
})