var express = require('express');
var router = express.Router();
var Login = require('../models/Login.js');
var config = require('../config/config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');

var sanitize = require('mongo-sanitize');

/* authenticate login user */
router.post('/user', function (req, res, next) {
    // Login.find(function (err, products) {
    //     if (err) return next(err);
    //     res.json(products);
    // });
    authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.json(user);
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
});

function authenticate(username, password) {
    var deferred = Q.defer();
    Login.findOne({
        username: sanitize(username),
        password: sanitize(password)
    }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                token: jwt.sign({
                    sub: user._id
                }, config.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

module.exports = router;