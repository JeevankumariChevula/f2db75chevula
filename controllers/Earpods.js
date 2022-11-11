var Earpods = require('../models/Earpods'); 
 
// List of all Earpods 
exports.Earpods_list = async function(req, res) { 
    try{ 
        theEarpods = await Earpods.find(); 
        res.send(theEarpods); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Earpods create on POST. 
exports.Earpods_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Earpods(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Earp_Name":"Applepods", "Earp_Type":"Medium", "Earp_Size":3.5} 
    document.Earp_Name = req.body.Earp_Name; 
    document.Earp_Type = req.body.Earp_Type; 
    document.Earp_Size = req.body.Earp_Size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 



// for a specific Earpods. 
exports.Earpods_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Earpods.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

  
// Handle Earpods delete form on DELETE. 
exports.Earpods_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods delete DELETE ' + req.params.id); 
}; 
 
// Handle Earpods update form on PUT. 
exports.Earpods_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.Earpods_view_all_Page = async function(req, res) { 
    try{ 
        theEarpods = await Earpods.find(); 
        res.render('Earpods', { title: 'Earpods Search Results', results: theEarpods }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 