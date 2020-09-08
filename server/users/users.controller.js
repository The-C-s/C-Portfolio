const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

/*
authenticate a user login

accessed with POST to /users/authenticate
body should be email and password
no authentication token required

returns 200 OK and the user (with JWS token) on success
returns 400 Bad Request and empty json if email or password is incorrect
returns 500 Internal Server Error and the error as HTML if there is an error
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

returns 200 OK and empty JSON on success
returns 400 Bad Requent and "Email already taken" if email is taken
returns 500 Internal Server Error and the error as HTML if there is an error
*/
function register(req, res, next) {
    userService.create(req.body)
        .then(existingUser => !existingUser ? res.json({}) : res.status(400).json({message : "Email already taken"}))
        .catch(err => next(err));
}

/*
get all the users in the database
(for debugging, should be removed before being given to client)

accessed with a GET to /users/
no body required
no authentication token required

returns 200 OK and array of users in JSON format on success
returns 500 Internal Server Error and the error as HTML if there is an error
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

returns 200 OK and current user as JSON object on success
returns 404 Not Found if user not found
returns 500 Internal Server Error and the error as HTML if there is an error
*/
function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

/*
get user by ID
(for debugging, should probably be removed before being given to client)

accessed with a GET to /users/<user id>
no body required
authentication token required

returns 200 OK and current user as JSON object on success
returns 404 Not Found if user not found
returns 500 Internal Server Error and the error as HTML if there is an error
*/
function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.status(404).json({message: "user not found"}))
        .catch(err => next(err));
}

/*
updates details of user of given id

access with a PUT to /users/<user id>
body should be the fields to be updated in JSON
authentication required

returns 200 OK and empty JSON object on success
returns 404 Not Found if user not found
returns 500 Internal Server Error and the error as HTML if there is an error 
*/
function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => user ? res.json({}) : res.status(404).json({message: "user not found"}))
        .catch(err => next(err));
}

/*
deleted user of given id

access with a DELETE to /users/<user id>
no body required
authentication required

returns 200 OK and empty JSON object on success
returns 404 Not Found if user not found
returns 500 Internal Server Error and the error as HTML if there is an error 
*/
function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(user => user ? res.json({}) : res.status(404).json({message: "user not found"}))
        .catch(err => next(err));
}

//based on github.com/cornflourblue/node-mongo-registration-login-api/