const express = require('express');
const app = express();
const port = 1337
const musicRoute = require('./routes/music');


app.use('/music', musicRoute)



app.listen(port, ()=>{
    console.log(`now on port: ${port}`)
})