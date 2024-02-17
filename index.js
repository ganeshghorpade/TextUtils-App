const User = require('./Database/user');
const cors = require('cors');
require('./Database/config');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());


app.post('/Contact',async(req,resp)=>{
    let data = new User(req.body);
    let result = await data.save();
    resp.send(result);
});

app.listen(8000);