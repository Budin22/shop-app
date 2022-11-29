import express from "express";
import * as User from "../controllers/user.controller";

const router = express.Router();

router.post("/login", User.login);
router.post("/signup", User.signup);
router.get("/info", User.info);
router.get("/", User.all);

export default router;
