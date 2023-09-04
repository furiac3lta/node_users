const { getAll, createUser, getOneUser, removeUser, update } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
		.get(getAll)
        .post(createUser)
usersRouter.route("/:id")
        .get(getOneUser)
        .delete(removeUser)
        .put(update)

module.exports = usersRouter;