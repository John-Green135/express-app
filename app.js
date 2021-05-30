const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true }) );

app.get('/', (req, res)=>{
    console.log("hit")
    res.send("message")
})

  app.listen(3000, () => console.log('Example app is listening on port 3000.'));


