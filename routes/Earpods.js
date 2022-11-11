var express = require('express'); 
const Earpods_controlers= require('../controllers/Earpods'); 
var router = express.Router(); 
 
/* GET Earpods */ 
router.get('/', Earpods_controlers.Earpods_view_all_Page ); 
// GET request for one Earpods. 
router.get('/Earpods/:id', Earpods_controlers.Earpods_detail);
module.exports = router; 

