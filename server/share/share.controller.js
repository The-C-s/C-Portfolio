const express = require('express');
const router = express.Router();
const shareService = require('./share.service');
const verify = require('../_helpers/jwt');

// Routes
router.post('/create',verify.auth, create);

function create(req, res, next) {
    shareService.create(req.user.sub)
        .then(share => res.json(share))
        .catch(err => next(err));
}

module.exports = router;
