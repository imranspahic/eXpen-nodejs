const applicationToken = "NLIUMADeae9SY3RVXlqL";

const cryptoRandomString = require('crypto-random-string');

const User = require('../models/user');

exports.postCreateUser = (req, res, next) => {

    console.log("REQUEST ? = = = = ="  + JSON.stringify(req.body, null, 2));
    console.log("REQEST 2 _ _ _ " + req.body);

    if (req.body.applicationToken != applicationToken) {
        res.status(420).send({
            "message": "Application Token is invalid"
        });
    }


    var accessToken = cryptoRandomString({ length: 70, type: 'base64' });
    console.log(accessToken);
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const dateCreated = new Date();

    console.log("date create" + dateCreated);

    User.create({
        accessToken: accessToken,
        email: email,
        password: password,
        username: username,
        
    }).then(result => {
        res.status(200).send({
            "message": "Successfully created account!",
            "accessToken": accessToken,
            "dateCreated": dateCreated,
            "email": email,
            "username": username
        })
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            "message": "An error occured while trying to create user!"
        });
    });
};