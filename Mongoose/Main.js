const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    postType: {
        type: String,
        default: "Blog Post"
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog