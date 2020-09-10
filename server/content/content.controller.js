const express = require('express');
const router = express.Router();
const contentService = require('./content.service');
const verify = require('../_helpers/jwt'); 

// routes
router.post('/create', verify.auth, create);
router.get('/', verify.auth, getAll);
router.get('/:id', getById);
router.put('/:id', verify.auth, update);
router.delete('/:id', verify.auth, _delete);


function create(req, res, next) { 
    contentService.create(req.user.sub, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    contentService.getAll(req.user.sub)
        .then(content => res.json(content))
        .catch(err => next(err));
}

function getById(req, res, next){ 
    contentService.getById(req.params.id)
    .then(content => res.json(content))
    .catch(err => next(err)); 
}

function update(req, res, next) {
    contentService.update(req.user.sub, req.params.id, req.body)
        .then(content => content ? res.json({}) : res.status(404).json({message: "Post not found"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    contentService.delete(req.user.sub, req.params.id)
        .then(content => content ? res.json({}) : res.status(404).json({message: "Post not found"}))
        .catch(err => next(err));
}

module.exports = router; 