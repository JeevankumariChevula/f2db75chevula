const mongoose = require("mongoose") 
const EarpodsSchema = mongoose.Schema({
    Earp_Name: {type: String,required: [true, 'Name of the Earpods cannot be empty']},  
    Earp_Type: {type: String,required: [true, 'Type of the Earpods cannot be empty']}, 
    Earp_Size: {type: Number,required: [true, 'Size of the Earpods cannot be empty']},
    Earp_Price: {type: Number,required: [true, 'Price of the Earpods cannot be empty']}
}) 
 
module.exports = mongoose.model("Earpods", EarpodsSchema) 

