const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');

const Content = db.Content; 
const User = db.User;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
//FIX: Generic errors currently, might be helpful to have an error with a status code and a message? 

//Returns all content
//FIX: Add if statements to check if it should be viewable? eg. viewPerms or check that the user can actually 
//call this function 
async function getAll(userid) {
    try{ 
        //Returns all content with the specified userid 
        const posts = await Content.find({user: userid});
    } catch(error) {
        if (error.name == "CastError") { return null; }
        throw error;
    }
}

//Given a postid, gets the post
//FIX: Again need to check post perms 
async function getById(id) {
    try {
        return await Content.findById(id);
    } catch(error) {
        //error thrown if not in db
        if (error.name == "CastError") { return null; }
        throw error;
    }
}

//Creates a post
async function create(userid, userParam) {
    try {
        //Create a new post 
        const post = new Content(userParam); 
        //Sets the user of the post to the person who created it 
        post.user = userid; 
        //Saves post and returns a status message and the post 
        await post.save(); 
        res.status(201).send(post.toObject());
    } catch(error) {
        //Otherwise throws error if post not created 
        if (error.name == "CastError") { return null; }
        res.status(400).send({
            error: `Unable to create post`
        });
        throw error;
    }
}

//Updates a post
async function update(userid, postid, userParam) {
    //attempt to get user, return null if error getting user
    let post;
    try {
        post = await Content.findById(postid);
        //Checks if the person editing is the the user of the post 
        if(userid == post.user){ 
            //Updates the specified post with the input 
            Object.assign(post, userParam);
            await post.save();
            return post;
        }
        //Otherwise return an error (should I be throwing this?)
        else{ 
            res.status(400).send({
                error: `You do not have permissions to edit this post`
            });
        }
    } catch(error) {
        //error thrown when not found in database
        if (error.name == "CastError") { return null; }
        throw error;
    }
}

//Deletes a post
async function _delete(userid, postid) {
    try {
        post = Content.findbyId(postid); 
        //Checks that the user accessing is the same as the creator 
        if(userid == post.user){
            return await Content.findByIdAndRemove(id);
        }
        else{ 
            res.status(400).send({
                error: `You do not have permissions to delete this post`
            });
        }
    } catch(error) {
        if (error.name == "CastError") { return null; }
        throw error;
    }
}