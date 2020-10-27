const { trim } = require('jquery');
let mongoose = require('mongoose');
let passportLocalMongoose= require('passport-local-mongoose');


let User= mongoose.Schema
(
    {

    username:
    {
    type: String,
    default:'',
    trim: true,
    required: 'username is required'
    },
        
    email:
    {
    type: String,
    default:'',
    trim: true,
    required: 'email is required'
    },

    displayName:
    {
    type: String,
    default:'',
    trim: true,
    required: 'Display Name is required'

    },
    
    Created:
    {
    type: Date,
    default:Date.now
    },
    
    Update:
    {
    type: Date,
    default:Date.now
    },

    },
    {
        collection:"users"
    }
);

//CONFIGURE OPTIONS FOR USER MODEL

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);