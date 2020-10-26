const expressJwt = require('express-jwt');
const config = require('../config.json');
const publicRoutes = require('../public-routes.json')
const userService = require('../users/user.service');
const _jwt = require("jsonwebtoken");

module.exports = { 
    jwt, 
    auth
}

function jwt() {
    const secret = config.secret;
    const shareRoute = { url: /^\/share\/.+/, methods: [ 'GET' ] };
    const allPublicRoutes = publicRoutes.routes;
    allPublicRoutes.push(shareRoute);
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        //a public route or a GET requst to a URL starting with '/share/'
        path: allPublicRoutes
    });
}

//Middleware for content handling
//Checking if token is authenticated 
//Bless this youtube channel: https://www.youtube.com/watch?v=2jqok-WgelI&ab_channel=DevEd 
async function auth(req,res,next){ 
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token) {return res.status(401).send('Access Denied')}; 
    try{ 
        const verified = _jwt.verify(token, config.secret); 
        req.user = verified; 
        req.token = token; 
        next(); 
    } catch(err){ 
        res.status(400).send('Invalid Token'); 
    }
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

//based on https://github.com/cornflourblue/node-mongo-registration-login-api/