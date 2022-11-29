var express = require('express'); 
const Earpods_controlers= require('../controllers/Earpods'); 
var router = express.Router(); 
 
/* GET Earpods */ 
router.get('/', Earpods_controlers.Earpods_view_all_Page ); 

// GET request for one Earpods. 
router.get('/Earpods/:id', Earpods_controlers.Earpods_detail);
module.exports = router; 

// A little function to check if we have an authorized user and continue on 
//or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET detail Earpods page */ 
router.get('/detail', Earpods_controlers.Earpods_view_one_Page); 

/* GET create Earpods page */ 
router.get('/create', Earpods_controlers.Earpods_create_Page); 

/* GET create update page */ 
router.get('/update',secured, Earpods_controlers.Earpods_update_Page);

/* GET delete Earpods page */ 
router.get('/delete', Earpods_controlers.Earpods_delete_Page); 

// /* GET update Earpods page */ 
// router.get('/update', Earpods_controlers.Earpods_update_Page); 
 
 
 
 