const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({ 
    email: {type: String, unique: true}, 
    experience: { type: [{type:String}]},
    education: {type: [{type:String}]}, 
    projects:{type: [{type:Schema.Types.ObjectId}]},  
    logo: {type: String},
    resume:{type: String}   
}); 

profileSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }   
});

module.exports = mongoose.model('Profile', profileSchema); 