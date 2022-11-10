var Earpods = require('../models/Earpods'); 
 
// List of all Earpods 
exports.Earpods_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods list'); 
}; 
 
// for a specific Earpods. 
exports.Earpods_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods detail: ' + req.params.id); 
}; 
 
// Handle Earpods create on POST. 
exports.Earpods_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods create POST'); 
}; 
 
// Handle Earpods delete form on DELETE. 
exports.Earpods_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods delete DELETE ' + req.params.id); 
}; 
 
// Handle Earpods update form on PUT. 
exports.Earpods_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods update PUT' + req.params.id); 
}; 