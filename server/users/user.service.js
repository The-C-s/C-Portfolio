const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({sub: user.id}, config.secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function getAll() {
    return await User.find();
}

async function getById(id) {
    try {
        return await User.findById(id);
    } catch(error) {
        //error thrown when user isn't found in database
        if (error.name == "CastError") { return null; }
        throw error;
    }
}

async function create(userParam) {
    // validate
    const existingUser = await User.findOne({ email: userParam.email });
    if (!existingUser) {
        
        const user = new User(userParam);

        // hash password
        if (userParam.password) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }

        // save user
        await user.save();
    }

    return existingUser;
}

async function update(id, userParam) {
    //attempt to get user, return null if error getting user
    let user;
    try {
        user = await User.findById(id);
    } catch(error) {
        //error thrown when user isn't found in database
        if (error.name == "CastError") { return null; }
        throw error;
    }

    //if request gave new email and email isn't the same as the stored email and the email is already taken
    if (userParam.email && user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'email "' + userParam.email + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();

    return user;
}

async function _delete(id) {
    try {
        return await User.findByIdAndRemove(id);
    } catch(error) {
        //error thrown when user isn't found in database
        if (error.name == "CastError") { return null; }
        throw error;
    }
}

//based on github.com/cornflourblue/node-mongo-registration-login-api/