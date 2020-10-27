let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema
(
{
    Name: String,
    Age: String,
    Phone: String
},
{
    collection: "books"
});

module.exports = mongoose.model('books', bookModel);