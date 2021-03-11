const applicationToken = "NLIUMADeae9SY3RVXlqL";

const cryptoRandomString = require('crypto-random-string');

const User = require('../models/user');

exports.postCreateUser = (req, res, next) => {

    if (req.body.applicationToken != applicationToken) {
        res.status(420).send({
            "message": "Application Token is invalid"
        });
    }

    var securityToken = cryptoRandomString({ length: 70, type: 'base64' });
    console.log(securityToken);
    var email = req.body.email;
    var username = req.body.username;

    User.create({
        securityToken: securityToken,
        email: email,
        username: username
    }).then(result => {
        res.status(200).send({
            "message": "Successfully created account!"
        })
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            "message": "An error occured while trying to create username into database!"
        });
    });
};