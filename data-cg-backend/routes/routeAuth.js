const express = require('express');
const router = express.Router();
const ControladorAuth= require('../controller/userAuth-controller');

router.post('/login', ControladorAuth.login);



module.exports = router