exports.getLogin = (req, res, next) => {
    console.log("Get requested");
    res.render('index', {
        pageTitle: 'eXpen'
    });
};

exports.postLoginDashboard = (req, res, next) => {
    console.log("Login attempt!");
    res.redirect("/dashboard");
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