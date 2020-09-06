const express = require('express');
const router = express.Router();
const contentService = require('./content.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

//module.exports = router;
function test(req,res,next){ 
    res.send('Testing'); 
}

function create(req, res, next) { 
    contentService.create(user.id,req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    contentService.getAll(user.id)
        .then(content => res.json(content))
        .catch(err => next(err));
}

function getById(req, res, next){ 
    contentService.getById(req.params.id)
    .then(content => res.json(content))
    .catch(err => next(err)); 
}
//FIX: I'm assuming req.params.id means the content id but I could be wrong 
function update(req, res, next) {
    contentService.update(user.id, req.params.id, req.body)
        .then(content => content ? res.json({}) : res.status(404).json({message: "post not found"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    contentService.delete(user.id, req.params.id)
        .then(content => content ? res.json({}) : res.status(404).json({message: "post not found"}))
        .catch(err => next(err));
}

module.exports = router; 