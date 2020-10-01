const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 //Schema for user information
const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    profile:{type: Schema.Types.ObjectId},
    username: { type: String, unique: true, required: true },
    content: { type: [Schema.Types.ObjectId] },
    profile: { type: Schema.Types.ObjectId},
    createdDate: { type: Date, default: Date.now },
    //name(s)
    firstName: { type: String },
    lastName: { type: String },
    //additional emails for display on portfolio
    emails : { type: [String] },
    //customizable avatar and backgrounds (URLs)
    avatar: { type: String, default: null },
    background: { type: String, default: null }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);

//based on https://github.com/cornflourblue/node-mongo-registration-login-api/
