const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login');

router.get('/', loginController.getLogin);

router.post('/login-dashboard', loginController.postLoginDashboard);

router.get('/dashboard', loginController.getLoginDashboard);

router.post('/logout-dashboard', loginController.postLogoutDashboard);

module.exports = router;