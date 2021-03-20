const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/user-controller");

router.get('/usuarios', UsuarioController.all);

router.post('/usuario', UsuarioController.salvar);







module.exports = router