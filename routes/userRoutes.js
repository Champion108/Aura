const express = require("express");
const { loginController, registerController } = require("../controllers/userController");

//const {project} = require("../middleware/authMiddleware");

const Router = express.Router();

Router.post('/login',loginController);
Router.post('/register',registerController);
//Router.get('/fetchUsers',fetchAllUserscontroller);


module.exports = Router;
