const LocalStrategy = require('passport-local').Strategy; 
const userController = require('../users/users.controller');

function initialize(passport){ 
    passport.use(new LocalStrategy({ usernameField: 'email' })); 
    passport.serializeUser((user,done) => done(null, user.id)); 
    passport.deserializeUser((id,done) => {return done(null, userController.getById(id))}); 
}

module.exports = initialize; 