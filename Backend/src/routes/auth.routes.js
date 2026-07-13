const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddelware = require("../middlewares/auth.middleware");

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a user with email and password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @route GET /api/auth/logout
 * @description Logout a user
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get all information of current logged in user
 * @access private
 */

authRouter.get(
	"/get-me",
	authMiddelware.authUser,
	authController.getMeController,
);

module.exports = authRouter;
