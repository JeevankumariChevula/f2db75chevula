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



// Handle Earpods update form on PUT. 
exports.Earpods_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Earpods.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Earpods_type)  
               toUpdate.Earpods_type = req.body.Earpods_type; 
        if(req.body.Earp_Name) toUpdate.Earp_Name = req.body.Earp_Name; 
        if(req.body.Earp_Size) toUpdate.Earp_Size = req.body.Earp_Size; 
        if(req.body.Earp_Price) toUpdate.Earp_Price = req.body.Earp_Price; 

        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
  
// Handle Earpods delete form on DELETE. 
exports.Earpods_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Earpods delete DELETE ' + req.params.id); 
}; 

// Handle Earpods delete on DELETE. 
exports.Earpods_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Earpods.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.Earpods_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Earpods.findById( req.query.id) 
        res.render('Earpodsdetail',  { title: 'Earpods Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a Earpods. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Earpods_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Earpodscreate', { title: 'Earpods Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Earpods. 
// query provides the id 
exports.Earpods_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Earpods.findById(req.query.id) 
        res.render('Earpodsupdate', { title: 'Earpods Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Earpods_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Earpods.findById(req.query.id) 
        res.render('Earpodsdelete', { title: 'Earpods Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 