const express = require('express');
const router = express.Router();
const contentService = require('./content.service');
const verify = require('../_helpers/jwt'); 
const uploadFile = require('../_helpers/file-upload'); 

//FIX: Can only store one file per post, think upload.array?  
// Routes
router.post('/create',verify.auth, uploadFile.upload.single('file'), create);
router.get('/', verify.auth, getAll);
router.get('/:id', getById);
router.put('/:id', verify.auth, uploadFile.upload.single('file'), update);
router.delete('/:id', verify.auth, _delete);


function create(req, res, next) {
    contentService.create(req.user.sub, req.body, req.file)
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
    contentService.update(req.user.sub, req.params.id, req.body, req.file)
        .then(content => content ? res.json({}) : res.status(404).json({message: "Post not found"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    contentService.delete(req.user.sub, req.params.id)
        .then(content => content ? res.json({}) : res.status(404).json({message: "Post not found"}))
        .catch(err => next(err));
}

module.exports = router; 


//Reference for file upload: https://www.youtube.com/watch?v=srPXMt1Q0nY&ab_channel=Academind 
