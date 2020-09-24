const db = require('../_helpers/db');
const Content = db.Content; 
const User = db.User;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    deleteByUser: _deleteByUser
};
//FIX: Generic errors currently, might be helpful to have an error with a status code and a message? 

//Returns all content by the given user
//FIX: Add if statements to check if it should be viewable? eg. viewPerms or check that the user can actually 
//call this function 
async function getAll(userid) {
    const user = await User.findById(userid);
    // validate
    if (!user) throw new Error('UserNotFoundError');

    //get posts 
    var post;
    var posts = [];
    var postid;
    for(postid of user.content) {
        post = await Content.findById(postid);
        if (!post) throw new Error('PostNotFoundError');
        posts.push(post);
    } 
    return posts;
}

//Given a postid, gets the post
//FIX: Again need to check post perms 
async function getById(id) {
    try {
        return await Content.findById(id);
    } catch(error) {
        //error thrown if not in db
        throw "Post does not exist"; 
    }
}

//Creates a post
async function create(userid, userParam, file) {
    try {
        //Create a new post 
        const post = new Content(userParam); 
        //Sets the user of the post to the person who created it 
        const user = await User.findById(userid); 
        post.user = user.email; 
        //Saves url of image/file if there is one
        if(typeof file !== 'undefined'){
            post.content = file.path;
        }
        else{
            post.content = null;
        }
        //Saves post and returns a post 
        await post.save();
        //add the post id to the user's content field
        user.content.push(post.id);
        await user.save();

        return post;  
    } catch(error) {
        //Otherwise throws error if post not created 
        throw "Post not created"; 
    }
}

//Updates a post
async function update(userid, postid, userParam, file) {
    //attempt to get user, return null if error getting user
    let post;
    try {
        post = await Content.findById(postid);
        //Checks if the person editing is the the user of the post 
        const user = await User.findById(userid);
        if(user.email == post.user){ 
            //Updates the specified post with the input 
            Object.assign(post, userParam);
            if(file.path){ 
                //Updates content's file path if file exists 
                post.content = file.path; 
            }
            await post.save();
                return post;    
        }
        //Otherwise return an error 
        else{ 
            throw "Invalid User Details";
        }
    } catch(error) {
        throw "Post not found"; 
    }
}

//Deletes a post
async function _delete(userid, postid) {
    const post = await Content.findById(postid);
    const user = await User.findById(userid);

    // validate
    if (!user) throw new Error('UserNotFoundError');
    if (!post) throw new Error('PostNotFoundError');
    //Checks that the user accessing is the same as the creator 
    if(user.email != post.user) throw new Error("UserPostMismatchError"); 

    //remove from user's content field
    const index = user.content.indexOf(postid);
    if (index > -1) {
        user.content.splice(index, 1);
    }
    await user.save();

    //remove from database
    return await Content.findByIdAndRemove(postid);
}
//deletes all content of a specific user
async function _deleteByUser(userid) {
    const user = await User.findById(userid);
    // validate
    if (!user) throw new Error('UserNotFoundError');

    //for each post, delete it
    var postid;
    for(postid of user.content) {
        await _delete(userid, postid);
    }
}