const db = require('../_helpers/db');
const Content = db.Content;
const User = db.User;
const Share = db.Share;
const Profile = db.Profile;

module.exports = {
    create,
    getById,
    update,
    delete: _delete
};
//Creates a share page
async function create(userid) {
    const user = await User.findById(userid);

    //create share page
    const share = new Share({user: user.email, content: []});
    await share.save();

    //add the share to user
    user.sharePages.push(share.id);
    await user.save();

    return share;
}

async function getById(shareid) {
    const sharePage = await Share.findById(shareid);
    const user = await User.findOne({ email: sharePage.user });
    const profile = await Profile.findById(user.profile);

    //check if the share page and user exist
    if (!sharePage) throw new Error('SharePageNotFoundError');
    if (!user) throw new Error('UserNotFoundError');

    //get all the posts in this sharepage
    var post;
    var posts = [];
    var postid;
    for(postid of sharePage.content) {
        post = await Content.findById(postid);
        if (!post) throw new Error('PostNotFoundError');
        posts.push(post);
    }

    return {
        "content": posts,
        "education": profile.education,
        "experience": profile.experience,
        "logo": profile.logo,
        "firstName": user.firstName,
        "lastName": user.lastName
    };
}

//Updates the content of a share page
async function update(userid, shareid, userParam) {
    const user = await User.findById(userid);
    const sharePage = await Share.findById(shareid);

    //check if the share page exists and belongs to the user
    if (!sharePage) throw new Error('SharePageNotFoundError');
    if (user.email != sharePage.user) throw new Error('UserShareMismatchError');

    //verify that all new content belongs to the user
    if (userParam.content) {
        for (post of userParam.content) {
            //if post is not in user.content, throw error
            if (user.content.indexOf(post) < 0) throw new Error('UserPostMismatchError');
        }
    }

    //update the content
    sharePage.content = userParam.content;
    await sharePage.save();
}

//Deletes a share page
async function _delete(userid, shareid) {
    const user = await User.findById(userid);
    const sharePage = await Share.findById(shareid);

    //check if the share page exists and belongs to the user
    if (!sharePage) throw new Error('SharePageNotFoundError');
    if (user.email != sharePage.user) throw new Error('UserShareMismatchError');

    //remove from user's share field
    const index = user.sharePages.indexOf(shareid);
    if (index > -1) {
        user.sharePages.splice(index, 1);
    }
    await user.save();

    //remove from database
    await Share.findByIdAndRemove(shareid);
}
