const express = require('express');
const router = express.Router();
const usersRouter = require('./user.router');

// colocar las rutas aquí
router.use("/users", usersRouter)

module.exports = router;