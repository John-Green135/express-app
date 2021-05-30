const express = require('express');
const cors = require('cors')
const Tubes = require('./Json/tubes.json')
const Blog = require('./Mongoose/Main')

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true }) );

const mongoose = require('mongoose');
const ChaturbateScrape = require('./chaturbateScrape');

const dbURI = "mongodb+srv://John:keshdaul-135@cluster0.kzhw0.mongodb.net/Resources?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log("Connected to DB")
        app.listen(3000, () => console.log('Example app is listening on port 3000.'));
    })
    .catch((err)=>{
        console.log(err)
    })

    const getBlogs = async(req, res)=>{
        let data = await Blog.find({})
        res.json(data)
    }

app.get('/submit-posts', cors(), (req, res)=>{
    const post = new Blog({
        title: "First Blog",
        snippet: "Quick snippet of blog",
        body: "This is the body of my new blog post"
    })
    post.save()
    .then(result=>{
        res.send(result)
    })
    .catch( (err)=>{
        console.log(err)
    })
})

app.get('/get-posts', cors(), (req, res)=>{
    
    getBlogs(req, res)
    //ChaturbateScrape(req, res)
    //res.json({message:"message"})
})

  


