const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true }) );


const dbURI = "mongodb+srv://John:keshdaul-135@cluster0.kzhw0.mongodb.net/Resources?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log("Connected to DB")
        app.listen(3000, () => console.log('Example app is listening on port 3000.'));
    })
    .catch((err)=>{
        console.log(err)
    })

    const TubesRouter = require('./Routes/Tubes/TubesRouter');
    app.use('/tubes', TubesRouter);




  


