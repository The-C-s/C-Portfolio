const mongoose = require('mongoose');
const nanoid = require('nanoid');
const config = require('../config.json');
const Schema = mongoose.Schema;

const customNanoId = nanoid.customAlphabet(config.shareIDchars, config.shareIDlength);

//Defining the content schema
const shareSchema = new Schema({
    //shortened ID that's better for URL
    _id: { type: String, default: () => customNanoId() },

    editedDate: { type: Date, default: Date.now},
    createdDate: { type: Date, default: Date.now},

    //List of content IDs being shared
    content: { type: [Schema.Types.ObjectId] },
    user: { type: String }
});

//Sets the schema to a json file
shareSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Share', shareSchema);
