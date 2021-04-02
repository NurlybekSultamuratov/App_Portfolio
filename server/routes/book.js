let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { updateOne } = require('../models/book');


// CONNECT TO MODEL
let book = require('../models/book');


//REFER TO THE CONTROLLER
let ContactController = require('../controllers/book');




/*GET ROUTE FOR DISPLAYING THE ADD PAGE - CREATE OPERATION */
router.get('/add',ContactController.displayAddPage);

/*POST ROUTE FOR PROCESSING THE ADD PAGE - CREATE OPERATION */
router.post('/add',ContactController.processAddPage);

/*GET ROUTE FOR DISPLAYING THE EDIT PAGE - UPDATE OPERATION */
router.get('/edit/:id', ContactController.displayEditPage);

/*POST ROUTE FOR PROCESSING THE EDIT PAGE - UPDATE OPERATION */
router.post('/edit/:id',ContactController.processEditPage);

/*GET ROUTE FOR DELETION - DELETE OPERATION */
router.get('/delete/:id',ContactController.deleteOperation);

module.exports= router;




