const config = require('../config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'), 
    Content: require('../content/content.model'), 
    Profile: require('../profile/profile.model')
    Share: require('../share/share.model')
};

//based on https://github.com/cornflourblue/node-mongo-registration-login-api/