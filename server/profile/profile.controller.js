const express = require('express');
const router = express.Router();
const profileService = require('./profile.service');
const verify = require('../_helpers/jwt'); 
const uploadFile = require('../_helpers/file-upload'); 

router.post('/create',verify.auth, create);
router.put('/addLogo/:id',verify.auth, uploadFile.single('file'), addLogo);
router.put('/addResume/:id', verify.auth, uploadFile.single('file'), addResume);  
router.get('/:id', getById);
router.put('/:id', verify.auth, update);
router.delete('/:id', verify.auth, _delete);

function create(req, res, next) {
    profileService.create(req.user.sub, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}   

function addLogo(req, res, next){ 
    profileService.addLogo(req.user.sub, req.params.id, req.file)
    .then(profile => profile ? res.json({}) : res.status(404).json({message: "Profile not found"}))
    .catch(err => next(err));  
}

function addResume(req, res, next){ 
    profileService.addResume(req.user.sub, req.params.id, req.file)
    .then(profile => profile ? res.json({}) : res.status(404).json({message: "Profile not found"}))
    .catch(err => next(err));  
}

function getById(req, res, next){ 
    profileService.getById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => next(err)); 
}

function update(req, res, next) {
    profileService.update(req.user.sub, req.params.id, req.body)
        .then(profile => profile ? res.json({}) : res.status(404).json({message: "Profile not found"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    profileService.delete(req.user.sub, req.params.id)
        .then(profile => profile ? res.json({}) : res.status(404).json({message: "Profile not found"}))
        .catch(err => next(err));
}

module.exports = router; 
