var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Earpods_controller = require('../controllers/Earpods'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Earpods ROUTES /// 
 
// POST request for creating a Earpods.  
router.post('/Earpods', Earpods_controller.Earpods_create_post); 
 
// DELETE request to delete Earpods. 
router.delete('/Earpods/:id', Earpods_controller.Earpods_delete); 
 
// PUT request to update Earpods. 
router.put('/Earpods/:id', Earpods_controller.Earpods_update_put); 
 
// GET request for one Earpods. 
router.get('/Earpods/:id', Earpods_controller.Earpods_detail); 
 
// GET request for list of all Earpods items. 
router.get('/Earpods', Earpods_controller.Earpods_list); 
 
module.exports = router; 
 