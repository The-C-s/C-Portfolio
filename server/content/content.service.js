const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Content = db.Content; 
module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

//Returns all content
async function getAll() {
    return await Content.find();
}

async function getById(id) {
    try {
        return await Content.findById(id);
    } catch(error) {
        //error thrown if not in db
        if (error.name == "CastError") { return null; }
        throw error;
    }
}

//userParam is the input recieved from the user (not related to the user.model I'm guessing)
//Not sure if you need a try catch here, as you can create more than one post with the same content 
async function create(userParam) {
    //Create a new post 
    const post = new Content(userParam); 
    await post.save(); 
}

async function update(id, userParam) {
    //attempt to get user, return null if error getting user
    let post;
    try {
        post = await Content.findById(id);
    } catch(error) {
        //error thrown when not found in database
        if (error.name == "CastError") { return null; }
        throw error;
    }
    //Updates the specified post with the input 
    Object.assign(post, userParam);
    await post.save();
    return user;
}

async function _delete(id) {
    try {
        return await Content.findByIdAndRemove(id);
    } catch(error) {
        if (error.name == "CastError") { return null; }
        throw error;
    }
}