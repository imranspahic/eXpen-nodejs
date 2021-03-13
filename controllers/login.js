const sequelize = require('../utils/database');
const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    console.log("Get requested");
    console.log(req.app.get('hasError'));
    let hasError = req.app.get('hasError');
    if(!hasError) hasError = false;
    res.render('index', {
        pageTitle: 'eXpen',
        hasError: hasError
    });
    req.app.set('hasError', null);
};

exports.postLoginDashboard = (req, res, next) => {
    console.log("Login attempt!");
    const username = req.body.username;
    const password = req.body.password;
    User.findAll({
        where: {
            username: username
        }
    }).then(user => {
        if (user[0]) {
            if (user[0].password === password) {
                res.render('dashboard', {
                    pageTitle: 'Dashboard'
                })
            }
            else {
                req.app.set('hasError', true)
                res.redirect("/");
            }
        }
        else {
            req.app.set('hasError', true)
            res.redirect("/");
        }
    }).catch(err => console.log(err));
}

exports.getLoginDashboard = (req, res, next) => {
    res.render('dashboard', {
        pageTitle: 'Dashboard'
    })
}

exports.postLogoutDashboard = (req, res, next) => {
    console.log("User logout route");
    res.redirect('/');
}