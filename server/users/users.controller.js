const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const uploadFile = require('../_helpers/file-upload');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.put('/update', update);
router.put('/avatar', uploadFile.uploadImage.single('file'), addAvatar);
router.put('/background', uploadFile.uploadImage.single('file'), addBackground);
router.delete('/avatar', _deleteAvatar);
router.delete('/background', _deleteBackground);
router.delete('/delete', _delete);

module.exports = router;

/*
authenticate a user login
accessed with POST to /users/authenticate
body should be email and password
no authentication token required
- returns 200 OK and the user (with JWS token) on success
- returns 400 Bad Request and JSON message if credentials are incorrect
- returns 500 Internal Server Error and JSON message on server error
*/
function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
}

/*
register a new user
accessed with a POST to /users/register
body should be an email, password, and other required user information
no authentication token required
- returns 200 OK and empty JSON on success
- returns 400 Bad Request and JSON message if;
    unique field is already taken, OR
    required field is missing
- returns 500 Internal Server Error and JSON message on server error
*/
function register(req, res, next) {
    userService.create(req.body)
        .catch(err => next(err));
        
        /*.then(user => !user ? res.json({message : "register successful"}) : res.status(400).json({message : "Email already taken"}))
        .catch(err => next(err));*/
}

/*
get all the users in the database
(for debugging, should be removed before being given to client)
accessed with a GET to /users/
no body required
no authentication token required
- returns 200 OK and array of users as JSON object on success
- returns 500 Internal Server Error and JSON message on server error
*/
function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

/*
get the current user
(for debugging, should probably be removed before being given to client)
accessed with a GET to /users/current
no body required
authentication token required
- returns 200 OK and current user as JSON object on success
- returns 404 Not Found if token belongs to no user
- returns 500 Internal Server Error and JSON message on server error
*/
function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


/*
updates details of user of given id
access with a PUT to /users/<user id>
body should be the fields to be updated in JSON
authentication required
- returns 200 OK and empty JSON object on success
- returns 401 Unauthorized if token is not valid
- returns 404 Not Found if token belongs to no user
- returns 500 Internal Server Error and JSON message on server error
*/
function update(req, res, next) {
    userService.update(req.user.sub, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function addAvatar(req, res, next) {
    userService.addAvatar(req.user.sub, req.file)
      .then(() => res.json({}))
      .catch(err => next(err));
}

function addBackground(req, res, next) {
    userService.addBackground(req.user.sub, req.file)
      .then(() => res.json({}))
      .catch(err => next(err));
}

function _deleteAvatar(req, res, next) {
    userService.deleteAvatar(req.user.sub)
      .then(() => res.json({}))
      .catch(err => next(err));
}

function _deleteBackground(req, res, next) {
    userService.deleteBackground(req.user.sub)
      .then(() => res.json({}))
      .catch(err => next(err));
}

/*
deleted user of given id
access with a DELETE to /users/<user id>
no body required
authentication required
- returns 200 OK and empty JSON object on success
- returns 401 Unauthorized if token is not valid
- returns 404 Not Found if token belongs to no user
- returns 500 Internal Server Error and JSON message on server error
*/
function _delete(req, res, next) {
    userService.delete(req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}

//based on github.com/cornflourblue/node-mongo-registration-login-api/
