let express= require('express');
let router= express.Router();

//HOME PAGE
module.exports.displayHomePage = (req,res,next) =>
{
    res.render('index', {title: 'Home Page'});
}

//ABOUT ME PAGE
module.exports.AboutPage = (req,res,next) =>
{
    res.render('about', { title: 'About me' });
}

//PROJECTS PAGE
module.exports.ProjectsPage = (req,res,next) =>
{
    res.render('projects', { title: 'Projects' });
}

//SERVICES PAGE
module.exports.ServicesPage = (req,res,next) =>
{
    res.render('index', { title: 'Services' });
}

//CONTACTS PAGE
module.exports.ContactsPage = (req,res,next) =>
{
    res.render('contact', { title: 'Contact Me' });
}



