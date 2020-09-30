const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 //Schema for user information
const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    firstName: {type: String, required: true, default: ""},
    lastName: {type: String},
    userInformation: { type: Schema.Types.ObjectId },
    content: { type: [Schema.Types.ObjectId] },
    createdDate: { type: Date, default: Date.now }
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
