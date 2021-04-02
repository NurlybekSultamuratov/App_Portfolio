let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//REFER TO DATABASE
let book = require('../models/book');



module.exports.displayAddPage = (req,res,next)=>
{
    res.render('list/add', {title: 'Add book'});
}

module.exports.processAddPage =(req,res,next)=>
{
    let Newbook= book
    ({
        "Name": req.body.Name,
        "Age": req.body.Age,
        "Phone": req.body.Phone
    });   
    book.create(Newbook, (err,book)=>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
}



module.exports.displayEditPage =(req,res,next)=>
{
    let id = req.params.id;

    book.findById(id,(err, bookToEdit)=>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('list/edit', {title: 'Edit Contact', book: bookToEdit});
        }
    })
}

module.exports.processEditPage = (req,res,next)=>
{
    let id= req.params.id;

    let Updatebook = book
    ({
        "_id": id,
        "Name": req.body.Name,
        "Age": req.body.Age,
        "Phone": req.body.Phone
    })

    book.updateOne({_id: id}, Updatebook, (err)=>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    })
}

module.exports.deleteOperation =(req,res,next)=>
{
    let id = req.params.id;

    book.remove({_id:id}, (err) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    })
}