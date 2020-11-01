const db = require('../_helpers/db');
const User = db.User;
const Profile = db.Profile; 

module.exports = {
    getById,
    create,
    addLogo, 
    addResume, 
    update,
    delete: _delete
};

async function getById(id) {
    try {
        return await Profile.findById(id);
    } catch(error) {
        throw "Profile does not exist"; 
    }
}

//Creates a post
async function create(userid, userParam) {
    try {
        const user = await User.findById(userid); 
        if(await Profile.findOne({email: user.email})){ 
            throw "User already exists"; 
        } 
        //Create a new post 
        const profile = new Profile(userParam); 
        //Gets user email and saves it 
        profile.email = user.email; 
        user.profile = profile.id; 
        await user.save(); 
        await profile.save();
        return profile;  
    } catch(error) {
        //Otherwise throws error if post not created 
        throw "Profile not created"; 
    }
}

//Adds or updates a logo 
async function addLogo(userid, file){ 
    //Checks if user and profile exist 
    try{ 
        //Finds user 
        const user = await User.findById(userid); 
        //Finds profile 
        const profileid = user.profile; 
        const profile = await Profile.findById(profileid); 
        //Updates logo and saves  
        profile.logo = file.path; 
        await profile.save(); 
        return profile; 
    }
    catch{ 
        throw "Profile does not exist"; 
    }
}

//Adds or updates a resume 
async function addResume(userid, file){ 
    //Checks if user and profile exist 
    try{ 
        //Finds user 
        const user = await User.findById(userid); 
        //Finds profile 
        const profileid = user.profile; 
        const profile = await Profile.findById(profileid); 
        //Updates resume and saves  
        profile.resume = file.path; 
        await profile.save(); 
        return profile; 
    }
    catch{ 
        throw "Profile does not exist"; 
    }
}

//Updates a profile (text only)
async function update(userid, profileid, userParam) {
    //attempt to get user, return null if error getting post
    try {
        const profile = await Profile.findById(profileid);
        //Checks if the person editing is the the person who owns profile 
        const user = await User.findById(userid);
        if(user.profile == profile.id){ 
            //Updates input if yes
            Object.assign(profile, userParam);
            await profile.save();
                return profile;    
        }
        //Otherwise return an error 
        else{ 
            throw "Invalid User Details";
        }
    } catch(error) {
        throw "Profile not found"; 
    }
}

//Deletes a post
async function _delete(userid, profileid) {
    try {
        const profile = Profile.findbyId(profileid); 
        const user = await User.findById(userid);
        //Checks that the user accessing is the same as the creator 
        if(user.profile == profile.id){
            return await Content.findByIdAndRemove(id);
        }
        else{ 
            throw "Invalid User Details"; 
        }
    } catch(error) {

        throw "Profile not found";
    }
}