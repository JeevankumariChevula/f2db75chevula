const mongoose = require("mongoose") 
const EarpodsSchema = mongoose.Schema({ 
    Earp_Name: String, 
    Earp_Type: String, 
    Earp_Size: Number,
    Earp_Price: Number
}) 
 
module.exports = mongoose.model("Earpods", 
EarpodsSchema) 