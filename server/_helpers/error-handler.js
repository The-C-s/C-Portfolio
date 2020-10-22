module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ error: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ error: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ error: 'Invalid Token' });
    }

    if (err.message === 'UserPostMismatchError') {
        return res.status(401).json({ error: 'Post does not belong to User' });
    }

    if (err.message === 'UserShareMismatchError') {
        return res.status(401).json({ error: 'Share page does not belong to User'});
    }

    if (err.message === 'UserNotFoundError') {
        return res.status(404).json({ error: 'User Not Found' });
    }

    if (err.message === 'PostNotFoundError') {
        return res.status(404).json({ error: 'Post Not Found' });
    }

    if (err.message === 'SharePageNotFoundError') {
        return res.status(404).json({ error: 'Share Page Not Found' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}
