import express from "express";
const router = express.Router();
import * as controller from "../../controllers/client/auth.controller";
import { authSignUp } from "../../middlewares/client/auth.middleware";
router.get("/login", controller.login);
router.get("/sign-up", controller.signup);
router.post("/sign-up", authSignUp, controller.signupPost);
router.post("/login", controller.loginPost);
export default router;