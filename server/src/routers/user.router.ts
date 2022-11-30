import express from "express";
import { info, all } from "../controllers/user.controller";
import passport from "passport";

const router = express.Router();

router.get("/info", passport.authenticate("jwt", { session: false }), info);
router.get("/", passport.authenticate("jwt", { session: false }), all);

export default router;
