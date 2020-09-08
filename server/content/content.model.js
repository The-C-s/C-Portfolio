const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Int32 } = require('mongodb');

//Defining the content schema 
const contentSchema = new Schema({
    //Data about the content 
    displayDate: { type: Date, default: Date.now},
    createdDate: { type: Date, default: Date.now},
    title: { type: String, required: true}, 
    description: { type: String}, 
    //File doesn't exist in Node, so will need to fix when we read the data in 
    content:{ type: String}, 
    user: {type: String},
    //List of strings
    tags:{type: [{type:String}]}, 
    viewPermissions:{type: String, Enum: ["Public", "Private", "InviteOnly"] }
}); 

//Sets the schema to a json file
contentSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Content', contentSchema); 
