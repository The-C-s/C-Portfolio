const express = require('express');
const router = express.Router();
const shareService = require('./share.service');
const verify = require('../_helpers/jwt');

// Routes
router.post('/create',verify.auth, create);
router.put('/:id', verify.auth, update);

function create(req, res, next) {
    shareService.create(req.user.sub)
        .then(share => res.json(share))
        .catch(err => next(err));
}

function update(req, res, next) {
    shareService.update(req.user.sub, req.params.id, req.body)
        .then(() => res.json())
        .catch(err => next(err));
}

module.exports = router;
