const db = require('../_helpers/db');
const Content = db.Content;
const User = db.User;
const Share = db.Share;
module.exports = {
    create,
};
//Creates a post
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
